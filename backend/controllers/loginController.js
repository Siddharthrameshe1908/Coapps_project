const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// JOIN TABLE funcionality on login, to create new table that holds only those notes associated with that users user_id?

// @desc    verifies login credentials
// @route   POST /
const userLogin = (req, res, next) => {
 
  const { username, password } = req.body;

  pool.query(
    "SELECT * FROM user WHERE username = '" + username + "' ",
    (err, results) => {
      if (err) return handleSQLError(res, err);
      if (!results.length)
        return res
          .status(404)
          .send(`User with user_name "${username}" does not exist.`);

      const hash = results[0].password;
      console.log(hash);
      const userData = { ...results[0] };
      if (hash === password) {
        const token = jwt.sign(
          {
            userData,
          },
          "secret",
          { expiresIn: 5 * 60 * 60 }
        );
        console.log(userData);
        return res.status(201).json({
          result: token,
          userData,
        });
      } else {
        res.status(400).send("Invalid password");
      }
    }
  );
};


const userSignUp = (req, res, next) => {
  console.log(req.body);
  const { email,username, password, category, rate } = req.body;

  // First, check if the username already exists
  pool.query(
    'SELECT * FROM user WHERE username = ?',
    [username],
    (err, results) => {
      if (err) return handleSQLError(res, err);

      if (results.length > 0) {
        return res.status(400).json({
          message: 'Username already exists'
        });
      }

      // If username does not exist, proceed to insert the new user
      pool.query(
        'INSERT INTO user (username,email, password, category, rate_per_hour) VALUES (?, ?, ?, ?,?)',
        [username,email, password, category, rate],
        (err, results) => {
          if (err) return handleSQLError(res, err);
          const userData = { username,email,rate,category };
          const token = jwt.sign(
            {
              userData,
            },
            "secret",
            { expiresIn: 5 * 60 * 60 }
          );
          console.log(userData);
          return res.status(201).json({
            result: token,
            userData,
          });
        }
      );
    }
  );
};

module.exports = { userLogin,userSignUp };

const pool = require("../../sql/connection");
const { handleSQLError } = require("../../sql/error");

// JOIN TABLE funcionality on login, to create new table that holds only those notes associated with that users user_id?

// @desc    verifies login credentials
// @route   POST /
const getUsersByCategory = (req, res, next) => {
  const { category } = req.query;

  console.log(category)

  // Check if the category is provided
  if (!category) {
    return res.status(400).json({
      message: 'Category is required'
    });
  }

  // Query the database for users with the specified category
  pool.query(
    'SELECT * FROM user WHERE category = ?',
    [category],
    (err, results) => {
      if (err) return handleSQLError(res, err);

      // Return the list of users with the specified category
      return res.status(200).json({
        users: results
      });
    }
  );
};

const getUsers = (req, res, next) => {

  // Query the database for users with the specified category
  pool.query(
    'SELECT * FROM user',
    (err, results) => {
      if (err) return handleSQLError(res, err);

      // Return the list of users with the specified category
      return res.status(200).json({
        users: results
      });
    }
  );
};

const Assign = (req, res, next) => {
  const { assigned_worker, assigned_to } = req.body;

  // First, check if the row already exists
  pool.query(
    'SELECT * FROM assigned WHERE assigned_worker = ? AND assigned_to = ?',
    [assigned_worker, assigned_to],
    (err, results) => {
      if (err) return handleSQLError(res, err);

      // If a row is found, return a conflict error
      if (results.length > 0) {
        return res.status(409).json({
          message: "The assignment already exists!"
        });
      }

      // If no row is found, proceed with the insertion
      pool.query(
        'INSERT INTO assigned (assigned_worker, assigned_to) VALUES (?, ?)',
        [assigned_worker, assigned_to],
        (err, results) => {
          if (err) return handleSQLError(res, err);

          return res.status(200).json({
            message: "Assigned successfully!"
          });
        }
      );
    }
  );
};

const Myassign = (req, res, next) => {
  const { assigned_to } = req.body;

  // First, check if the row already exists
  pool.query(
    'SELECT * FROM assigned WHERE  assigned_to = ?',
    [ assigned_to],
    (err, results) => {
      if (err) return handleSQLError(res, err);


      return res.status(200).json({
        assigned:results
      });
    }
    
  );
};

module.exports = { getUsersByCategory,getUsers,Assign ,Myassign};

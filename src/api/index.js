import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const signIn = (formData) => API.post('/signin', formData);
export const signUp = (formData) => API.post('/signup', formData);

export const fetchAll = () => API.get('/all');
export const fetchCategory = (formData) => API.get(`/category/?category=${formData.category}`);
export const Assign = (formData) => API.post('/assign', formData);
export const myAssign = (formData) => API.post('/myassign', formData);





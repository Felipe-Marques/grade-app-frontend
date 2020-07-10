import http from '../http-common';

const getAll = () => {
  return http.get('/grade');
};

const get = (id) => {
  return http.get(`/grade/${id}`);
};

const create = (student) => {
  return http.post('/grade', student);
};

const update = (id, student) => {
  return http.patch(`/grade/${id}`, student);
};

const remove = (id) => {
  return http.delete(`/grade/${id}`);
};

const removeAll = () => {
  return http.delete(`/grade`);
};

const findByName = (name) => {
  return http.get(`/grade?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};

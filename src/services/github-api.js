import request from './request';

export const getUser = (user) => request(`/users/${user}`);
export const getRepos = (user) => request(`/users/${user}/repos`);

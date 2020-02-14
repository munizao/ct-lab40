const request = path => {
  return fetch(`https://cors-anywhere.herokuapp.com/api.github.com/${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};

export const getUser = (user) => request(`/users/${user}`);
export const getRepos = (user) => request(`/users/${user}/repos`);

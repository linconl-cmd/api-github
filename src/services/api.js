import axios from "axios";
import { langColors } from "./config";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`/users/${login}`);
export const getRepos = async(login) =>api.get(`/users/${login}/repos`)

export default api;


export const getLangsFrom = (repositories) => {
    let  stats = repositories
    .map((Repository) => Repository.language)
    .reduce((data, language) => ({
      ...data,
      [language]: (data[language] || 0) + 1,
    }), []);

    delete stats.null;

    stats = Object.keys(stats)
        .map((language) =>({
          name: language,
          count: stats[language],
          color:langColors[language.toLowerCase()]
        }))
        .sort((a, b) => b.count - a.count);

    console.log(stats)

    return stats
}



// edit [pra executar o json serve : npm json-server]
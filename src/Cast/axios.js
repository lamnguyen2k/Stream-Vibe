import axios from 'axios';

let baseUrl = 'https://api.themoviedb.org';
const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTAyYjlmMTk4NThhNDE3ZDk2YmFmMzQxNTdhYWQ3MSIsInN1YiI6IjY1YmExYTMzMzNhMzc2MDE2Mjg3MDgwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cbixWh-37d-wOrFf5xIcdO2EK2PM3HZB5yDXukaIXXE',
        accept: 'application/json',
    },
});

export default instance;

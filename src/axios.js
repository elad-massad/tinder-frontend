import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-backend-appliction.herokuapp.com",
});

export default instance;
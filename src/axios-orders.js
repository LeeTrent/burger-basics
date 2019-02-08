import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-32eaa.firebaseio.com/'
});

export default instance;
import axios from 'axios';

const Server = axios.create({ baseURL: 'https://api.premo.live' });
Server.defaults.headers.common['apiKey'] = '126BB6D15A434E3AB3A9EC302EEE98B5';



export default Server;

import axios from 'axios';


export default axios.create({
 baseURL: 'http://localhost:3500'
    //baseURL: 'https://obscure-eureka-9496qvxwg5vf99g5-3500.app.github.dev',
 // withCredentials: true 
})
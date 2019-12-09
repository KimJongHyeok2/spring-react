import axios from 'axios';

export function test() {
    const config = {
        method: 'get',
        url: 'http://localhost:8080/test'
    }    
    return axios(config);
}
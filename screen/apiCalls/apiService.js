import axios from 'axios';
export const AXIOS_AUTH_KIT = async (
    method,
    endPoint,
    data
) => {
    let token = "";

    // const header = {
    //     'Content-Type' : 'application/json',
    //     Authorization: 'Bearre ' + token,
    // }

    const auth = axios.create({
        baseURL: "https://jsonplaceholder",
        headers: header
    });

    let res;

    switch(method){
        case 'POST' : 
        res = await auth    
            .post(endPoint, data)
            .then(res => {
                return res;
            })
            .catch(e => {
                return e;
            });
        break;
        case 'GET' : 
        console.log('reddd')
        res = await auth    
            .get(endPoint, data)
            .then(res => {
                return res;
            })
            .catch(e => {
                return e;
            });
        break;
    }
    return res;
}
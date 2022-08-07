import axios from "axios";

export const FETCH_LOADING = "Fetch_Loading";
export const FETCH_SUCCESS = "Fetch_Success";
export const FETCH_ERROR = 'Fetch_Error';

export default function fetchData(onResponse){
    // let method = "GET";
    return(dispatch) => {
        dispatch(fetchLoading());
        return axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            if(res && res.status === 200){
                // console.log('Success----',res.data);
                onResponse.success(res);
                dispatch(fetchSuccess(res.data))
            }else{
                onResponse.erros(res)
                // console.log('Errorr----',res);
                dispatch(fetchError(res))
            }
        });
    };
}


function fetchLoading(){
    return{
        type: FETCH_LOADING,
    }
}

function fetchSuccess(data){
    return{
        type: FETCH_SUCCESS,
        data,
    };
}

function fetchError(data){
    return{
        type: FETCH_ERROR,
        data
    }
}
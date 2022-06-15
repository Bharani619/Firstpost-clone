import * as types from './actionTypes'
import axios from "axios";

// export const fetchDataRequest = (payload)=>{
//      return{
//         type:types.FETCHDATAREQUEST,
//         payload
//      }
// }

// export const fetchDataSuccess = (payload)=>{
//     return{
//         type:types.FETCHDATASUCCESS,
//         payload
//     }
// }

// export const fetchDataError = (payload)=>{
//     return{
//         type:types.FETCHDATAERROR,
//         payload
//     }
// }

export const fetchArchiveDataRequest = (payload)=>{
    return{
       type:types.FETCHARCHIVEDATAREQUEST,
       payload
    }
}

export const fetchArchiveDataSuccess = (payload)=>{
    return{
        type:types.FETCHARCHIVEDATASUCCESS,
        payload
    }
}

export const fetchArchiveDataError = (payload)=>{
    return{
        type:types.FETCHARCHIVEDATAERROR,
        payload
    }
}

export const fetchMostReadRequest = (payload)=>{
    return{
        type:types.FETCHMOSTREADREQUEST,
        payload
    }
}

export const fetchMostReadSuccess = (payload)=>{
    return{
        type:types.FETCHMOSTREADSUCCESS,
        payload
    }
}

export const fetchMostReadError = (payload)=>{
    return{
        type:types.FETCHMOSTREADERROR,
        payload
    }
}



// export const fetchData = (payload)=>{
//     return(dispatch)=>{
//         dispatch(fetchDataRequest())
//         axios.get("https://newsdata.io/api/1/news?apikey=pub_8334796b13c6555cb059f3a1be215d6d97c6&country=in,us&language=en")
//         .then((r)=>dispatch(fetchDataSuccess(r.data)))
//         .catch((e)=>dispatch(fetchDataError(e.data)))
//     }
// }

export const fetchArchiveData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchArchiveDataRequest())
        axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=933b674d7dee44baba26cb01c378c586")
        .then((r)=>dispatch(fetchArchiveDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchArchiveDataError(e.data)))
    }
}


export const fetchMostReadData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchMostReadRequest())
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=933b674d7dee44baba26cb01c378c586",{
            params:{perPage:5}
        })
        .then((r)=>dispatch(fetchMostReadSuccess(r.data)))
        .catch((e)=>dispatch(fetchMostReadError(e.data)))
    }
}


// 933b674d7dee44baba26cb01c378c586
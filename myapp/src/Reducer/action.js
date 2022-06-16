import * as types from './actionTypes'
import axios from "axios";

export const fetchDataRequest = (payload)=>{
     return{
        type:types.FETCHDATAREQUEST,
        payload
     }
}

export const fetchDataSuccess = (payload)=>{
    return{
        type:types.FETCHDATASUCCESS,
        payload
    }
}

export const fetchDataError = (payload)=>{
    return{
        type:types.FETCHDATAERROR,
        payload
    }
}

export const fetchData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchDataRequest())
        axios.get("https://newsdata.io/api/1/news?apikey=pub_838770b4e7004abcd680cb2ed4ee5e68d5b2&country=in,us&language=en")
        .then((r)=>dispatch(fetchDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchDataError(e.data)))
    }
}

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

export const fetchArchiveData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchArchiveDataRequest())
        axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=94cc36c03a094c21accaffab9e6fead8")
        .then((r)=>dispatch(fetchArchiveDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchArchiveDataError(e.data)))
    }
}


export const fetchMostReadData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchMostReadRequest())
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=94cc36c03a094c21accaffab9e6fead8",{
            params:{perPage:5}
        })
        .then((r)=>dispatch(fetchMostReadSuccess(r.data)))
        .catch((e)=>dispatch(fetchMostReadError(e.data)))
    }
}

export const fetchHealthDataRequest = (payload)=>{
    return{
        type:types.FETCH_HEATLH_DATA_REQUEST,
        payload
    }
}

export const fetchHealthDataSuccess = (payload)=>{
    return{
        type:types.FETCH_HEATLH_DATA_SUCCESS,
        payload
    }
}

export const fetchHealthDataError = (payload)=>{
    return{
        type:types.FETCH_HEATLH_DATA_ERROR,
        payload
    }
}

export const fetchHealthData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchHealthDataRequest())
        axios.get("https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=94cc36c03a094c21accaffab9e6fead8")
        .then((r)=>dispatch(fetchHealthDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchHealthDataError(e.data)))
    }
}

export const fetchEntDataRequest = (payload)=>{
    return{
        type:types.FETCH_ENT_DATA_REQUEST,
        payload
    }
}

export const fetchEntDataSuccess = (payload)=>{
    return{
        type:types.FETCH_ENT_DATA_SUCCESS,
        payload
    }
}

export const fetchEntDataError = (payload)=>{
    return{
        type:types.FETCH_ENT_DATA_ERROR,
        payload
    }
}

export const fetchEntData = (payload,page)=>{
    return(dispatch)=>{
        dispatch(fetchEntDataRequest())
        axios.get("https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=94cc36c03a094c21accaffab9e6fead8",{
            params:{
                _page:page,
                _limit:5
            }
        })
        .then((r)=>dispatch(fetchEntDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchEntDataError(e.data)))
    }
}

export const fetchSportsDataRequest = (payload)=>{
    return{
        type:types.FETCH_SPORTS_DATA_REQUEST,
        payload
    }
}

export const fetchSportsDataSuccess = (payload)=>{
    return{
        type:types.FETCH_SPORTS_DATA_SUCCESS,
        payload
    }
}

export const fetchSportsDataError = (payload)=>{
    return{
        type:types.FETCH_SPORTS_DATA_ERROR,
        payload
    }
}

export const fetchSportsData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchSportsDataRequest())
        axios.get("https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=94cc36c03a094c21accaffab9e6fead8",{
            params:{perPage:5}
        })
        .then((r)=>dispatch(fetchSportsDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchSportsDataError(e.data)))
    }
}

export const fetchWorldDataRequest = (payload)=>{
    return{
        type:types.FETCH_WORLD_DATA_REQUEST,
        payload
    }
}

export const fetchWorldDataSuccess = (payload)=>{
    return{
        type:types.FETCH_WORLD_DATA_SUCCESS,
        payload
    }
}

export const fetchWorldDataError = (payload)=>{
    return{
        type:types.FETCH_WORLD_DATA_ERROR,
        payload
    }
}

export const fetchWorldData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchWorldDataRequest())
        axios.get("https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=94cc36c03a094c21accaffab9e6fead8")
        .then((r)=>dispatch(fetchWorldDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchWorldDataError(e.data)))
    }
}

export const fetchIndiaDataRequest = (payload)=>{
    return{
        type:types.FETCH_INDIA_DATA_REQUEST,
        payload
    }
}

export const fetchIndiaDataSuccess = (payload)=>{
    return{
        type:types.FETCH_INDIA_DATA_SUCCESS,
        payload
    }
}

export const fetchIndiaDataError = (payload)=>{
    return{
        type:types.FETCH_INDIA_DATA_ERROR,
        payload
    }
}

export const fetchIndiaData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchIndiaDataRequest())
        axios.get("https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=94cc36c03a094c21accaffab9e6fead8")
        .then((r)=>dispatch(fetchIndiaDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchIndiaDataError(e.data)))
    }
}

export const fetchTechDataRequest = (payload)=>{
    return{
        type:types.FETCH_TECH_DATA_REQUEST,
        payload
    }
}

export const fetchTechDataSuccess = (payload)=>{
    return{
        type:types.FETCH_TECH_DATA_SUCCESS,
        payload
    }
}

export const fetchTechDataError = (payload)=>{
    return{
        type:types.FETCH_TECH_DATA_ERROR,
        payload
    }
}

export const fetchTechData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchTechDataRequest())
        axios.get("https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=94cc36c03a094c21accaffab9e6fead8")
        .then((r)=>dispatch(fetchTechDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchTechDataError(e.data)))
    }
}

export const fetchCricketDataRequest = (payload)=>{
    return{
        type:types.FETCH_CRICKET_DATA_REQUEST,
        payload
    }
}

export const fetchCricketDataSuccess = (payload)=>{
    return{
        type:types.FETCH_CRICKET_DATA_SUCCESS,
        payload
    }
}

export const fetchCricketDataError = (payload)=>{
    return{
        type:types.FETCH_CRICKET_DATA_ERROR,
        payload
    }
}

export const fetchCricketData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchCricketDataRequest())
        axios.get("https://newsapi.org/v2/everything?q=cricket&apiKey=94cc36c03a094c21accaffab9e6fead8")
        .then((r)=>dispatch(fetchCricketDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchCricketDataError(e.data)))
    }
}

export const fetchPoliticsDataRequest = (payload)=>{
    return{
        type:types.FETCH_POLITICS_DATA_REQUEST,
        payload
    }
}

export const fetchPoliticsDataSuccess = (payload)=>{
    return{
        type:types.FETCH_POLITICS_DATA_SUCCESS,
        payload
    }
}

export const fetchPoliticsDataError = (payload)=>{
    return{
        type:types.FETCH_POLITICS_DATA_ERROR,
        payload
    }
}

export const fetchPoliticsData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchPoliticsDataRequest())
        axios.get("https://newsapi.org/v2/everything?q=politics&apiKey=94cc36c03a094c21accaffab9e6fead8")
        .then((r)=>dispatch(fetchPoliticsDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchPoliticsDataError(e.data)))
    }
}

export const fetchRandomDataRequest = (payload)=>{
    return{
        type:types.FETCH_RANDOM_DATA_REQUEST,
        payload
    }
}

export const fetchRandomDataSuccess = (payload)=>{
    return{
        type:types.FETCH_RANDOM_DATA_SUCCESS,
        payload
    }
}

export const fetchRandomDataError = (payload)=>{
    return{
        type:types.FETCH_RANDOM_DATA_ERROR,
        payload
    }
}

export const fetchRandomData = (payload)=>{
    return(dispatch)=>{
        dispatch(fetchRandomDataRequest())
        axios.get("https://newsdata.io/api/1/news?apikey=pub_838770b4e7004abcd680cb2ed4ee5e68d5b2&country=in,us,kp,gb&language=en")
        .then((r)=>dispatch(fetchRandomDataSuccess(r.data)))
        .catch((e)=>dispatch(fetchRandomDataError(e.data)))
    }
}



// https://newsdata.io/api/1/news?apikey=pub_838770b4e7004abcd680cb2ed4ee5e68d5b2
// 94cc36c03a094c21accaffab9e6fead8
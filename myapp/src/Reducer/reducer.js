import * as types from './actionTypes'

const initialState = {
    Data:[],
    ArchiveData:[],
    MostReadData:[],
    HealthData:[],
    Entertainment:[],
    SportsData:[],
    WorldNews:[],
    IndiaNews:[],
    Tech:[],
    Cricket:[],
    Politics:[],
    Random:[],
    SearchData:[],
    error:"",
    loading:false
}

export const reducer = (state=initialState, action)=>{
    const {type,payload}=action;
    switch(type){
        case types.FETCHDATAREQUEST:
            return{
                ...state,
                error:"",
                loading:true
            }
        case types.FETCHDATASUCCESS:
            return{
                ...state,
                Data:payload,
                loading:false,
                error:''
            }   
        case types.FETCHDATAERROR:
            return{
                ...state,
                error:payload,
                loading:false,
            }
        case types.FETCHARCHIVEDATAREQUEST:
            return{
                ...state,
                error:"",
                loading:false
            }
        case types.FETCHARCHIVEDATASUCCESS:
            return{
                ...state,
                ArchiveData:payload,
                loading:false,
                error:""

            }
        case types.FETCHARCHIVEDATAERROR:
            return{
                ...state,
                error:payload,
                loading:false
            }    
        case types.FETCHMOSTREADREQUEST:
            return{
                ...state,
                 error:"",
                loading:false
                }        
        case types.FETCHMOSTREADSUCCESS:
            return{
                ...state,
                MostReadData:payload,
                error:"",
                loading:false
            }  
        case types.FETCHMOSTREADERROR:
            return{
                ...state,
                error:payload,
                loading:false
            }     
        case types.FETCH_HEATLH_DATA_REQUEST:
            return{
                ...state,
                error:"",
                loading:false
                        }        
        case types.FETCH_HEATLH_DATA_SUCCESS:
            return{
                ...state,
                HealthData:payload,
                error:"",
                loading:false
                    }  
        case types.FETCH_HEATLH_DATA_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
                    }
        case types.FETCH_ENT_DATA_REQUEST:
            return{
                ...state,
                error:"",
                loading:false
                    }        
        case types.FETCH_ENT_DATA_SUCCESS:
           return{
                ...state,
                Entertainment:payload,
                error:"",
                loading:false
                }  
        case types.FETCH_ENT_DATA_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            }                  
        case types.FETCH_SPORTS_DATA_REQUEST:
            return{
                ...state,
                error:"",
                loading:false
            }        
        case types.FETCH_SPORTS_DATA_SUCCESS:
            return{
                ...state,
                SportsData:payload,
                error:"",
                loading:false
            }  
        case types.FETCH_SPORTS_DATA_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            }  
        case types.FETCH_WORLD_DATA_REQUEST:
            return{
                   ...state,
                    error:"",
                   loading:false
                }        
        case types.FETCH_WORLD_DATA_SUCCESS:
            return{
                    ...state,
                    WorldNews:payload,
                    error:"",
                    loading:false
                }  
        case types.FETCH_WORLD_DATA_ERROR:
            return{
                    ...state,
                    error:payload,
                    loading:false
            }   
        case types.FETCH_INDIA_DATA_REQUEST:
            return{
                ...state,
                error:"",
                loading:false
            }                   
        case types.FETCH_INDIA_DATA_SUCCESS:
            return{
                    ...state,
                    IndiaNews:payload,
                    error:"",
                    loading:false
            }                  
        case types.FETCH_INDIA_DATA_ERROR:
            return{
                    ...state,
                    error:payload,
                    loading:false
            }                  
        case types.FETCH_TECH_DATA_REQUEST:
            return{
                    ...state,
                     error:"",
                    loading:false
           }        
        case types.FETCH_TECH_DATA_SUCCESS:
            return{
                    ...state,
                    Tech:payload,
                    error:"",
                    loading:false
                }  
        case types.FETCH_TECH_DATA_ERROR:
           return{
                    ...state,
                    error:payload,
                    loading:false
            }
        case types.FETCH_CRICKET_DATA_REQUEST:
            return{
                     ...state,
                     error:"",
                    loading:false
            }        
        case types.FETCH_CRICKET_DATA_SUCCESS:
            return{
                    ...state,
                    Cricket:payload,
                    error:"",
                    loading:false
            }  
        case types.FETCH_CRICKET_DATA_ERROR:
           return{
                    ...state,
                    error:payload,
                     loading:false
            }                        
        case types.FETCH_POLITICS_DATA_REQUEST:
            return{
                     ...state,
                     error:"",
                    loading:false
            }        
        case types.FETCH_POLITICS_DATA_SUCCESS:
            return{
                    ...state,
                    Politics:payload,
                    error:"",
                    loading:false
            }  
        case types.FETCH_POLITICS_DATA_ERROR:
           return{
                    ...state,
                    error:payload,
                     loading:false
            }
        case types.FETCH_RANDOM_DATA_REQUEST:
            return{
                     ...state,
                     error:"",
                    loading:false
            }        
        case types.FETCH_RANDOM_DATA_SUCCESS:
            return{
                    ...state,
                    Random:payload,
                    error:"",
                    loading:false
            }  
        case types.FETCH_RANDOM_DATA_ERROR:
           return{
                    ...state,
                    error:payload,
                     loading:false
            }                                  
        case types.FETCH_SEARCH_DATA_REQUEST:
            return{
                     ...state,
                     error:"",
                    loading:false
            }        
        case types.FETCH_SEARCH_DATA_SUCCESS:
            return{
                    ...state,
                    SearchData:payload,
                    error:"",
                    loading:false
            }  
        case types.FETCH_SEARCH_DATA_ERROR:
           return{
                    ...state,
                    error:payload,
                     loading:false
            }                                           
        default:
            return state;     
    }
}
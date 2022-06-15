import * as types from './actionTypes'

const initialState = {
    Data:[],
    ArchiveData:[],
    MostReadData:[],
    error:"",
    loading:false
}

export const reducer = (state=initialState, action)=>{
    const {type,payload}=action;
    switch(type){
        // case types.FETCHDATAREQUEST:
        //     return{
        //         ...state,
        //         error:"",
        //         loading:true
        //     }
        // case types.FETCHDATASUCCESS:
        //     return{
        //         ...state,
        //         Data:payload,
        //         loading:false,
        //         error:''
        //     }   
        // case types.FETCHDATAERROR:
        //     return{
        //         ...state,
        //         error:payload,
        //         loading:false,
        //     }
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
        default:
            return state;     
    }
}
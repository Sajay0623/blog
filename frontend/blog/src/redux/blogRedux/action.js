import {ALL_ACTION_TYPE, All_ACTION_TYPE} from  "./actionType"



const getAllBlog = (payload)=>{
     return {
       type: ALL_ACTION_TYPE.ALL_BLOG,
       payload : payload
     };
}

const selectedBlog = (payload) =>{
    return {
        type : All_ACTION_TYPE.SELECTED_BLOG,
        payload : payload
    }
}
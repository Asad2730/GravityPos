import db from './connect'


export const login = async (name,password)=>{
    try{
     const user = await db.users.where({name,password}).first();
     return user;
    }catch(ex){
        return ex;
    }
}



import { redirect } from "next/navigation";
import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const authHeader = async()=>{
    const token = await getUserToken();
    const header = {
        authorization: `Bearer ${token}`
    }
    return token ? header : {};

   
}

export const protectedFetch = async(path)=>{

    const res = await fetch(`${baseUrl}${path}`, {
        headers:await authHeader()
    });
    return res.json();
}

export const serverMutation = async(path, data , method = 'POST') => {

    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...await authHeader()
        },
        body: JSON.stringify(data)
    });

    //handle 401, 403, 500 errors globally

    // before, I was using hardcoded method POST , but now I have made it dynamic so that I can use this function for 
    // all types of mutations like POST, PATCH, DELETE etc. Default method is POST, but I can pass the method as an argument when 
    // I call this function.

    if(res.status === 401)
    {
        redirect('/signin');
    }
    else if(res.status === 403)
    {
        redirect('/unauthorized');
    }

    const responseData = await res.json();
    return responseData;
}

export const serverFetch = async(path) => {
    const res = await fetch(`${baseUrl}${path}`);
    const data = await res.json();
    return data;
}
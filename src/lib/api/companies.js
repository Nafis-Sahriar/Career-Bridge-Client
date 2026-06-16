import { protectedFetch, serverFetch } from "../core/server";
import { getUserSession } from "../core/session";

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


// export const getRecruiterCompany = async(recruiterId) =>{
//     const res = await fetch(`${baseUrl}/api/my/companies?recruiterId=${recruiterId}`);
//     const data = await res.json();
//     return data;
// }

// This is the first way where I am getting company data. 
// but I can handle this in a better way by creating a common function for all get requests.

export const getRecruiterCompany = async(recruiterId)=>{
    return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
}

export const getLoggedInRecruiterCompany = async()=>{
    const user = await getUserSession();

    return getRecruiterCompany(user.id);
}

export const getCompanies = async()=>{
    return protectedFetch(`/api/companies`);
}
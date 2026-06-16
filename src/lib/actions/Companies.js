"use server"

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const createCompany = async(newCompanyData) => {

//     const res = await fetch(`${baseUrl}/api/companies`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newCompanyData)
//     });
//     const data = await res.json();
//     return data;
// }

export const createCompany = async(newCompanyData)=>{
    return serverMutation('/api/companies', newCompanyData);
}

export const updateCompany = async(companyId, updatedCompanyData) => {
    // return serverMutation(`/api/companies/${companyId}`, updatedCompanyData, "PATCH");

    // by default , serverMutation uses POST method, but for update we need to use PATCH method, so I am passing the 
    // method as an argument when I call the serverMutation function.
    // this way I can use the same serverMutation function for all types of mutations like POST, PATCH, DELETE etc.

    // but now , the problem is that after update, I have to change the cache. I mean to show the updated company data in the UI, 
    // I have to change the cache.

    const result = await serverMutation(`/api/companies/${companyId}`, updatedCompanyData, "PATCH");
    revalidatePath('/dashboard/admin/companies');
    return result;
}


"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';

const RecruiterPage = () => {

    const {data:session, isPending, refetch} = authClient.useSession();


    if(isPending) {
        return <div>Loading...</div>;
    }

    const userData = session?.user;

    



    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Welcome, {userData?.name}!</h1>
        </div>
    );
};

export default RecruiterPage;
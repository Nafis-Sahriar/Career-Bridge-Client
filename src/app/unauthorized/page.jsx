import React from 'react';
import Link from 'next/link';

const UnauthorizedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Unauthorized</h1>
            <p>You do not have permission to access this page.</p>
            <Link href="/" className="mt-4 text-blue-500 hover:underline">Go back to Home</Link>
        </div>
    );
};

export default UnauthorizedPage;
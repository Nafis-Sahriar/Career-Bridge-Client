// import { getJobById } from '@/lib/api/jobs';
import { getUserSession } from '@/lib/core/session';
import { redirect } from 'next/navigation';
import React from 'react';
// import JobApply from './JobApply';
// import { getApplicationsByApplicant } from '@/lib/api/applications';
import Link from 'next/link';
// Importing a few Gravity UI icons to make it look clean and consistent
import { ShieldExclamation, CircleInfo, Rocket } from '@gravity-ui/icons';
// import { getPlanById } from '@/lib/api/plans';

const ApplyPage = async ({ params }) => {

    // How I am getting the id here?
    // In Next.js 13 with the App Router, dynamic route parameters are passed to the page component as part of the `params` object.
    // For a route defined as `app/jobs/[id]/apply/page.jsx`, the `id` parameter can be accessed from `params.id`.
    // even if the page is nested under multiple folders, the dynamic segment `[id]` will still be available in the `params` object 
    // as long as it is defined in the route structure. 
    // So, in this case, `params.id` will give you the value of the dynamic segment
    //  from the URL when a user navigates to a job application page.

    const { id } = await params;



    const user = await getUserSession();
    console.log('Current User Session:', user);
    if (!user) {
        redirect(`/signin?redirect=/jobs/${id}/apply`);
    }

    // Auth Role Guard Screen
    if (user.role !== 'seeker') 
    {
        return (
            <div className="w-full min-h-[80vh] flex flex-col justify-center items-center text-white p-6">
                <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldExclamation className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Access Restricted</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Only job seekers can apply for positions. Please sign in with a seeker account to proceed.
                    </p>
                    <Link 
                        href={`/signin?redirect=/jobs/${id}/apply`}
                        className="inline-block w-full px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition"
                    >
                        Switch Account
                    </Link>
                </div>
            </div>
        );
    }

   ;

    return (
        <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
            I Am here in Job APPLY Page for the job.
        </div>
    );
};

export default ApplyPage;
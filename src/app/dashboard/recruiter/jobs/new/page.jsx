import React from 'react';
import PostJobForm from './PostJobForm';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';

const PostJobPage = async () => {

    const company = await getLoggedInRecruiterCompany();


    return (

        <div>

            {
                !company && (
                    <div className='p-4 bg-yellow-100 text-yellow-800 rounded-lg mb-6'>
                        <h2 className='text-lg font-semibold mb-2'>Company Profile Required</h2>
                        <p className='text-sm'>To post a job, you need to have an approved company profile. Please create and get your company profile approved first.</p>
                        <a href="/dashboard/recruiter/company" className='inline-block mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg'>Go to Company Profile</a>
                    </div>
                )
            }

            {
                company&&<PostJobForm company={company} />
            }
            
        </div>
    );
};

export default PostJobPage;
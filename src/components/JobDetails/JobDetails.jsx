import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);
    // console.log(job, id);

    const [toasts, setToasts] = useState();
    
    const handleApplyJob = () => {
        saveJobApplication(intId);
        if(!toasts){
            setToasts(toast("You have applied successfully"));
        }
        else{
            setToasts(toast("Already exists!"));
        }
    }

    return (
        <div className="px-4 py-14 md:py-32 max-w-[1440px] mx-auto">
            <h2 className="text-center text-3xl my-4">Job Details of: {job.job_title} </h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col justify-center border-slate-600 border rounded-lg col-span-2 md:col-span-3 p-7 text-base">
                    <p><span className="font-bold">Job Description:</span> {job.job_description}</p>
                    <p className="my-6"><span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <p><p className="font-bold">Educational Requirements:</p> {job.educational_requirements}</p>
                    <p className="my-6"><p className="font-bold">Experiences:</p> {job.experiences}</p>
                </div>
                <div className="border-slate-600 border rounded-lg p-7 col-span-2 md:col-span-1">
                    <h2 className="text-xl font-bold mb-4">Job Details</h2>
                    <div className="divider"></div> 
                    <p><span className="font-bold">Salary:</span> {job.salary}</p>
                    <p className="my-4"><span className="font-bold">Job title:</span> {job.job_title}</p>
                    <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                    <div className="divider"></div> 
                    <p className="my-4"><span className="font-bold">Phone:</span> {job.contact_information.phone}</p>
                    <p className="my-4"><span className="font-bold">Email:</span> {job.contact_information.email}</p>
                    <p className="my-4"><span className="font-bold">Address:</span> {job.contact_information.address}</p>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
                </div>
                <ToastContainer />
                
            </div>
        </div>
    );
};

export default JobDetails;
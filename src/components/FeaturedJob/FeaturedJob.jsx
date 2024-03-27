import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('../../../public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="max-w-[653px] mx-auto px-4">
                <h1 className="text-2xl md:text-5xl text-center">Featured Job</h1>
                <p className="text-base text-center mt-4 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 px-6 max-w-[1320px] mx-auto">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center mt-10 mb-12 md:mb-24">
                <div className={dataLength === jobs.length ? "hidden" : " "}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;
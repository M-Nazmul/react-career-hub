import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import PropTypes from 'prop-types'

const Job = ({job}) => {
    console.log(job);
    const {logo, job_title, company_name, location, remote_or_onsite, job_type, salary} = job;
  return (
    <div>
        <div className="card card-compact max-w-[648px] bg-base-200 shadow-xl mx-auto p-10">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold">{job_title}</h2>
                <p>{company_name}</p>
                <div className="my-4">
                    <button className='btn border-primary text-primary'>{remote_or_onsite}</button>
                    <button className='btn border-primary text-primary ml-3'>{job_type}</button>
                </div>
                <div className='flex gap-6 mb-6'>
                    <h2 className="flex items-center gap-1"> <CiLocationOn /> {location}</h2>
                    <h2 className="flex items-center gap-1"> <HiOutlineCurrencyDollar /> {salary}</h2>
                </div>
                <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    </div>
  )
}

Job.propTypes = {
    job: PropTypes.object
}

export default Job
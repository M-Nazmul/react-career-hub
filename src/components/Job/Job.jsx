import PropTypes from 'prop-types'

const Job = ({job}) => {
    console.log(job);
    const {logo, job_title, company_name, location, remote_or_onsite, job_type, salary} = job;
  return (
    <div>
        <div className="card card-compact max-w-96 bg-base-200 shadow-xl mx-auto p-10">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='btn btn-primary'>{remote_or_onsite}</button>
                    <button className='btn btn-primary ml-3'>{job_type}</button>
                </div>
                <div className='flex'>
                    <p>{location}</p>
                    <p>{salary}</p>
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
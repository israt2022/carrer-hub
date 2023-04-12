import React from "react";
import { NavLink } from "react-router-dom";

const SingleJob = ({jobData}) => {
    return(
        <div className="single-featured-job-container">
            <div className="company-logo"><img src={jobData.company_logo} alt={jobData.company} /></div>
            <div className="job-post">{jobData.job_post}</div>
            <div className="job_company">{jobData.company}</div>

            <div className="job-types flex">
                <div className="job-mode">{jobData.job_mode}</div>
                <div className="job-type">{jobData.job_type}</div>
            </div>

            <div className="job-location-and-salary flex">
                <div className="job-location"><img src="/assets/Icons/Location Icon.png" className="inline" alt="location pin" />{" "+ jobData.company_location}</div>
                <div className="job-salary"><img src="/assets/Icons/Vector.png" className="inline" alt="currency" />{" "+ jobData.salary}</div>
            </div>

            <div className="view-details-btn"><NavLink to={`/job/${jobData.id}`}>View Details</NavLink></div>
        </div>
    )
}

export default SingleJob;
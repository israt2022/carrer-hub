import React from "react";
import { NavLink } from "react-router-dom";

const SingleAppliedJob = ({jobData}) => {
    return (
        <div className="single-applied-job-container">
            <div className="flex flex-wrap">
                <div className="job-info w-4/5 flex">
                    <div className="job-company-logo">
                        <img src={jobData.company_logo} alt="" />
                    </div>
                    <div className="applied-job-data">
                        <div className="job-post-name">{jobData.job_post}</div>
                        <div className="job-company">{jobData.company}</div>
                        <div className="job-types-container mt-4 flex">
                            <div className="job-mode">{jobData.job_mode}</div>
                            <div className="job_type ml-4">{jobData.job_type}</div>
                        </div>

                    <div className="job-location-and-salary flex mt-8">
                        <div className="job-location"><img src="/assets/Icons/Location Icon.png" className="inline" alt="location pin" />{" "+ jobData.company_location}</div>
                        <div className="job-salary"><img src="/assets/Icons/Vector.png" className="inline" alt="currency" />{" "+ jobData.salary}</div>
                    </div>
                    </div>
                </div>
                <div className="applied-job-view-details w-1/5 flex items-center">
                    <NavLink to={`/jobs/${jobData.id}`} className="btn">View Details</NavLink>
                </div>
            </div>
        </div>
    )
};

export default SingleAppliedJob;
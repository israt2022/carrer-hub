import React from "react";
import { NavLink } from "react-router-dom";

const SingleAppliedJob = ({jobData}) => {
    return (
        <div className="single-applied-job-container">
            <div className="flex flex-wrap">
                <div className="job-info w-full lg:w-4/5 block text-center md:text-left md:flex">
                    <div className="job-company-logo mx-auto md:mx-0 mb-5 md:mb-0">
                        <img src={jobData.company_logo} alt="" />
                    </div>
                    <div className="applied-job-data">
                        <div className="job-post-name">{jobData.job_post}</div>
                        <div className="job-company">{jobData.company}</div>
                        <div className="job-types-container mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                            <div className="job-mode">{jobData.job_mode}</div>
                            <div className="job_type">{jobData.job_type}</div>
                        </div>

                    <div className="job-location-and-salary flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                        <div className="job-location"><img src="/assets/Icons/Location Icon.png" className="inline" alt="location pin" />{" "+ jobData.company_location}</div>
                        <div className="job-salary"><img src="/assets/Icons/Vector.png" className="inline" alt="currency" />{" "+ jobData.salary}</div>
                    </div>
                    </div>
                </div>
                <div className="applied-job-view-details mt-20 lg:mt-0 mx-auto lg:w-1/5 block lg:flex lg:items-center lg:justify-center">
                    <NavLink to={`/job/${jobData.id}`} className="view-details-btn">View Details</NavLink>
                </div>
            </div>
        </div>
    )
};

export default SingleAppliedJob;
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

const JobDetails = () => {
    
    const {jobID} = useParams();

    
    const [jobs, setJobs] = useState([]);
    const [thisJob, setThisJob] = useState({});
    const [isApplied, setIsApplied] = useState(false);
    
    useEffect(()=>{
        fetch("/jobPost.json")
        .then(res => res.json())
        .then(res => setJobs(res))
    },[]);

    useEffect(() => {
        let checkAppliedJobs = localStorage.getItem("appliedJobs");
        if (checkAppliedJobs !== null) {
            const applied = JSON.parse(checkAppliedJobs).find(job => job.id === parseInt(jobID));
            setIsApplied(applied);
        }
    }, [jobID]);
    
    
    useEffect(()=>{
        setThisJob(jobs?.find(job => job.id === parseInt(jobID)))
    },[jobs, jobID]);
    
    const appliedJob = (thisJob) => {
        const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs"));
    
        if (appliedJobs === null) {
            localStorage.setItem("appliedJobs", JSON.stringify([thisJob]));
        } else {
            const jobExists = appliedJobs.some(job => job.id === thisJob.id);
            if (!jobExists) {
                appliedJobs.push(thisJob);
                localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
            }
        }
    
        setIsApplied(true);
    };
    
    return(
        <>
            <div className="page-head">
                <Header/>
                <h2 className="page-title">Job Details</h2>
            </div>
            
            <div className="job-details-container flex flex-wrap lg:flex-nowrap gap-x-20 px-4 py-4 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative justify-between">
                <div className="job-requirements w-full lg:w-3/5">
                    <div className="job-description mb-6">
                        <span className="job-key">
                                Job Description: {" "} 
                        </span>
                        <span className="job-value">
                            {thisJob?.job_description}
                        </span>
                    </div>

                    <div className="job-responsibility my-6">
                        <span className="job-key">
                                Job Responsibility: {" "} 
                        </span>
                        <span className="job-value">
                        {thisJob?.job_responsibility}
                        </span>
                    </div>

                    <div className="job-education my-6">
                        <span className="job-key mb-4 block">
                                Educational Requirements: {" "} 
                        </span>
                        <span className="job-value">
                            {thisJob?.education_requirement}
                        </span>
                    </div>

                    <div className="job-experience my-6">
                        <span className="job-key my-4 block">
                        Experiences: {" "} 
                        </span>
                        <span className="job-value">
                            {thisJob?.experience}
                        </span>
                    </div>


                </div>
                <div className="job-information-container w-full lg:w-2/5 mt-5 lg:mt-0">
                    <div className="content">
                        <div className="job-info-title">Job Details</div>
                        <hr className="title-separetor"/>

                        <div className="flex info-item">
                            <img src="/assets/Icons/Frame.png" alt="" />
                            <div className="info-type">Salary: </div>
                            <div className="info-value">{thisJob?.salary}</div>
                        </div>

                        <div className="flex info-item">
                            <img src="/assets/Icons/Frame-1.png" alt="" />
                            <div className="info-type">Job Title:</div>
                            <div className="info-value">{thisJob?.job_post}</div>
                        </div>

                        <div className="job-info-title mt-8">Contact Information</div>
                        <hr className="title-separetor"/>

                        <div className="flex info-item">
                            <img src="/assets/Icons/Frame-2.png" alt="" />
                            <div className="info-type">Phone: </div>
                            <div className="info-value">{thisJob?.phone}</div>
                        </div>

                        <div className="flex info-item">
                            <img src="/assets/Icons/Frame-3.png" alt="" />
                            <div className="info-type">Email: </div>
                            <div className="info-value">{thisJob?.email}</div>
                        </div>

                        <div className="flex info-item">
                            <img src="/assets/Icons/Frame-4.png" alt="" />
                            <div className="info-type">Address: </div>
                            <div className="info-value">{thisJob?.company_location}</div>
                        </div>  
                    </div>
                    <button disabled={isApplied} className={`${isApplied ? "already-applied" : "apply-now-btn"} w-full`} onClick={()=> appliedJob(thisJob)}>{isApplied ? "Already Applied" : "Apply Now"}</button>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default JobDetails;
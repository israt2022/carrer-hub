import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import { NavLink } from "react-router-dom";

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect(()=>{
        fetch("/jobPost.json").then(res => res.json()).then(res => {
            const featured = res.slice(0,4);
            setFeaturedJobs(featured);
        })
    },[])

 return(
    <div className="featured-jobs-container">
        <div className="featured-jobs-title">Featured Jobs</div>
        <div className="featured-jobs-subtitle">Explore thousands of job opportunities with all the information you need. Its your future</div>

        <div className="featured-jobs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredJobs?.map(job => <SingleJob key={job.id} jobData={job}/>)}
        </div>

        <div className="see-all-jobs-btn-container">
            <NavLink className="see-all-jobs" to="/all-jobs">See All Jobs</NavLink>
        </div>
    </div>
 )
}

export default FeaturedJobs;
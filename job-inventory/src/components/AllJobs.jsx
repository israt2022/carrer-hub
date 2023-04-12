import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SingleJob from "./SingleJob";

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);

    useEffect(()=>{
        fetch("/jobPost.json")
        .then(res => res.json())
        .then(res =>setAllJobs(res))
    },[])

    return(
        <>
        <div className="page-head">
            <Header/>
            <h2 className="page-title">All Jobs</h2>
        </div>

        <div className="all-jobs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 py-4 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-20">
            {allJobs?.map(job => <SingleJob key={job.id} jobData={job}/>)}
        </div>

        <Footer/>
    </>
    )
}

export default AllJobs;
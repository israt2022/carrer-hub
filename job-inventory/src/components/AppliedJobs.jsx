import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SingleAppliedJob from './SingleAppliedJob';

const AppliedJobs = () => {


const [jobs, setJobs] = useState([]);
const [filteredJobs, setFilteredJobs] = useState([]);
const [filter, setFilter] = useState("all");

const filterJobs = (e) => {
  setFilter(e.target.value);
}

// console.log(filter);

useEffect(()=>{
  const appliedJobs = localStorage.getItem("appliedJobs");
  setJobs(JSON.parse(appliedJobs))
},[])

useEffect(()=>{
  if(filter === "all"){
    setFilteredJobs(jobs);

  } else if(filter === "remote"){
    const remoteJob = jobs.filter(job => job.job_mode === "Remote");
    setFilteredJobs(remoteJob);
  } else if(filter === "onsite"){
    const onsiteJobs = jobs.filter(job => job.job_mode === "Onsite");
    setFilteredJobs(onsiteJobs);
  } else if(filter === "full-time"){
    const fullTimeJobs = jobs.filter(job => job.job_type === "Full Time");
    setFilteredJobs(fullTimeJobs);
  } else if(filter === "part-time"){
    const partTimeJobs = jobs.filter(job => job.job_type === "Part Time");
    setFilteredJobs(partTimeJobs);
  }
},[jobs, filter])

  return (
    <div className='applied-jobs-container'>
            <div className="page-head">
                <Header/>
                <h2 className="page-title">Applied Jobs</h2>
            </div>  
        <div className="applied-jobs px-4 py-4 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-20">
        <div className="filter-container flex justify-end mb-8">
            <select id="filters" onChange={(e)=>filterJobs(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="all">Filter by</option>
            <option value="remote">Remote Job</option>
            <option value="onsite">Onsite Job</option>
            <option value="full-time">Full Time Job</option>
            <option value="part-time">Part Time Job</option>
            </select>
        </div>
          {
            filteredJobs?.length === undefined ? <p>Not applied in any job yet!</p> : filteredJobs?.map(job => <SingleAppliedJob key={job.id} jobData={job}/>)
          }
        </div>

        <Footer/>
    </div>
  );
};

export default AppliedJobs;
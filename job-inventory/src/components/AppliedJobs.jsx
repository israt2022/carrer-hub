import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SingleAppliedJob from './SingleAppliedJob';
import Filter from './Filter';

const AppliedJobs = () => {


const [jobs, setJobs] = useState([]);



useEffect(()=>{
  const appliedJobs = localStorage.getItem("appliedJobs");
  setJobs(JSON.parse(appliedJobs))
},[])

  return (
    <div className='applied-jobs-container'>
            <div className="page-head">
                <Header/>
                <h2 className="page-title">Applied Jobs</h2>
            </div>  
        <div className="applied-jobs px-4 py-4 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-20">
          <Filter/>
          {
            jobs?.length === undefined ? <p>Not applied in any job yet!</p> : jobs?.map(job => <SingleAppliedJob key={job.id} jobData={job}/>)
          }
        </div>

        <Footer/>
    </div>
  );
};

export default AppliedJobs;
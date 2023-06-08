import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import axios from 'axios';

const LandingPage = () => {

  const [jobs,setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy');
      setJobs(res.data);
      console.log('sukses GET');
    } catch (error) {
    }
  };


  return (
    <div>
      <Header />
      <HeroSection />
      <div>
        <h1 className="text-3xl font-bold text-left mt-5">Lowongan Pekerjaan</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {
            Object.keys(jobs).map((job, index) => {
          
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between mb-4">
                  {<h2 className="text-xl font-bold">{job.title}</h2>}
                  <span className={job.job_status === 1 ? 'bg-green-500 text-white py-1 px-2 rounded-full' : 'bg-red-500 text-white py-1 px-2 rounded-full'}>
                    {job.job_status === 1 ? 'Dibuka' : 'Ditutup'}
                  </span>
                </div>
                <p>{job.job_description}</p>
                <p>{job.job_qualification}</p>
                <p>{job.job_type}</p>
                <p>{job.job_tenure}</p>
                <p>{job.company_name}</p>
                <img src={job.company_image_url} alt={job.company_name} className="mt-2 w-16 h-16 object-cover rounded-full" />
                <p>{job.company_city}</p>
                <p>{job.salary_min} - {job.salary_max}</p>
              </div>
            );
          })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;


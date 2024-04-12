'use client';
import { useEffect } from 'react';
import { Card } from '../../components/Card';

import { Navbar } from '../../components/Navbar';
import Search from '../../components/Search';
import { useJobs } from '../../context/JobContext';
import { getAllJobs } from '../../service/api';

export default function JobsPage() {
  const { searchForLevel, searchForId, jobs, setJobs, errorMessage, setErrorMessage } =
    useJobs();

  useEffect(() => {
    if (searchForLevel === '' || searchForId === '') {
      const getAllJobsData = async () => {
        const data = await getAllJobs();
        if (data.status === 200) {
          setJobs(data.jobs);
        } else {
          setJobs([]);
          setErrorMessage(data.message);
        }
      };
      getAllJobsData();
    }
  }, [searchForLevel, searchForId, setJobs, setErrorMessage]);

  return (
    <>
      <Navbar />
      <div className="bg-[#515DEF] h-screen w-[60%] fixed -z-10"></div>
      <div className="container mx-auto py-28 z-50">
        <h1 className="mb-10 text-3xl text-white font-bold">Our Jobs</h1>
        <Search />
        <div
          className={`container mx-auto ${
            jobs.length > 0
              ? 'grid  grid-cols-3 gap-2'
              : 'flex justify-center items-center h-96'
          }`}
        >
          {jobs.length > 0 ? (
            jobs.map((job) => <Card key={job.id} job={job} />)
          ) : (
            <p className="text-white font-semibold text-3xl m-auto text-center">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

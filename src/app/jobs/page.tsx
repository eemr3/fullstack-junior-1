'use client';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Job, JobsProps } from '../../common/interfaces/jobs';
import { Navbar } from '../../components/Navbar';

const SECRETE_KEY = 'naranja-labs'; // Essa chave deve ser guardada em um arquivo .env. Para fins de demonstração/didático, ela está aqui.

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/jobs', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${SECRETE_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.jobs);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="bg-[#515DEF] h-screen">
      <Navbar />
      <div className="container mx-auto py-40">
        <h1 className="mb-10 text-3xl text-white font-bold">Our Jobs</h1>
        <div className="container mx-auto grid grid-cols-3 gap-2">
          {jobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

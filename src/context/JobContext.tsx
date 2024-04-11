'use client';

import { createContext, useContext, useState } from 'react';
import { Job } from '../common/interfaces/jobs';
import { getJobById, getJobsByLevel } from '../service/api';

interface JobProviderProps {
  children: React.ReactNode;
}

interface JobContextData {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  searchForLevel: string;
  setSearchForLevel: (search: string) => void;
  searchForId: string;
  setSearchForId: (search: string) => void;
  handleSearch: () => Promise<void>;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
}

export const JobContext = createContext<JobContextData>({} as JobContextData);

export function JobProvider({ children }: JobProviderProps) {
  const [searchForLevel, setSearchForLevel] = useState<string>('');
  const [searchForId, setSearchForId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleSearch = async () => {
    if (searchForLevel) {
      const data = await getJobsByLevel(searchForLevel);

      if (data.status === 200) {
        setJobs(data.jobs);
      } else {
        setJobs([]);
        setErrorMessage(data.message);
      }
    } else {
      const data = await getJobById(searchForId);

      if (data.status === 200) {
        setJobs(data.job);
      } else {
        setJobs([]);
        setErrorMessage(data.message);
      }
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        searchForLevel,
        setSearchForLevel,
        searchForId,
        setSearchForId,
        handleSearch,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);
  return context;
}

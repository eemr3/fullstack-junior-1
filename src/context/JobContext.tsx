'use client';

import { createContext, useContext, useState } from 'react';
import { Job } from '../common/interfaces/jobs';
import { getAllJobs, getJobById, getJobsByLevel } from '../service/api';

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
  showModal: boolean;
  messageSuccess: string;
  setMessageSuccess: (message: string) => void;
  setShowModal: (show: boolean) => void;
  dataInput: {
    name: string;
    age: string;
    phone: string;
    city: string;
    state: string;
  };
  setDataInput: (data: {
    name: string;
    age: string;
    phone: string;
    city: string;
    state: string;
  }) => void;
}

export const JobContext = createContext<JobContextData>({} as JobContextData);

export function JobProvider({ children }: JobProviderProps) {
  const [searchForLevel, setSearchForLevel] = useState<string>('');
  const [searchForId, setSearchForId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [messageSuccess, setMessageSuccess] = useState<string>('');
  const [dataInput, setDataInput] = useState({
    name: '',
    age: '',
    phone: '',
    city: '',
    state: '',
  });

  const handleSearch = async () => {
    if (searchForLevel === '' && searchForId === '') {
      const data = await getAllJobs();
      setJobs(data.jobs);
    } else if (searchForLevel) {
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
        showModal,
        setShowModal,
        dataInput,
        setDataInput,
        messageSuccess,
        setMessageSuccess,
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

export interface Job {
  id: number;
  job: string;
  level: string;
  status: string;
}

export interface JobsProps {
  job: Job;
}

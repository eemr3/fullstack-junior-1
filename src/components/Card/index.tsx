'use client';

import { JobsProps } from '../../common/interfaces/jobs';

export function Card({ job }: JobsProps) {
  return (
    <div>
      <div className="group p-4 bg-gray-700 opacity-95  lg:p-8">
        <div className="mb-3 text-right"></div>
        <div className="flex items-center gap-x-2"></div>
        <div className="my-4">
          <h3 className="text-2xl font-medium text-gray-100">{job.job}</h3>
          <div className="text-sm font-medium">
            <span className="m-1 ml-0 inline-block text-gray-100">{job.level}</span>
          </div>
          <span className="m-1 ml-0 inline-block text-yellow-500">{job.status}</span>
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={job.status !== 'open'}
            className={`font-medium text-gray-100 ${
              job.status === 'open'
                ? 'transition-all duration-300 group-hover:text-gray-200/80 '
                : 'cursor-not-allowed'
            }`}
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}

import { NextRequest, NextResponse } from 'next/server';
import { jobs } from '../../../database/jobs';

export async function GET(request: NextRequest) {
  const secreteKey = request.headers.get('Authorization');
  const search = new URL(request.url);
  const level = search.searchParams;

  if (secreteKey?.replace('Bearer ', '') !== 'naranja-labs') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (level.get('level')) {
    const jobFiltered = jobs.filter((job) => job.level === level.get('level'));
    if (jobFiltered.length === 0) {
      return NextResponse.json({ message: 'No jobs found', status: 404 });
    }
    return NextResponse.json({ jobs: jobFiltered, status: 200 });
  } else {
    return NextResponse.json({ jobs, status: 200 });
  }
}

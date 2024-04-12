import { NextRequest, NextResponse } from 'next/server';
import { jobs } from '../../../../database/jobs';

export function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const secreteKey = request.headers.get('Authorization');

  if (secreteKey?.replace('Bearer ', '') !== 'naranja-labs') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const job = jobs.filter((job) => job.id === Number(params.id));
  if (job.length === 0) {
    return NextResponse.json({ message: 'Job not found', status: 404 });
  }

  return NextResponse.json({ job, status: 200 });
}

import { NextRequest, NextResponse } from 'next/server';
import { jobs } from '../../../../database/jobs';

export function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const job = jobs.filter((job) => job.id === Number(params.id));
  return NextResponse.json({ job, status: 200 });
}

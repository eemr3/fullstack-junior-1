import { NextRequest, NextResponse } from 'next/server';
import { jobs } from '../../../database/jobs';

export async function GET(request: NextRequest) {
  const secreteKey = request.headers.get('Authorization');

  if (secreteKey?.replace('Bearer ', '') !== 'naranja-labs') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ jobs, status: 200 });
}

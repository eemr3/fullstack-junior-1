import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secreteKey = request.headers.get('Authorization');
  const body = await request.json();

  if (secreteKey?.replace('Bearer ', '') !== 'naranja-labs') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (Object.values(body).every((value) => value === '')) {
    return NextResponse.json({
      message: 'The request body cannot be empty',
      status: 400,
    });
  }

  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      if (body[key] === '') {
        return NextResponse.json({
          message: `The '${key}' field cannot be empty`,
          status: 400,
        });
      }
    }
  }

  return NextResponse.json({
    message: `Thank you for your application, ${body.name}`,
    status: 201,
  });
}

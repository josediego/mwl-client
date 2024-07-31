import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const data = await request.json();

  // Read the existing data from the JSON file
  const filePath = path.join(process.cwd(), 'data', 'mockdb.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const json = JSON.parse(fileData);

  // Add the new data
  json.submissions.push(data);

  // Write the updated data back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

  return NextResponse.json({ message: 'Form submitted successfully!' });
}

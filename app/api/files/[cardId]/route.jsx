
import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/utils/connect';
import File from '@/app/models/Files';

export async function GET(req, { params }) {
  await connectToDatabase();
  const {cardId} =await params;
  if (!cardId) {
    return NextResponse.json({ message: 'Card ID is required' }, { status: 400 });
  }
  
  try {
    // Find all files associated with the given cardId
    const files = await File.find({ cardId });

    return NextResponse.json({ files });
  } catch (error) {
    console.error('Error fetching files:', error);
    return NextResponse.json({ message: 'Error fetching files' }, { status: 500 });
  }
}

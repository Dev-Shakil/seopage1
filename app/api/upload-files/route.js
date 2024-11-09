import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/utils/connect';
import File from '@/app/models/Files';

export const POST = async (req) => {
  await connectToDatabase();

  const form = await req.formData();
  const files = form.getAll('files');
  const cardId = form.get('cardId'); // Get card ID from the form data
    console.log(cardId)
  if (!cardId) {
    return NextResponse.json({ message: 'Card ID is required' }, { status: 400 });
  }

  const savedFiles = [];
  for (const file of files) {
    const buffer = await file.arrayBuffer();
    const fileData = Buffer.from(buffer);

    const newFile = new File({
      filename: file.name,
      contentType: file.type,
      fileData: fileData,
      cardId: cardId, // Associate file with the card ID
    });

    const savedFile = await newFile.save();
    savedFiles.push(savedFile);
  }

  return NextResponse.json({ message: 'Files uploaded successfully', files: savedFiles });
};

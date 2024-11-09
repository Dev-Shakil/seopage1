import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  cardId: { type: String, required: true },
  fileData: { type: Buffer, required: true }, // Store binary data
  createdAt: { type: Date, default: Date.now },
});

const File = mongoose.models.File || mongoose.model('File', fileSchema);
export default File;
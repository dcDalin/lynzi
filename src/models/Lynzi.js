import { Schema, model } from 'mongoose';

const lynziSchema = new Schema({
  lynzi: String,
});

export default model('Lynzi', lynziSchema);

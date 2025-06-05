import mongoose from 'mongoose';

import 'dotenv/config';
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_ConnectionString)

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: false },
  company: { type: String, required: false },
  phone: { type: Number, required: false },
  created_date: { type: Date, default: Date.now },
});

const ContactSchema = mongoose.model('Contact', contactSchema);
export { ContactSchema };

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('MongoDB Connected'))
    .catch(error => console.log('MongoDB', error))
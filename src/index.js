import Dotenv from 'dotenv';
import connectDB from './db/index.js';

Dotenv.config({ path: './../.env'});

connectDB()
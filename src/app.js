import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
  
// It allow to share/access resources from different origins/domains
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// It converts clients json data/req to js objects.
app.use(express.json({limit: '50kb'}));

// it converts url enccoded form data to js objects
app.use(express.urlencoded({ extended: true, limit: '50kb' }))

//for  static data to store on server
app.use(express.static("public"));

// to parse cookies from incoming requests
app.use(cookieParser());
export default app;
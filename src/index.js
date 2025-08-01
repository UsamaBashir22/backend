import Dotenv from 'dotenv';

import connectDB from './db/index.js';
import { app } from './app.js';

Dotenv.config({ path: './../.env'});

connectDB()
.then(()=>{
    
    //   app.on("error",(error)=>{
    //     console.log("error",error);
    //     throw error
    //    })
    app.listen(process.env.PORT || 8000,()=>{
           console.log(`server is ready ${process.env.PORT}`);

    })
})
.catch((error)=>{
    console.log("Mongo  connection failed!!",error);
    
})
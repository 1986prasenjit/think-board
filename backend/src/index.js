import app from "./app.js";

import dotenv from "dotenv";
import connectDB from "./dbConnect/index.js";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 5001


connectDB()
        .then(()=> {
            app.listen(PORT, () => {
                console.log(`Server is Listening at : ${PORT}`);
            })
        })
        .catch((error)=> {
            console.log(`Error while connecting to DB`);
            process.exit(1)
        })


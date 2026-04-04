import { connectDB } from "./src/config/database";
import app from "./src/app";

const PORT = process.env.PORT || 3000

connectDB().then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`server is running  http://localhost:${PORT}`);
    })
})
.catch((error)=>{
    console.error("failed to start server:",error);
    process.exit(1);
});
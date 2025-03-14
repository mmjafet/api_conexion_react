const express = require("express");

const UsersRoutes = require("./routes/UsersRoutes");
const cors = require("cors");
const { connectDB } = require("./data/config");
const PORT = 3001;

//crear la instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

connectDB();


app.use("/Us",UsersRoutes);

app.listen(PORT,()=>{
    console.log("Server running in http://localhost:"+PORT)
});
const mongoose  = require("mongoose");

const HOST = "localhost";
const DATABASE = "dashboardadmin";
const PASSWORD = "JF$3*DKx3"

const MONGODB_URI = ("mongodb+srv://admin:JF$3*DKx3@cluster0.3iwop.mongodb.net/dashboardadmin?retryWrites=true&w=majority");


mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}) 
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
// const mongoose = require("mongoose");

// //this loads out env properties into the process object
// require("dotenv").config();

// const dbConnect = () => {
//   mongoose
//     .connect(process.env.MONGODB_URI)
//     .then(() => console.log("DB connection is successful"))
//     .catch((error) => {
//       console.log("Issue in Db connection");
//       console.log(error.message);

//       process.exit(1);
//     });
// };

// module.exports = dbConnect;


var mysql=require('mysql');

const dbConnect =()=>{

var connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"supplierdata"
});

connection.connect(function(err){
  if(err) throw err;
  console.log("connected");
})

return connection;

}


module.exports=dbConnect;




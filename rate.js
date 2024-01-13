var mysql = require("mysql");
const { Script } = require("vm");
var con = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12676650",
    password: "89Gr3qDQQ5",
    database: "sql12676650",
    connectionLimit: 10
})

con.connect(function(err){
    if (err) throw err;
    console.log("connected");
    var sql = "INSERT INTO Professor VALUES ?";
    var values = [
        [9002, "Lumagui", "Hans", 5, "Trains"]
    ]
    con.query(sql,[values], function(err,result){
        if(err) throw err;
        console.log("inserted:" + result.affectedRows)
    })
})


//email: sds776043@gmail.com
//password: asdf.1223
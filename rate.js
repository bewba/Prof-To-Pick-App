var mysql = require("node_modules\mysql");
const { Script } = require("vm");
var con = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12670032",
    password: "mkUyRiL5Db",
    database: "sql12670032",
    connectionLimit: 10
})

con.connect(function(err){
    if (err) throw err;
    console.log("connected");
    var sql = "INSERT INTO Professor VALUES ?";
    var values = [
        [9001, "Shirley", "Chu", 5, "SHIRLEY GOAT OF ALL TIME LOLOLOOL"]
    ]
    con.query(sql,[values], function(err,result){
        if(err) throw err;
        console.log("inserted:" + result.affectedRows)
    })
})

const firstName = document.getElementById
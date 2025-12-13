<<<<<<< HEAD
import mysql from 'mysql'

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    user:"root",
    password:"",
    database:"clientms"

})
con.connect(function(err){
    if(err){
        console.log("connection error")
    }else{
        console.log("Connected")
    }
})

=======
import mysql from 'mysql'

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    user:"root",
    password:"",
    database:"clientms"

})
con.connect(function(err){
    if(err){
        console.log("connection error")
    }else{
        console.log("Connected")
    }
})

>>>>>>> c4bff2ca761f2a0dd175b19db1e28b1d6b35c59e
export default con;
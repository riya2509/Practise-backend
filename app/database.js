import mysql from "mysql";

const sql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "demo",
});

sql.query("select 1+4", (err, result) => {
  if (err) {
    console.log("error");
  } else {
    console.log(`Database connection successfull.`);
  }
});

export default sql;

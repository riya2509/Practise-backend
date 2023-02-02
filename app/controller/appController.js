const appController = {};
import sql from "../database.js";

appController.getAllData = (req, res) => {
  sql.query(`select * from form;`, (error, result) => {
    if (error) {
      console.log(error);
      res.send({ error });
    } else {
      res.send({ data: result, message: `Form fetched successfully` });
    }
  });
};

appController.createData = (req, res) => {
  const names = req.body.name;
  const age = req.body.age;
  const year = req.body.year;
  sql.query(
    `insert into form (name, age, year) values ('${names}','${age}','${year}');`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.send({ error });
      } else {
        res.send({ message: `Task created successfully.` });
      }
    }
  );
};

export default appController;

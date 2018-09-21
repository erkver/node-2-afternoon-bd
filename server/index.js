require("dotenv").config();

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  massive = require("massive"),
  port = process.env.PORT || 3001,
  {
    create,
    getOne,
    getAll,
    update,
    deleted
  } = require("./products_controller");

app.use(bodyParser());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    // console.log("dbInstance:", dbInstance);
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/products", getAll);
app.get("/api/product/:id", getOne);
app.put("/api/product/:id", update);
app.post("/api/product", create);
app.delete("/api/product/:id", deleted);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

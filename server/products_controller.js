module.exports = {
  create: (req, res) => {
    const { name, description, price, image_url } = req.body;
    const db = req.app.get('db');
    db.create_product([name, description, price, image_url]).then(products => {
      return res.status(200).json(products);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Oops something went wrong" });
      console.log(err)
    });
  },
  getOne: (req, res) => {
    console.log(req.params);
    const db = req.app.get('db');
    db.read_product([req.params.id]).then(product => {
      console.log(product);
      return res.status(200).json(product);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Oops something went wrong" });
      console.log(err)
    });
  },
  getAll: (req, res) => {
    const db = req.app.get('db');
    db.read_products().then(products => {
      return res.status(200).json(products);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Oops something went wrong" });
      console.log(err)
    });
  },
  update: (req, res) => {
    const db = req.app.get('db');
    db.update_product([req.params.id, req.body.description]).then(products => {
      return res.status(200).json(products);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Oops something went wrong" });
      console.log(err)
    });
  },
  deleted: (req, res) => {
    const db = req.app.get("db");
    db.delete_product([req.params.id]).then(products => {
      return res.status(200).json(products);
    }).catch(err => {
      res.status(500).send({ errorMessage: "Oops something went wrong" });
      console.log(err)
    });
  }
}
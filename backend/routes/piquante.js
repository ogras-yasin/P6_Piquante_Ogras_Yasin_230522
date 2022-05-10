const express = require("express");
const router = express.Router();
const piquanteCtrl = require("../controllers/piquante");
// ?! ce signe veut dire c'est bon ou pas
// model sauce // sauce en miniscule ?!
const Sauce = require("../models/modelsSauce"); // Sauce we add here pr in controllers ?
const auth = require("../middleware/auth");

// const Thing = require("../models/thing");

router.post("/", piquanteCtrl.createPiquante);

router.get("/:id", piquanteCtrl.findSingleSauce);

router.put("/:id", piquanteCtrl.modifySauce);

router.delete("/:id", piquanteCtrl.deleteSauce);

// likes a créé
// router.post("/:id", piquanteCtrl.likes);

router.get("/" + "", piquanteCtrl.getAllSauce);

module.exports = router;

/*
router.post("/", (req, res, next) => {
  // supprimer le _id car une _id est créer d'office
  delete req.body._id;
  // nouveau Sauce  a partir du model modelsSauce
  const sauce = new Sauce({
    // title: req.body.title,
    // description: req.body.description,
    // imageUrl: req.body.imageUrl,
    // price: req.body.price,
    // userId: req.body.userId,
    // users Id : ce que l'on passe dans body userId  [clé:valeur]

    userId: req.body.userId,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    mainPepper: req.body.mainPepper,
    imageUrl: req.body.imageUrl,
    heat: req.body.heat,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    usersLiked: req.body.usersLiked,
    usersDisliked: req.body.usersDisliked,
    // ...req.body
  });

  sauce
    // sauvegarde ds mongoDB
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
      console.log("not save in mongo db (ins sen cikmassin karsima )");
    });
});




router.get("/:id", (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((thing) => {
      res.status(200).json(thing);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});



router.put("/:id", (req, res, next) => {
  const sauce = new Sauce({
    userId: req.body.userId,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    mainPepper: req.body.mainPepper,
    imageUrl: req.body.imageUrl,
    heat: req.body.heat,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    usersLiked: req.body.usersLiked,
    usersDisliked: req.body.usersDisliked,
  });
  Thing.updateOne({ _id: req.params.id }, thing)
    .then(() => {
      res.status(201).json({
        message: "Sauce updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});


*/

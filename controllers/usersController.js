const Users = require("../models/Users.js");

// fonction get pour récupérer tous les users
exports.getAllUsers = (req, res, next) => {
    Users.find()
        .then((users) => res.status(200).json(users))
        .catch((error) => res.status(400).json({ error }));
};

// fonction get pour récupérer un user
exports.getOneUser = (req, res, next) => {
    Users.findOne({ _id: req.params.id })
        .then(user =>
            res.status(200).json({
                id: user._id,
                nom: user.name,
                prenom: user.first_name,
                emai: user.email,
                mot_de_passe : user.password,
            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un user
exports.createUser = (req, res, next) => {
    const user = new Users({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    user.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "Le user vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un user
exports.deleteUserById = (req, res, next) => {
    Users.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "User supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un user
exports.updateUserById = (req, res, next) => {
    Users.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "User modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};

exports.signUpUser = (req, res, next) => {
    bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));};

exports.loginUser = (req, res, next) => 
    {User.findOne({ email: req.body.email })
.then((user) => {
  if (user === null) {
    res.status(401).json({ message: "Paire login/mot de passe incorrecte" });
  } else {
    bcrypt
      .compare(req.body.password, user.password)
      .then((valid) => {
        if (!valid) {
          res.status(401).json({ message: "Paire login/mot de passe incorrecte" });
        } else {
          res.status(200).json({
            userId: user._id,
            token: "TOKEN", /* Pour l'instant en dur */
          });
        }
      })
      .catch((error) => res.status(500).json({ error }));
  }
})
.catch((error) => res.status(500).json({ error }));
};
const Sauce = require("../models/Sauce");
const { sauce } = require("./validate-input");
//basic

module.exports = (req, res, next) => {
  //   console.log(req.userFromToken);
  Sauce.findOne({ _id: req.params.id }).then(sauce => {
    if (sauce.userId !== req.userFromToken) {
      return res.status(403).json({ msg: "Vous n'etes pas le proprietaire" });
    }
    next();
  });
};

const User = require("../models/user");

exports.register = async (req, res, next) => {
  try {
    const email = req.body.email;
    const fullname = req.body.fullname;
    const phone = req.body.phone;
    const password = req.body.password;
    User.findOne({ email: email }).then((userDoc) => {
      if (userDoc) {
        return res.status(201).json("false");
      }

      const user = new User({
        email: email,
        fullname: fullname,
        phone: phone,
        password: password,
      });
      user.save();
    });
    return res.status(200).json("true");
  } catch (err) {
    next(err);
  }
};
exports.singIn = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }).then((user) => {
      if (!user) {
        return res.status(201).json("faile");
      }
      user.findOne({ password: password }).the((user) => {
        if (!user) {
          return res.status(201).json("faile");
        }
        return res.status(200).json(user);
      });
    });
  } catch (err) {
    next(err);
  }
};

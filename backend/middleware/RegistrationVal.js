function RegistrationVal(req, res, next) {
  const { first_name, gender, email, password } = req.body;

  if (!first_name || !gender || !email || !password) {
    return res.status(400).send("Enter all details first");
  }
  next();
}

module.exports = RegistrationVal;

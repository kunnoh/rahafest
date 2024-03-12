const jwt = require("jsonwebtoken");

const AuthGuard = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decoded = await jwt.verify(token, "MsERT?R2431jCW$3b");
    // console.log("USER::\t", decoded);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = AuthGuard;

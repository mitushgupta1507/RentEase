const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized"
      });
    }

    // Remove "Bearer " from the token
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};

module.exports = protect;
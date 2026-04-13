const jwt = require("jsonwebtoken");
const { env } = require("../config/env");

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    const error = new Error("Unauthorized: missing or invalid token");
    error.statusCode = 401;
    return next(error);
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret);
    req.user = {
      id: payload.sub,
      email: payload.email
    };

    return next();
  } catch (verificationError) {
    const error = new Error("Unauthorized: token verification failed");
    error.statusCode = 401;
    return next(error);
  }
};

module.exports = {
  requireAuth
};

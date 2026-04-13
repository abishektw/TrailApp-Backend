require("dotenv").config();

const env = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET || "trailapp-dev-secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  mongodbUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/trailapp"
};

module.exports = { env };

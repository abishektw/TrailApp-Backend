const healthService = require("../services/health.service");

const getHealthStatus = async (req, res, next) => {
  try {
    const result = await healthService.getStatus();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getHealthStatus };

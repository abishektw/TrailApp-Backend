const HealthModel = require("../models/health.model");

const getStatus = async () => {
  return HealthModel.buildResponse();
};

module.exports = { getStatus };

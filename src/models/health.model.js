class HealthModel {
  static buildResponse() {
    return {
      success: true,
      message: "API is healthy",
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = HealthModel;

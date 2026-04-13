const { User, toPublic } = require("../models/user.model");

const editableFields = [
  "fullName",
  "phone",
  "country",
  "preferredLanguage",
  "bio",
  "photoUrl",
  "emergencyContact",
  "touristMode"
];

const getProfile = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return toPublic(user);
};

const updateProfile = async (userId, input) => {
  const updates = {};

  editableFields.forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(input, field)) {
      updates[field] = input[field];
    }
  });

  if (Object.prototype.hasOwnProperty.call(updates, "touristMode")) {
    const touristMode = updates.touristMode;
    if (typeof touristMode !== "object" || touristMode === null || Array.isArray(touristMode)) {
      const error = new Error("touristMode must be an object");
      error.statusCode = 400;
      throw error;
    }
  }

  const updatedUser = await User.findByIdAndUpdate(userId, updates, {
    new: true,
    runValidators: true
  });

  if (!updatedUser) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return toPublic(updatedUser);
};

module.exports = {
  getProfile,
  updateProfile
};

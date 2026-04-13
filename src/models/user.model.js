const mongoose = require("mongoose");

const touristModeSchema = new mongoose.Schema(
  {
    passportNumber: { type: String, default: "" },
    visaNumber: { type: String, default: "" },
    nationality: { type: String, default: "" }
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    passwordHash: { type: String, required: true },
    fullName: { type: String, default: "" },
    phone: { type: String, default: "" },
    country: { type: String, default: "" },
    preferredLanguage: { type: String, default: "en" },
    bio: { type: String, default: "" },
    photoUrl: { type: String, default: "" },
    emergencyContact: { type: String, default: "" },
    touristMode: { type: touristModeSchema, default: () => ({}) }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const toPublic = (user) => {
  const raw = user?.toObject ? user.toObject() : user;
  const { passwordHash, ...safeUser } = raw;
  return safeUser;
};

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  toPublic
};

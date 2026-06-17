import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  image: {
    type: String,
    default: "",
  },

  projectName: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  tech: [
    {
      type: String,
      required: true,
    },
  ],
});

export const Admin = mongoose.model("AdminProject", adminSchema);

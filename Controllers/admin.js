import { Admin } from "../Models/Admin.js";
import { upload } from "../middleware/uploads.js";

export const addAmin = async (req, res) => {
  const { projectName, projectDescription, projectLink, tech } = req.body;
  // User multer to upload image
  const image = req.file?.path;
  console.log(image);
  console.log(req.body);
  try {
    if (
      !projectName ||
      !projectDescription ||
      !projectLink ||
      !image ||
      !tech
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const admin = await Admin.create({
      projectName,
      projectDescription,
      projectLink,
      image,
      tech,
    });
    res.status(201).json({ message: "Project added successfully", admin });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error adding project", error: error.message });
  }
};

// Get all project

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Admin.find();
    res
      .status(200)
      .json({ message: "Projects fetched successfully", projects });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching projects", error: error.message });
  }
};

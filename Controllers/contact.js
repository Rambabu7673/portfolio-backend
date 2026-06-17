import { Contact } from "../Models/Contact.js";

export const addContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }
    const newContact = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Contact added successfully", newContact });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding contact", error: error.message });
  }
};

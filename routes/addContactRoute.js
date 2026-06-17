import express from 'express'
import { addContact } from '../Controllers/contact.js';

const router = express.Router();
router.post("/addcontact", addContact);

export default router
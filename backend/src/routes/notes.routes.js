import { Router } from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notes.controller.js";

const router = Router();

router.route("/get-all-notes").get(getAllNotes);

router.route("/get-note/:id").get(getNoteById);

router.route("/create-note").post(createNote);

router.route("/update-note/:id").put(updateNote);

router.route("/delete-note/:id").delete(deleteNote);



export default router;
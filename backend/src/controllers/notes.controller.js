import { Note } from "../models/notes.model.js";

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 })

        if (!notes) {
            return res
                .status(404)
                .json({ message: "Sorry No Notes Found" })
        }
        return res
            .status(200)
            .json(
                {
                    message: "All notes fetched successfully",
                    notes
                }
            )
    } catch (error) {
        return res
            .status(404)
            .json({ message: "Sorry No Notes Found" }, error)
    }
}

const getNoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const particularNotes = await Note.findById(id);

        if (!particularNotes) {
            return res
                .status(404)
                .json({
                    message: "Sorry, No Notes found with the provided Credentials"
                })
        }
        return res
            .status(200)
            .json({
                message: "Notes Fetched Successfully",
                notes: particularNotes
            })
    } catch (error) {
        return res
            .status(400)
            .json({
                message: "Sorry, Failed to fetched Notes",
                notes: particularNotes
            })
    }
}

const createNote = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res
            .status(400)
            .json({
                message: "Sorry, Title and Content fields are required to proceed"
            })
    }

    const existingNotes = await Note.findOne({ title })

    if (existingNotes) {
        return res
            .status(400)
            .json({
                message: "Sorry Note with similar title already exits"
            })
    }

    const newNote = await Note.create({
        title,
        content
    })

    return res
        .status(201)
        .json({
            message: "Congrats, The Note has been created successfully",
            note: newNote
        })
}

const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;

        if (!title || !content) {
            return res
                .status(400)
                .json({
                    message: "Sorry Title or Content is required to proceed"
                })
        }

        const updatedNote = await Note.findByIdAndUpdate(id,
            {
                title,
                content
            },
            {
                new: true,
                runValidators: true
            }
        )

        if (!updateNote) {
            return res
                .status(404)
                .json({
                    message: "Sorry, No Note found with the provided details"
                })
        }

        return res
            .status(200)
            .json({
                message: "Your Notes has been updated Successfully",
                note: updatedNote
            })


    } catch (error) {
        return res
            .status(400)
            .json({
                message: "Sorry Failed to Update the Notes"
            })
    }
}

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return res
                .status(404)
                .json({
                    message: "Sorry, No Note found with the Requested Details"
                })
        }
        return res
            .status(200)
            .json({
                message: "Requested Note has been deleted Successfully"
            })

    } catch (error) {
        return res
            .status(400)
            .json({
                message: "Error while Deleting the Note"
            })
    }
}

export { getAllNotes, createNote, updateNote, deleteNote, getNoteById }
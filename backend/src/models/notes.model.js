import mongoose, { Schema } from "mongoose";


const notesSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique:true,
            trim:true,
            lowercase:true
        },
        content: {
            type: String,
            required: true,
            trim:true,
            lowercase:true
        }
    }
    , { timestamps: true }
)

const Note = mongoose.model("Note", notesSchema)


export { Note }
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "react-hot-toast";

const CreateNotePage = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required")
      return
    }

    setIsLoading(true)

    try {
      await axios.post("http://localhost:8001/api/v1/notes/create-note", {
        title,
        content
      })
      toast.success("Note Created Successfully");
      navigate("/");

    } catch (error) {
      console.log("Error while creating Note", error);
      toast.error("Error while creating Note");

    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6 flex items-center w-2/6">
            <ArrowLeftIcon className="size-6" />
            <span className="text-xl font-bold">Back to Home</span>
          </Link>
          <div className="card bg-green-900/50">
            <div className="card-body">
              <h2 className="text-2xl mb-4 text-center font-semibold font-mono">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="text-xl text-yellow-600 font-semibold font-san tracking-widest">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Title here..."
                    className="input input-success mb-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label className="label">
                    <span className="text-xl text-yellow-600 font-semibold font-san tracking-widest">Content</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter your Content here..."
                    className="textarea textarea-success h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNotePage
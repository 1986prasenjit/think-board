import { Link } from 'react-router';
import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import { formateDate } from '../libs/utils';

const NoteCard = ({ note }) => {
    return (
        <Link to={`/note/${note._id}`}
            className="card bg-green-900 transition-all duration-200 border-t-4 border-solid border-yellow-500 hover:bg-green-950"
        >
            <div className="card-body">
                <h3 className="card-title text-base-content">{note.title}</h3>
                <p className="text-base-content/70 line-clamp-3">{note.content}</p>
                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content/60">
                        {
                            formateDate(new Date(note.createdAt))
                        }
                    </span>
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4" />
                        <button className="btn btn-ghost text-sm text-error">
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>


        </Link>
    )
}

export default NoteCard
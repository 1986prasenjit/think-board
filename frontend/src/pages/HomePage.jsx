import React, { useState, useEffect } from 'react';
import axios from "axios"
import Navbar from '../components/Navbar'
import RateLimiterUI from '../components/RateLimiterUI';
import NoteCard from '../components/NoteCard';

const HomePage = () => {
  const [isRateLimit, setIsRateLimit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8001/api/v1/notes/get-all-notes");
      setNotes(response.data.notes);
      console.log(response.data.notes);
    } catch (error) {
      console.log(`Error fetching Notes`, error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])
  return (
    <div className="min-h-screen">
      <Navbar />

      {
        isRateLimit && <RateLimiterUI />
      }
      <div className="max-w-7xl mx-auto p-4 mt-6">

        {isLoading && <h3 className="text-center font-mono text-primary py-10 text-5xl font-bold">Please Wait <br /> Loading Notes....</h3>}


        {
          notes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-6">
                {
                  notes.map((note)=> (
                    <NoteCard key={note._id} note={note} />
                  ))
                }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HomePage
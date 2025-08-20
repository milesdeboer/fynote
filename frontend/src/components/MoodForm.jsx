import React, { useState } from "react";
import MoodSelection from "./MoodSelection";

const MoodForm = () => {
    const [mood, setMood] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Mood logged:", { mood, notes });
        // TODO: send to backend
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-evenly">
            <div className="flex p-2 gap-4 justify-evenly">
                <MoodSelection header="How do you feel?" id="0" />
                <MoodSelection header="How do you want to feel?" id="1"/>
            </div>
            <div className="w-full flex-col p-2">
                <input 
                    id="notes"
                    type="text" 
                    value={notes} 
                    className="w-full border-0 focus:outline-none text-white bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-full focus:ring-green-500 block p-2.5 mb-2" 
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Notes"
                />
                <button 
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-indigo-500 to-indigo-800 cursor-pointer justify-center truncate uppercase select-none font-semibold text-lg rounded-full p-2.5 mt-2"
                >
                    Log Mood
                </button>
            </div>
        </form>
    );
};

export default MoodForm;
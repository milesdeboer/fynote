import React, { useState } from "react";

const MoodSelection = ({ header, id }) => {

    return (
        <div className="basis-1/2">
            <h2 className="text-center font-bold p-2">{header}</h2>
            <div className="flex flex-col w-full relative text-white h-96 gap-2">
                <input type="radio" id={id + "-happy"} name={"radio-" + id} value="happy" className="peer/happy hidden" />
                <label htmlFor={id + "-happy"} className="bg-gradient-to-r from-indigo-500 to-indigo-800 
                    cursor-pointer flex-1 flex items-center justify-center 
                    truncate uppercase select-none font-semibold text-lg 
                    rounded-full py-2 transition-all duration-200 shadow-lg
                    hover:flex-[2]
                    peer-checked/happy:from-green-500 peer-checked/happy:to-green-800"
                >
                    😊 Happy
                </label>
                        
                <input type="radio" id={id + "-sad"} name={"radio-" + id} value="sad" className="peer/sad hidden" />
                <label htmlFor={id + "-sad"} className="bg-gradient-to-r from-indigo-500 to-indigo-800 
                    cursor-pointer flex-1 flex items-center justify-center 
                    truncate uppercase select-none font-semibold text-lg 
                    rounded-full py-2 transition-all duration-200 shadow-lg
                    hover:flex-[2]
                    peer-checked/sad:from-green-500 peer-checked/sad:to-green-800"
                >
                    😔 Sad
                </label>
                        
                <input type="radio" id={id + "-calm"} name={"radio-" + id} value="calm" className="peer/calm hidden" />
                <label htmlFor={id + "-calm"} className="bg-gradient-to-r from-indigo-500 to-indigo-800 
                    cursor-pointer flex-1 flex items-center justify-center 
                    truncate uppercase select-none font-semibold text-lg 
                    rounded-full py-2 transition-all duration-200 shadow-lg
                    hover:flex-[2]
                    peer-checked/calm:from-green-500 peer-checked/calm:to-green-800"
                >
                    😌 Calm
                </label>
                        
                <input type="radio" id={id + "-angry"} name={"radio-" + id} value="angry" className="peer/angry hidden" />
                <label htmlFor={id + "-angry"} className="bg-gradient-to-r from-indigo-500 to-indigo-800 
                    cursor-pointer flex-1 flex items-center justify-center 
                    truncate uppercase select-none font-semibold text-lg 
                    rounded-full py-2 transition-all duration-200 shadow-lg
                    hover:flex-[2]
                    peer-checked/angry:from-green-500 peer-checked/angry:to-green-800"
                >
                    😡 Angry
                </label>
                    
                <input type="radio" id={id + "-stressed"} name={"radio-" + id} value="stressed" className="peer/stressed hidden" />
                <label htmlFor={id + "-stressed"} className="bg-gradient-to-r from-indigo-500 to-indigo-800 
                    cursor-pointer flex-1 flex items-center justify-center 
                    truncate uppercase select-none font-semibold text-lg 
                    rounded-full py-2 transition-all duration-200 shadow-lg
                    hover:flex-[2]
                    peer-checked/stressed:from-green-500 peer-checked/stressed:to-green-800"
                >
                    😩 Stressed
                </label>

                <input type="radio" id={id + "-bored"} name={"radio-" + id} value="bored" className="peer/bored hidden" />
                <label htmlFor={id + "-bored"} className="bg-gradient-to-r from-indigo-500 to-indigo-800 
                    cursor-pointer flex-1 flex items-center justify-center 
                    truncate uppercase select-none font-semibold text-lg 
                    rounded-full py-2 transition-all duration-200 shadow-lg
                    hover:flex-[2]
                    peer-checked/bored:from-green-500 peer-checked/bored:to-green-800"
                >
                    😐 Bored
                </label>
            </div>
        </div>
    );
};

export default MoodSelection;
import React from "react"

const SongCard = ({ song }) => {
    return (
        <a
            href={song.url} target="_blank" rel="noopener noreferrer"
            className="w-full border bg-gradient-to-r from-green-500 to-green-800 rounded-lg border-solid p-4 text-center flex"
        >
            <img
                src={song.albumArt}
                alt={song.title}
                className="w-16 rounded-lg m-2"
            />
            <div className="basis-1/2 m-2 flex flex-col justify-evenly">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
            </div>
        </a>
    );
};

export default SongCard;
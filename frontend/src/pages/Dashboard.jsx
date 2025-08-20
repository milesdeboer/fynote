import React from "react";
import MoodForm from "../components/MoodForm";
import SongCard from "../components/SongCard";

const Dashboard = () => {
    const sampleSongs = [
        {
            id: 1,
            title: "Daughter of the Sun",
            artist: "vbnd",
            albumArt: "https://i.scdn.co/image/ab67616d00001e0232175dbb68c3f1864f4f34d0",
            url: "https://open.spotify.com/track/69CGLTPXh5TNa1PsFJLRId"
        },
        {
            id: 2,
            title: "Got to be Good",
            artist: "Gotts Street Band",
            albumArt: "https://i.scdn.co/image/ab67616d00001e024ffa7cc0ea75c1e23e54ccb9",
            url: "https://open.spotify.com/track/7AvuIMRKdo5RvS6YIzXjsj"
        }
    ];

    return (
        <div className="flex w-full h-full items-center justify-center box-border p-4">
            {/* Main Card */}
            <div className="basis-2/3 max-h-full bg-white rounded-3xl shadow-2xl p-4">
                {/* Mood Logging Section */}
                <div className="flex justify-center">
                    <MoodForm />
                </div>
            </div>
            {/* Racommendations Card */}
            <div className="basis-1/3 max-h-full bg-white rounded-3xl shadow-2x1 p-8 m-4">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Recommended Songs</h2>
                    <div className="flex flex-wrap flex-col justify-center gap-6">
                        {sampleSongs.map((song) => (
                            <SongCard key={song.id} song={song} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;

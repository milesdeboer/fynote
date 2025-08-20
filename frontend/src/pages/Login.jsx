import React from "react";

const Login = () => {
    return (
        <div className="flex w-full h-full items-center justify-center box-border p-4">
            <div className="max-w-full max-h-full bg-white rounded-2xl shadow-xl p-10 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">FyNote</h1>
                <p className="text-gray-600 mb-8">
                    Log your moods. Discover music. See your journey.
                </p>
                {/* TODO: Change color to grad */}
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mb-4 transition-colors">
                    Login with Spotify
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;

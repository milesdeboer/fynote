import mongoose from 'mongoose';

const MoodEntrySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    mood: { type: String, required: true },
    emoji: { type: String },
    notes: { type: String },
    tracks: [
        {
            trackId: String,
            trackName: String,
            artist: String,
            url: String,
            albumArt: String
        }
    ] 
}, { timestamps: true});

const MoodEntry = mongoose.model('MoodEntry', MoodEntrySchema);
export default MoodEntry;
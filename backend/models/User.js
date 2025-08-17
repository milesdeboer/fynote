import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String },
    emai: { type: String, required: true },
    oauthProvider: {type: String, required: true },
    oauthId: { type: String, required: true, unique: true},
    accessToken: { type: String },
    refreshToken: { type: String },
    tokenExpiry: {type: Date },  
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({});

const model = mongoose.model("Video", VideoSchema);

export default model;

const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  insertedAtDate: { type: Date, default: Date.now },
}, { versionKey: false });

const PostModel = model('Posts2', PostSchema);

module.exports = { PostModel };
const { Schema, model } = require("mongoose");
//const { Thought } = require(".");
const { format_date } = require("../utils/helpers");
const reactionSchema = require('./Reaction');



const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (date) => {
      if (date) return format_date(date); 
    }
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
},
{
  toJson: {
    virtuals: true,
    getters: true,
  },
  id: false
});

thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  ticketPrice: { type: Number, required: true },
  privacy: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const Event = models.Event || model("Event", eventSchema);
export default Event;

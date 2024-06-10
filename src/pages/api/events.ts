import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri || "");

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { title, description, date, time, location, ticketPrice, privacy } =
      req.body;

    if (!title || !description || !date || !time || !location || !ticketPrice) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      await client.connect();
      const database = client.db("test");
      const events = database.collection("events");

      const newEvent = {
        title,
        description,
        date,
        time,
        location,
        ticketPrice,
        privacy,
        createdAt: new Date(),
      };

      const result = await events.insertOne(newEvent);
      res
        .status(201)
        .json({ message: "Event created", eventId: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri || "");

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const { query } = req.query;

    try {
      await client.connect();
      const database = client.db("test");
      const events = database.collection("events");

      const searchQuery: any = {};
      if (query) {
        searchQuery.$or = [
          { title: { $regex: query, $options: "i" } },
          { location: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ];
      }

      const allEvents = await events.find(searchQuery).toArray();
      res.status(200).json({ success: true, data: allEvents });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } finally {
      await client.close();
    }
  } else if (req.method === "POST") {
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

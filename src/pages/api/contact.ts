import dbConnect from "../../utils/dbConnect";
import Contact from "../../models/Contact";

export default async function handler(req: any, res: any) {
  await dbConnect();

  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const newContact = new Contact({ name, email, message });
      await newContact.save();

      return res.status(200).json({ message: "Message saved successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    try {
      const contacts = await Contact.find({});
      return res.status(200).json({ success: true, data: contacts });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

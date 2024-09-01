import { MongoClient } from 'mongodb';

// Environment variables
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

async function connectToDB() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  return { db, client };
}

async function saveProject(data) {
  const { db, client } = await connectToDB();
  try {
    const collection = db.collection(COLLECTION_NAME);
    await collection.insertOne(data);
    return { success: true, message: "Project saved successfully!" };
  } catch (error) {
    return { success: false, message: error.message };
  } finally {
    await client.close();
  }
}

async function getProjects() {
  const { db, client } = await connectToDB();
  try {
    const collection = db.collection(COLLECTION_NAME);
    const projects = await collection.find({}).toArray();
    return { success: true, projects };
  } catch (error) {
    return { success: false, message: error.message };
  } finally {
    await client.close();
  }
}

export default {
  async fetch(request) {
    if (request.method === "POST") {
      const data = await request.json();
      const { projectName, projectUrl, mediaUrl } = data;
      
      // Ensure all fields are provided
      if (!projectName || !projectUrl || !mediaUrl) {
        return new Response(JSON.stringify({ success: false, message: "Missing required fields" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const result = await saveProject({ projectName, projectUrl, mediaUrl });
      return new Response(JSON.stringify(result), {
        status: result.success ? 200 : 500,
        headers: { "Content-Type": "application/json" },
      });
    } else if (request.method === "GET") {
      const result = await getProjects();
      return new Response(JSON.stringify(result), {
        status: result.success ? 200 : 500,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response("Method not allowed", { status: 405 });
    }
  }
};

import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  // Find the absolute path of the "json" directory
  const jsonDirectory = path.join(process.cwd(), "json");
  // Read the "data.json" file
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  // Return the content of the data file in JSON format

  return new Response(fileContents, {
    status: 200,
  });
}

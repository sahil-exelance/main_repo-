import express from "express";
import type { Request, Response } from "express";
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET endpoint
app.get("/api/hello", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello from your simple TypeScript API!",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

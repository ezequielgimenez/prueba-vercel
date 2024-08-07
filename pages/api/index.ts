import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const miNombre: string = "Eze";
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
}

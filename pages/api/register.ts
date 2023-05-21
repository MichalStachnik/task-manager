import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/utils/db";
import { createJWT, hashPassword } from "@/utils/auth";
import { serialize } from "cookie";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await db.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });

    const jwt = await createJWT(user);
    res.setHeader( // setting cooking header
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME as string, jwt, {
        httpOnly: true, // can't access cookies using javascript, can only be accessed on the network through http
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    res.status(201);
    res.json({});
  } else {
    res.status(402);
    res.json({});
  }
}
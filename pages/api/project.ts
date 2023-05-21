import { db } from "@/utils/db";
import { validateJWT } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest, res: NextResponse) => {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id,
    },
  });
}

export default handler;
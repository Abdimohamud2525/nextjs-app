//@ts-nocheck
import { NextResponse } from "next/server";
import userShema from "./schema";
import prisma from "../../../prisma/client";
export const GET = async (req) => {
  const userInfo = await prisma.user.findMany();
  return NextResponse.json(userInfo);
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const validation = userShema.safeParse(body);
    if (validation.success) {
      // const registerUser = await prisma.user.create({
      //   data: body,
      // });

      const registerUser = await prisma.user.create({ data: body });
      return NextResponse.json({ message: registerUser }, { status: 200 });
    } else {
      // @ts-ignore
      return NextResponse.json(
        { message: validation.error.errors },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};

//@ts-nocheck
import { NextResponse } from "next/server";
import PostSchema from "./Schema";
import prisma from "../../../prisma/client";

export const GET = async () => {
  const postInfo = await prisma.post.findMany();
  return NextResponse.json(postInfo);
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const validation = PostSchema.safeParse(body);
    if (validation.success) {
      // const registerUser = await prisma.user.create({
      //   data: body,
      // });

      const registerPost = await prisma.post.create({
        data: {
          content: validation.data.content,
          url: validation.data.url,
          title: validation.data.title,
        },
      });
      return NextResponse.json({ message: registerPost }, { status: 200 });
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

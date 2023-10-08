// @ts-nocheck
import { NextResponse } from "next/server";
import prisma from "prisma/client";
import PostSchema from "../Schema";

export const GET = async (req, { params }) => {
  try {
    const postInfo = await prisma.post.findUnique({
      where: { id: params.id },
    });
    return NextResponse.json(postInfo);
  } catch (error) {
    return NextResponse.json({ status: error.message });
  }
};

export const DELETE = async (req, { params }) => {
  const deletPost = await prisma.post.delete({ where: { id: params.id } });
  return NextResponse.json(deletPost);
};

export const PUT = async (req, { params }) => {
  try {
    const body = await req.json();
    const validation = PostSchema.safeParse(body);
    if (validation.success) {
      const updatePost = await prisma.post.update({
        where: { id: params.id },
        data: {
          content: validation.data.content,
          url: validation.data.url,
          title: validation.data.title,
        },
      });
      return NextResponse.json({ message: updatePost }, { status: 200 });
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

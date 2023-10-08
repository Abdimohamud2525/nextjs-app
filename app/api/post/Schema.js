import { z } from "zod";

const PostSchema = z.object({
  title: z.string().min(3).max(2000),
  content: z.string().min(3).max(200),
  url: z.string(),
});

export default PostSchema;

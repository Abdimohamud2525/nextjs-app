import { z } from "zod";
const userShema = z.object({
  name: z.string(),
  email: z.string().email(),
});
export default userShema;

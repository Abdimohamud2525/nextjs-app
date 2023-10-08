import { PrismaClient } from "@prisma/client";
/** @type {import('@prisma/client').PrismaClient} */

// Luodaan PrismaClientin singleton-instanssi
let prisma;

// chek if prismaClient is not on 'globalThis' object

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}
export default prisma;

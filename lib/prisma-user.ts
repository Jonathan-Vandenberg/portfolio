import { PrismaClient } from "@prisma/client";
import { UserInput } from "../types";

export async function findOrCreateUser(prisma: PrismaClient, input: UserInput) {
  let user = await prisma.user.findUnique({
    where: { email: input?.email },
  });
  
  if (!user) {
    user = await prisma.user.create({
      data: { 
        id: input.id,
        email: input?.email,
        name: input?.name,
      },
    });
  }
  return user;
}
import { createServer } from "@graphql-yoga/node"
import { join } from "path"
import { readFileSync } from "fs"
import prisma from '../../lib/prisma'
import type { PrismaClient } from '@prisma/client'
import { Resolvers } from '../../types'
import { NextApiRequest, NextApiResponse } from "next"
import { findOrCreateUser } from "../../lib/prisma-user"

export async function createContext(): Promise<GraphQLContext>{
  return { prisma }
}

export type GraphQLContext = {
  prisma: PrismaClient
}

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {encoding: "utf-8"})

const resolvers: Resolvers = {
  Query: {
    user: async (_, {email}, {prisma}) => {
      return prisma.user.findUnique({where: {email}})
    },
    users: async (_, {}, {prisma}) => {
      return prisma.user.findMany()
    }
  },
  Mutation: {
    addUser: async (_ , {input}, {prisma}) => {
      return findOrCreateUser(prisma, input)
    }
  }
}

const server = createServer<{req: NextApiRequest; res: NextApiResponse;}>({
  endpoint: "/api",
  schema: {
    typeDefs,
    resolvers
  },
  context: createContext()
})

export default server
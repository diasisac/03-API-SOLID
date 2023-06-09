import fastify from 'fastify'
import { Prisma, PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
    data: {
        name: 'Isac Dias',
        email: 'isac_dp1@hotmail.com'
    }
})
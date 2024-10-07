import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: 'alice@prisma.io',
            fullName: "Alice",
            properties: {
                create: [
                    {
                        name: "My home",
                        address: "27 Street, Los Angeles, CA",
                        type: "Appartment",
                        isPrincipal: true
                    }
                ]
            }
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })
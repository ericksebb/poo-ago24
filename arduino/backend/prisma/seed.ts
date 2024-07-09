import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.register.createMany({
        data: [
            {sensor_id: 1, name: "Kitchen", createdAt: new Date()},
            {sensor_id: 2, name: "Living Room", createdAt: new Date()},
            {sensor_id: 3, name: "Bedroom", createdAt: new Date()},
        ]
    });

    console.log('Created entries:');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
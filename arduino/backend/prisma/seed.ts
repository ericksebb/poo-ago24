import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.sensor.createMany({
        data: [
            { name: 'Sensor 1', isActive: true },
            { name: 'Sensor 2', isActive: false },
            { name: 'Sensor 3', isActive: true },
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
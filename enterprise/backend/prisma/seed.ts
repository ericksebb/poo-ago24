import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const fridge1 = await prisma.fridge.create({
        data: {
            model: 'French Door RI-9921',
            capacity: 674,
            year: 2022,
            isDiscontinued: false,
            price: 1605,
            description: 'Este modelo de French Door cuenta con una capacidad de 674 litros y eficiencia energética tipo A, es un electrodoméstico moderno diseñado en color cromo para aportar un plus de elegancia.',
        },
    });

    const fridge2 = await prisma.fridge.create({
        data: {
            model: 'Minibar RI-120NE',
            capacity: 91,
            year: 2024,
            price: 199.99,
            isDiscontinued: false,
            description: 'Optimiza tus espacios con el minibar Curved 95 Litros Negro | RI-120NE, un elegante y compacto refrigerador que combina el estilo moderno con un muy buen rendimiento.',
        },
    });

    const fridge3 = await prisma.fridge.create({
        data: {
            model: 'Top Mount RI-475',
            capacity: 390,
            year: 2023,
            price: 595,
            isDiscontinued: false,
            description: 'Mejora tu experiencia en la cocina con la refrigeradora Top Mount 390 Lt Croma | RI-475 MF CR, disfrutando un menor consumo de energía por su eficiencia de tipo A, compresor inverter y refrigerante R600. ',
        },
    });

    console.log('Created fridges:', fridge1, fridge2, fridge3);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
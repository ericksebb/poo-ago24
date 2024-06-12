# 🍫 Chocolate Factory API

## Introduction

This project is a NestJS API for managing the Chocolate Factory operations. It uses Prisma as the ORM, Joi for configuration validation, and follows modern best practices for a robust and maintainable application.

## Features

- Configuration management with Joi validation
- Prisma ORM for database interactions
- JWT authentication ( x )
- Swagger for API documentation
- Global exception handling
- Structured logging ( x )

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn
- PostgreSQL database

## Instalación

1. **Clonar el repositorio:**

2. **Instalar dependencias:**

   Usando npm:

   ```sh
   npm install
   ```

## Base de Datos (Local)
1. **Crear una base de datos:**
   
![image](https://github.com/ghostbounty/chocolate-factory-nest/assets/82419364/6aee0d03-e797-4280-bb57-f36acc4baca4)


2. **Configurar variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y agrega la siguiente variable:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/database
    ```

   Explicación
```env
   user: postgres
   password: La que colocaste al momento de la instalación
   localhost: Porque la base de datos la tienes en tu ordenador
   puerto: Dentro de PgAdmin -> click derecho en PostgresSQL 16 -> Propiedades -> Connection -> Puerto
   database: Nombre de la base de datos que creaste
   ```

![image](https://github.com/ghostbounty/chocolate-factory-nest/assets/82419364/2ee7e2c3-e35e-4e8e-8526-70c6f5a96446)


3. **Crear Tablas en la Base de Datos:**

   Aplica las migraciones:

   ```sh
   npx prisma migrate dev --name init
   ```

4. **Llena con datos las Tablas :**

   Los datos se hayan en el archivo `prisma/seed.ts`. Ejecuta el siguiente comando para llenar las tablas con datos de prueba:

   ```sh
   npm run seed
   ```

## Ejecutar la Aplicación

1. **Iniciar el servidor de desarrollo:**

   Usando npm:

   ```sh
   npm run start:dev
   ```

2. **Acceder a la API:**

   La API estará corriendo en `http://localhost:3000`.

3. **Acceder a la documentación de Swagger:**

   Visita `http://localhost:3000/api` para ver la documentación de la API de Swagger.
## Project Structure

```sh
src/
├── app.module.ts          # Root module
├── main.ts                # Application entry point
├── config/
│   ├── configuration.ts   # Configuration settings
│   └── validationSchema.ts # Joi validation schema
├── prisma/
│   ├── prisma.module.ts   # Prisma module
│   └── prisma.service.ts  # Prisma service
├── filters/
│   └── http-exception.filter.ts # Global exception filter
├── auth/                  # Authentication module
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── auth.controller.ts
│   ├── jwt.strategy.ts
│   └── local.strategy.ts
├── users/                 # Users module
│   ├── users.module.ts
│   ├── users.service.ts
│   ├── users.controller.ts
│   └── dto/
│       ├── create-user.dto.ts
│       └── update-user.dto.ts
# Other modules (products, orders, etc.)
```
## Database Schema

https://dbdiagram.io/d/Chocolate-Factory-66535139f84ecd1d222bd710
```dbml

Table Customer {
id SERIAL [pk]
customerName VARCHAR(255)
contactName VARCHAR(255)
contactPhone VARCHAR(50)
contactEmail VARCHAR(255)
address VARCHAR(255)
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table Employee {
id SERIAL [pk]
firstName VARCHAR(255)
lastName VARCHAR(255)
role VARCHAR(255)
department VARCHAR(255)
hireDate DATE
salary DECIMAL(10, 2)
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table FinancialTransaction {
id SERIAL [pk]
transactionDate TIMESTAMP
amount DECIMAL(10, 2)
transactionType VARCHAR(255)
description TEXT
referenceId INT
referenceType VARCHAR(255)
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table InventoryTransaction {
id SERIAL [pk]
productId INT
materialId INT
quantity INT
transactionType VARCHAR(255)
transactionDate TIMESTAMP
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table Product {
id SERIAL [pk]
productName VARCHAR(255)
description TEXT
quantityInStock INT
unitPrice DECIMAL(10, 2)
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table ProductionOrder {
id SERIAL [pk]
productId INT
orderDate TIMESTAMP
quantity INT
status VARCHAR(255)
employeeId INT
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table PurchaseOrder {
id SERIAL [pk]
supplierId INT
orderDate TIMESTAMP
totalAmount DECIMAL(10, 2)
status VARCHAR(255)
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table PurchaseOrderDetail {
id SERIAL [pk]
purchaseOrderId INT
materialId INT
quantity INT
unitPrice DECIMAL(10, 2)
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table RawMaterial {
id SERIAL [pk]
materialName VARCHAR(255)
description TEXT
quantityInStock INT
unitPrice DECIMAL(10, 2)
supplierId INT
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table SalesOrder {
id SERIAL [pk]
customerId INT
orderDate TIMESTAMP
totalAmount DECIMAL(10, 2)
status VARCHAR(255)
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table SalesOrderDetail {
id SERIAL [pk]
salesOrderId INT
productId INT
quantity INT
unitPrice DECIMAL(10, 2)
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Table Supplier {
id SERIAL [pk]
supplierName VARCHAR(255)
contactName VARCHAR(255)
contactPhone VARCHAR(50)
contactEmail VARCHAR(255)
address VARCHAR(255)
createdAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
updatedAt TIMESTAMP [default: `CURRENT_TIMESTAMP`]
}

Ref: InventoryTransaction.productId > Product.id
Ref: InventoryTransaction.materialId > RawMaterial.id
Ref: ProductionOrder.productId > Product.id
Ref: ProductionOrder.employeeId > Employee.id
Ref: PurchaseOrder.supplierId > Supplier.id
Ref: PurchaseOrderDetail.purchaseOrderId > PurchaseOrder.id
Ref: PurchaseOrderDetail.materialId > RawMaterial.id
Ref: RawMaterial.supplierId > Supplier.id
Ref: SalesOrder.customerId > Customer.id
Ref: SalesOrderDetail.salesOrderId > SalesOrder.id
Ref: SalesOrderDetail.productId > Product.id


```




## License

This project is licensed under the MIT License.

## Contributions

Contributions are welcome! Please fork the repository and submit a


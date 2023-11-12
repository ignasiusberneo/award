## Getting Started

These instructions will help you set up Sequelize in your Node.js project.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- A relational database (e.g., MySQL, PostgreSQL, SQLite)

### Installing Dependencies

# SERVER

```bash
cd server
```

```bash
npm install
```

This will install the necessary dependencies from the package.json file.

Configure the database connection:
Update the config/config.json file with your database credentials.

```bash
npx sequelize-cli db:create
```

Run migrations:

```bash
npx sequelize db:migrate
```

This will create the necessary tables in your database.

Run seeders:

```bash
npx sequelize db:seed:all
```

This will add seed data to your database.

```bash
npm start
```

This will running the server.

# CLIENT

```bash
cd client
```

```bash
npm install
```

This will install the necessary dependencies from the package.json file.

```bash
npm start
```

This will running the client.

import { ConnectionOptions } from "typeorm";
import path from "path";

const compiled = path.extname(__filename).includes("js");

export default {
  type: "postgres",
  host: process.env.db_host || "localhost",
  port: process.env.db_port || 5432,
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_database,
  entities: [`./src/models/*.${compiled ? "js" : "ts"}`],
  migrations: [`./src/database/migrations/*.${compiled ? "js" : "ts"}`],
  cli: {
    migrationsDir: "./src/database/migrations/",
  },
} as ConnectionOptions;

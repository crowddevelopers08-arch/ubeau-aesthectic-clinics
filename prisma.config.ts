import { config } from "dotenv"
import path from "node:path"
import { defineConfig } from "prisma/config"

config() // load .env into process.env before defineConfig runs

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: process.env.POSTGRES_PRISMA_URL!,
  },
})

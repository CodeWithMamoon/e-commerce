
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { varchar,integer,serial, pgTable } from "drizzle-orm/pg-core";

export const CartTable=pgTable("cart",{
    id: serial("id").primaryKey(),
    user_id:varchar("userid",{
        length:255
    }).notNull(),
    project_id:varchar("product_id",{
        length:255
    }).notNull(),
    quantity: integer("quantity").notNull()
})

export const db=drizzle(sql)
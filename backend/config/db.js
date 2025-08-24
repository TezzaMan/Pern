import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

// creates a SQL connection using our env variables, so we just put the parts from .env
// into the connection string format that is in .env
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely
export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
);
// See how the above matches the .env variables and the connection string below
//'postgresql://neondb_owner:npg_xkg6T3imJKln@ep-solitary-cake-abwgkig0-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
CREATE TABLE users (
  "id" serial primary key,
  "username" text,
  "password" text,
  "role" text,
  "date_joined" timestamp
);
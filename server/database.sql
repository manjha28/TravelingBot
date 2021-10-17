CREATE DATABASE travelingbot;

CREATE TABLE userstb(
    login_id SERIAL PRIMARY KEY,
    name varchar(255 not null),
    email varchar(255) unique not null,
    password varchar(255) not null,
    created_at date default current_date
);

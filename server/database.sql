CREATE DATABASE travelinbotdb;

CREATE TABLE logins(
    login_id SERIAL PRIMARY KEY,
    email varchar(255) unique not null,
    pass varchar(255) not null,
    created_at date default current_date
);

-- Create the database if it doesn't exist
CREATE DATABASE taskmanager;

-- Connect to the database
\c taskmanager;

-- Create the tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE
); 
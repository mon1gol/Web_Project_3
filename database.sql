create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    number VARCHAR(12),
    pass VARCHAR(255) 
);

create TABLE card(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    number VARCHAR(16),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);
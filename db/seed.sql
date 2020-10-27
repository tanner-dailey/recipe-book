-- create table users
-- (
-- user_id serial primary key,
-- email varchar(200),
-- password varchar(250)
-- );

-- create table recipes
-- (
-- recipe_id serial primary key,
-- user_id integer references users(user_id),
-- title varchar(100)
-- );

-- create table steps
-- (
-- step_id serial primary key,
-- step varchar(150),
-- recipe_id integer references recipes(recipe_id)
-- );

-- create table ingredients
-- (
-- ing_id serial primary key,
-- ing varchar(100),
-- recipe_id integer references recipes(recipe_id)
-- )
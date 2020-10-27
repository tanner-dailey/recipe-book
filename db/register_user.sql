insert into users (email, password)
values (${email}, ${hash})
returning user_id, email
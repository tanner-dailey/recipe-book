select r.title, r.recipe_id
from recipes r join users u on u.user_id = r.user_id
where r.user_id = ${user_id}
select i.recipe_id, i.ing, s.step, s.step_id, r.title
from ((ingredients i inner join steps s on i.recipe_id = s.recipe_id)
inner join recipes r on i.recipe_id = r.recipe_id)
where i.recipe_id = ${id}
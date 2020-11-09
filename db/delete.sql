delete from ingredients
where recipe_id = ${id};

delete from steps
where recipe_id = ${id};

delete from recipes
where recipe_id = ${id}
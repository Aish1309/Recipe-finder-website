export async function GET(req) {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();

    const minuteRecipes = []; 

    for (const recipe of data.recipes) {
        if (recipe.cookTimeMinutes === 10) {
            minuteRecipes.push(recipe);
        }
    }

    return Response.json(minuteRecipes);
}

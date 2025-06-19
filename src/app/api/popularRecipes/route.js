export async function GET(req){
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();

    data.recipes = data.recipes.sort((a,b)=>b.rating - a.rating);

    return Response.json(data)
}
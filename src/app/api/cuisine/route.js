// export async function GET(req) {
//   const res = await fetch('https://dummyjson.com/recipes')
//   const data = await res.json()

//   const uniqueCuisines = [...new Set(data.recipes.map(r => r.tags))]

//   return Response.json(uniqueCuisines)
// }

// app/api/recipes/route.ts
export async function GET() {
  const res = await fetch('https://dummyjson.com/recipes');
  const data = await res.json();
  const cuisineMap = new Map();
  
  for(const recipe of data.recipes){
    if(!cuisineMap.has(recipe.cuisine)){
      cuisineMap.set(recipe.cuisine,{
        name:recipe.cuisine,
        image:recipe.image
      })
    }
  }

const cuisineArray = Array.from(cuisineMap.values())
  return Response.json(cuisineArray);
}



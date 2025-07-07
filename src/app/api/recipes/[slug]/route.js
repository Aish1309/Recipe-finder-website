import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { slug } = params;

    if (!slug) {
        return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
    }

    let recipes = []; 
    let success = false; 

    const endpointsToTry = [
        `https://dummyjson.com/recipes/search?q=${slug}`,  
        `https://dummyjson.com/recipes/meal-type/${slug}`,
        `https://dummyjson.com/recipes/tag/${slug}`,       
    ];

    for (const url of endpointsToTry) {
        if (success) break; 

        try {
            console.log(`Attempting to fetch from: ${url}`); 
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                if (data.recipes && data.recipes.length > 0) {
                    recipes = data.recipes;
                    success = true; 
                } else {
                    console.log(`No recipes found at ${url} for slug: ${slug}`);
                }
            } else {
                console.warn(`External API responded with status ${response.status} from ${url}`);
                try {
                    const errorDetails = await response.json();
                    console.warn('External API error details:', errorDetails);
                } catch (parseError) {
                    console.warn('Could not parse external API error response as JSON.');
                }
            }
        } catch (error) {
            console.error(`Failed to fetch from ${url}:`, error);
        }
    }

    if (success) {
        return NextResponse.json(recipes);
    } else {
        console.warn(`No recipes found for slug "${slug}" after all attempts.`);
        return NextResponse.json([], { status: 200 });

    }
}
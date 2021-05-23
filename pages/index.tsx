import {IRecipes} from "../interfaces/Recipes";
import RecipeCard from "../components/RecipeCard";
import {createClient} from "contentful";

export const getStaticProps = async () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE || "",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
    });

    const response = await client.getEntries<IRecipes[]>({content_type: "recipe"});

    return {
        props: {
            recipes: response.items,
            revalidate: 1
        }
    };
};


const Recipes = ({recipes}: {recipes: IRecipes[]}) => {
    console.log(recipes);
    return (
        <div className="recipe-list">
            {recipes.map(recipe => <RecipeCard key={recipe.sys.id} recipe={recipe}/>)}

            <style jsx>{`
                .recipe-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px 60px;
                }
            `}</style>
        </div>
    );
};

export default Recipes;

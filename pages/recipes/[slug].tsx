import Head from "next/head";
import Image from "next/image";
import Skeleton from "../../components/Skeleton";
import {createClient} from "contentful";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {IRecipes, IRecipesFields} from "../../interfaces/Recipes";

interface Context {
    params: {
        slug: string;
    }
}


const client = createClient({
    space: process.env.CONTENTFUL_SPACE || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ""
});

export const getStaticPaths = async () => {
    const {items} = await client.getEntries<IRecipesFields>({content_type: "recipe"});

    return {
        paths: items.map(recipe => ({params: {slug: recipe.fields.slug}})),
        fallback: true
    };
};


export const getStaticProps = async ({params}: Context) => {
    const {items} = await client.getEntries<IRecipesFields>({"content_type": "recipe", "fields.slug": params.slug});

    if (!items.length) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }

    return {
        props: {
            recipe: items[0],
            revalidate: 1
        }
    };
};

const RecipeDetails = ({recipe}: {recipe: IRecipes}) => {
    if (!recipe) {
        return <Skeleton/>;
    }

    const {featuredImage, title, cookingTime, ingredients, method} = recipe.fields;

    return (
        <div>
            <Head>
                <title>{title} - Just add marmite</title>
                <meta property="og:title" content={`${title} - Just add marmite`} key="title" />
                <meta name="description" content={`Prepare ${title} - Takes about ${cookingTime} mins to cook`} />
                <meta property="og:description" content={`Prepare ${title} - Takes about ${cookingTime} mins to cook`} key="description" />
            </Head>
            <div className="banner">
                <Image
                    src={`https:${featuredImage.fields.file.url}`}
                    width={featuredImage.fields.file.details.image.width}
                    height={featuredImage.fields.file.details.image.height}
                />
                <h2>{title}</h2>
            </div>
            <div className="info">
                <p>Takes about {cookingTime} mins to cook</p>
                <h3>Ingredients: </h3>
                {ingredients.map((ingredient: string, k: number) => <span key={k}>{ingredient}</span>)}
            </div>
            <div className="method">
                <h3>Method: </h3>
                <div>{documentToReactComponents(method)}</div>
            </div>

            <style jsx>{`
                h2,h3 {
                    text-transform: uppercase;
                }
                .banner h2 {
                    margin: 0;
                    background: #fff;
                    display: inline-block;
                    padding: 20px;
                    position: relative;
                    top: -60px;
                    left: -10px;
                    transform: rotateZ(-1deg);
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                }
                .info p {
                    margin: 0;
                }
                .info span::after {
                    content: ", ";
                }
                .info span:last-child::after {
                    content: ".";
                }
            `}</style>
        </div>
    );
};

export default RecipeDetails;

interface IRecipesMetadata {
    tags: string[];
}

interface IRecipesSysSys {
    id: string;
    type: string;
    linkType: string;
}

interface IRecipesSys {
    contentType: IRecipesSysSys;
    environment: {
        sys: IRecipesSysSys;
    };
    space: {
        sys: IRecipesSysSys;
    };
    id: string;
    locale: string;
    revision: number;
    type: string;
    createdAt: string;
    updatedAt: string;
}

export interface IRecipesFields {
    title: string;
    slug: string;
    cookingTime: number;
    thumbnail: {
        metadata: IRecipesMetadata;
        fields: {
            title: string;
            file: {
                contentType: string;
                details: {
                    size: number;
                    image: {
                        width: number;
                        height: number;
                    };
                    fileName: string;
                };
                url: string;
            };
        };
    };
    featuredImage: {
        metadata: IRecipesMetadata;
        fields: {
            title: string;
            file: {
                contentType: string;
                details: {
                    size: number;
                    image: {
                        width: number;
                        height: number;
                    };
                    fileName: string;
                };
                url: string;
            };
        };
    };
    ingredients: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    method: any;
}

export interface IRecipes {
    fields: IRecipesFields;
    metadata: IRecipesMetadata;
    sys: IRecipesSys;
}

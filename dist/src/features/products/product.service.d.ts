import { IColorVariant, IProduct, ISizeVariant } from "../../types/product.types.js";
export declare const getAllProductsService: () => Promise<(import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const getProductByIdService: ({ id }: {
    id: string;
}) => Promise<import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const getProductByCategoryService: ({ category, }: {
    category: string;
}) => Promise<(import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const createNewProductService: ({ name, brand, description, price, department, subcategory, mainImage, images, variantKind, variants, file, }: {
    name: string;
    brand: string;
    description: string;
    price: number;
    department: string;
    subcategory: string;
    mainImage?: string;
    images?: string[];
    variantKind: string;
    variants: IColorVariant[] | ISizeVariant[];
    file?: Express.Multer.File;
}) => Promise<import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const updateProductService: ({ id, data }: {
    id: string;
    data: Partial<IProduct>;
}) => Promise<import("mongoose").Document<unknown, {}, IProduct, {}, import("mongoose").DefaultSchemaOptions> & IProduct & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const deleteProductService: ({ id }: {
    id: string;
}) => Promise<boolean>;
export declare const addRatingService: ({ id, userId, rating, comment }: {
    id: string;
    userId: string;
    rating: number;
    comment: string;
}) => Promise<import("mongoose").Types.DocumentArray<import("../../types/product.types.js").IRatingDocument, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, unknown, import("../../types/product.types.js").IRatingDocument, {}, {}> & import("../../types/product.types.js").IRatingDocument>>;
//# sourceMappingURL=product.service.d.ts.map
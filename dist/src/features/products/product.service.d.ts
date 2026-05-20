import { IProduct } from "../../types/product.types.js";
export declare const getAllProductsService: () => Promise<(import("mongoose").Document<unknown, {}, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export declare const getProductByIdService: ({ id }: {
    id: string;
}) => Promise<import("mongoose").Document<unknown, {}, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const getProductByCategoryService: ({ category }: {
    category: string;
}) => Promise<(import("mongoose").Document<unknown, {}, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export declare const createNewProductService: ({ name, description, price, category, stock, file }: {
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    file?: Express.Multer.File;
}) => Promise<import("mongoose").Document<unknown, {}, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const updateProductService: ({ id, data }: {
    id: string;
    data: Partial<IProduct>;
}) => Promise<import("mongoose").Document<unknown, {}, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: import("mongoose").Types.DocumentArray<{
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps, {}, {}> & {
        user: import("mongoose").Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & import("mongoose").DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
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
}) => Promise<import("mongoose").Types.DocumentArray<{
    user: import("mongoose").Types.ObjectId;
    rating: number;
    comment?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
    user: import("mongoose").Types.ObjectId;
    rating: number;
    comment?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps, {}, {}> & {
    user: import("mongoose").Types.ObjectId;
    rating: number;
    comment?: string | null | undefined;
} & import("mongoose").DefaultTimestampProps>>;
//# sourceMappingURL=product.service.d.ts.map
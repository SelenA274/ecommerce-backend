import mongoose from "mongoose";
export declare const Product: mongoose.Model<{
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {
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
    ratings: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {}, {}> & {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
    } & mongoose.DefaultTimestampProps>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        description: string;
        name: string;
        price: number;
        category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
        images: string[];
        stock: number;
        sold: number;
        isActive: boolean;
        ratings: mongoose.Types.DocumentArray<{
            user: mongoose.Types.ObjectId;
            rating: number;
            comment?: string | null | undefined;
        } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            user: mongoose.Types.ObjectId;
            rating: number;
            comment?: string | null | undefined;
        } & mongoose.DefaultTimestampProps, {}, {}> & {
            user: mongoose.Types.ObjectId;
            rating: number;
            comment?: string | null | undefined;
        } & mongoose.DefaultTimestampProps>;
        averageRating: number;
        imagePublicId?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        description: string;
        name: string;
        price: number;
        category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
        images: string[];
        stock: number;
        sold: number;
        isActive: boolean;
        ratings: mongoose.Types.DocumentArray<{
            user: mongoose.Types.ObjectId;
            rating: number;
            comment?: string | null | undefined;
        } & mongoose.DefaultTimestampProps, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            user: mongoose.Types.ObjectId;
            rating: number;
            comment?: string | null | undefined;
        } & mongoose.DefaultTimestampProps, {}, {}> & {
            user: mongoose.Types.ObjectId;
            rating: number;
            comment?: string | null | undefined;
        } & mongoose.DefaultTimestampProps>;
        averageRating: number;
        imagePublicId?: string | null | undefined;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    description: string;
    name: string;
    price: number;
    category: "electronics" | "food" | "beauty" | "sports" | "books" | "toys" | "clothing";
    images: string[];
    stock: number;
    sold: number;
    isActive: boolean;
    ratings: mongoose.Types.DocumentArray<{
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }, {}, {}> & {
        user: mongoose.Types.ObjectId;
        rating: number;
        comment?: string | null | undefined;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }>;
    averageRating: number;
    imagePublicId?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Product;
//# sourceMappingURL=product.model.d.ts.map
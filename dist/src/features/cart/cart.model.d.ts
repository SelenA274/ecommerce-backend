import { ICart } from "../../types/cart.types.js";
import mongoose, { Model } from "mongoose";
export declare const cartSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }>;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }>;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        userId: mongoose.Types.ObjectId;
        items: mongoose.Types.DocumentArray<{
            quantity: number;
            product?: mongoose.Types.ObjectId | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            quantity: number;
            product?: mongoose.Types.ObjectId | null | undefined;
        }, {}, {}> & {
            quantity: number;
            product?: mongoose.Types.ObjectId | null | undefined;
        }>;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        userId: mongoose.Types.ObjectId;
        items: mongoose.Types.DocumentArray<{
            quantity: number;
            product?: mongoose.Types.ObjectId | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            quantity: number;
            product?: mongoose.Types.ObjectId | null | undefined;
        }, {}, {}> & {
            quantity: number;
            product?: mongoose.Types.ObjectId | null | undefined;
        }>;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }, {}, {}> & {
        quantity: number;
        product?: mongoose.Types.ObjectId | null | undefined;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Cart: Model<ICart>;
//# sourceMappingURL=cart.model.d.ts.map
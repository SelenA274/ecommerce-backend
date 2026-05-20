import mongoose from "mongoose";
export declare const addressSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
}, {
    city: string;
    country: string;
    fullName: string;
    phone: string;
    street?: string | null | undefined;
}, mongoose.Document<unknown, {}, {
    city: string;
    country: string;
    fullName: string;
    phone: string;
    street?: string | null | undefined;
}, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    _id: false;
}>> & Omit<{
    city: string;
    country: string;
    fullName: string;
    phone: string;
    street?: string | null | undefined;
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
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    }, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        _id: false;
    }>> & Omit<{
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    city: string;
    country: string;
    fullName: string;
    phone: string;
    street?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const orderItemSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
}, {
    name: string;
    product: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
    image?: string | null | undefined;
}, mongoose.Document<unknown, {}, {
    name: string;
    product: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
    image?: string | null | undefined;
}, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    _id: false;
}>> & Omit<{
    name: string;
    product: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
    image?: string | null | undefined;
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
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        _id: false;
    }>> & Omit<{
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    product: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
    image?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Order: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }>;
    shippingAddress: {
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    };
    paymentMethod: "credit" | "paypal" | "simulated";
    totalPrice: number;
    shippingCost: number;
    paymentStatus: "pending" | "paid" | "failed";
    notes?: string | null | undefined;
    orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
    trackingNumber?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }>;
    shippingAddress: {
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    };
    paymentMethod: "credit" | "paypal" | "simulated";
    totalPrice: number;
    shippingCost: number;
    paymentStatus: "pending" | "paid" | "failed";
    notes?: string | null | undefined;
    orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
    trackingNumber?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }>;
    shippingAddress: {
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    };
    paymentMethod: "credit" | "paypal" | "simulated";
    totalPrice: number;
    shippingCost: number;
    paymentStatus: "pending" | "paid" | "failed";
    notes?: string | null | undefined;
    orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
    trackingNumber?: string | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }>;
    shippingAddress: {
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    };
    paymentMethod: "credit" | "paypal" | "simulated";
    totalPrice: number;
    shippingCost: number;
    paymentStatus: "pending" | "paid" | "failed";
    notes?: string | null | undefined;
    orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
    trackingNumber?: string | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }>;
    shippingAddress: {
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    };
    paymentMethod: "credit" | "paypal" | "simulated";
    totalPrice: number;
    shippingCost: number;
    paymentStatus: "pending" | "paid" | "failed";
    notes?: string | null | undefined;
    orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
    trackingNumber?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }>;
    shippingAddress: {
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    };
    paymentMethod: "credit" | "paypal" | "simulated";
    totalPrice: number;
    shippingCost: number;
    paymentStatus: "pending" | "paid" | "failed";
    notes?: string | null | undefined;
    orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
    trackingNumber?: string | null | undefined;
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
        userId: mongoose.Types.ObjectId;
        items: mongoose.Types.DocumentArray<{
            name: string;
            product: mongoose.Types.ObjectId;
            quantity: number;
            price: number;
            image?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            name: string;
            product: mongoose.Types.ObjectId;
            quantity: number;
            price: number;
            image?: string | null | undefined;
        }, {}, {}> & {
            name: string;
            product: mongoose.Types.ObjectId;
            quantity: number;
            price: number;
            image?: string | null | undefined;
        }>;
        shippingAddress: {
            city: string;
            country: string;
            fullName: string;
            phone: string;
            street?: string | null | undefined;
        };
        paymentMethod: "credit" | "paypal" | "simulated";
        totalPrice: number;
        shippingCost: number;
        paymentStatus: "pending" | "paid" | "failed";
        notes?: string | null | undefined;
        orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
        trackingNumber?: string | null | undefined;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        userId: mongoose.Types.ObjectId;
        items: mongoose.Types.DocumentArray<{
            name: string;
            product: mongoose.Types.ObjectId;
            quantity: number;
            price: number;
            image?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            name: string;
            product: mongoose.Types.ObjectId;
            quantity: number;
            price: number;
            image?: string | null | undefined;
        }, {}, {}> & {
            name: string;
            product: mongoose.Types.ObjectId;
            quantity: number;
            price: number;
            image?: string | null | undefined;
        }>;
        shippingAddress: {
            city: string;
            country: string;
            fullName: string;
            phone: string;
            street?: string | null | undefined;
        };
        paymentMethod: "credit" | "paypal" | "simulated";
        totalPrice: number;
        shippingCost: number;
        paymentStatus: "pending" | "paid" | "failed";
        notes?: string | null | undefined;
        orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
        trackingNumber?: string | null | undefined;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }>;
    shippingAddress: {
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    };
    paymentMethod: "credit" | "paypal" | "simulated";
    totalPrice: number;
    shippingCost: number;
    paymentStatus: "pending" | "paid" | "failed";
    notes?: string | null | undefined;
    orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
    trackingNumber?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: mongoose.Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }>;
    shippingAddress: {
        city: string;
        country: string;
        fullName: string;
        phone: string;
        street?: string | null | undefined;
    };
    paymentMethod: "credit" | "paypal" | "simulated";
    totalPrice: number;
    shippingCost: number;
    paymentStatus: "pending" | "paid" | "failed";
    notes?: string | null | undefined;
    orderStatus?: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | null | undefined;
    trackingNumber?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Order;
//# sourceMappingURL=order.model.d.ts.map
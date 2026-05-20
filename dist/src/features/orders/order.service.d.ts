type OrderItem = {
    product: string;
    quantity: number;
};
type shippingAddress = {
    fullName: string;
    phone: string;
    country: string;
    city: string;
    street?: string;
};
export declare const createOrderService: ({ userId, items, shippingAddress, paymentMethod, notes, shippingCost }: {
    userId: string;
    items: OrderItem[];
    shippingAddress: shippingAddress;
    paymentMethod: string;
    notes: string;
    shippingCost: number;
}) => Promise<import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: import("mongoose").Types.ObjectId;
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
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: import("mongoose").Types.ObjectId;
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
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const getMyOrdersService: ({ userId }: {
    userId: string;
}) => Promise<{
    summary: {
        shippingAddress: {
            city: string;
            country: string;
            fullName: string;
            phone: string;
            street?: string | null | undefined;
        };
        paymentMethod: "credit" | "paypal" | "simulated";
        paymentStatus: "pending" | "paid" | "failed";
    };
    items: (import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    })[];
    totalProducts: number;
    totalItemsCount: number;
    grandTotal: number;
} | null>;
export declare const getOrderByIdService: ({ id }: {
    id: string;
}) => Promise<import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: import("mongoose").Types.ObjectId;
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
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: import("mongoose").Types.ObjectId;
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
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const getAllOrdersService: () => Promise<(import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: import("mongoose").Types.ObjectId;
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
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: import("mongoose").Types.ObjectId;
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
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export declare const updateOrderStatusService: ({ id, orderStatus, trackingNumber }: {
    id: string;
    orderStatus: string;
    trackingNumber: string;
}) => Promise<import("mongoose").Document<unknown, {}, {
    userId: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: import("mongoose").Types.ObjectId;
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
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
        name: string;
        product: import("mongoose").Types.ObjectId;
        quantity: number;
        price: number;
        image?: string | null | undefined;
    }, {}, {}> & {
        name: string;
        product: import("mongoose").Types.ObjectId;
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
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const cancelOrderService: ({ id }: {
    id: string;
}) => Promise<boolean>;
export {};
//# sourceMappingURL=order.service.d.ts.map
import { IAddress } from "../../types/user.types.js";
export declare const getProfileService: ({ userId }: {
    userId: string;
}) => Promise<import("mongoose").Document<unknown, {}, import("../../types/user.types.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../types/user.types.js").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const updateProfileService: ({ userId, data }: {
    userId: string;
    data: Record<string, unknown>;
}) => Promise<import("mongoose").Document<unknown, {}, import("../../types/user.types.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../types/user.types.js").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const addAddressService: ({ userId, address }: {
    userId: string;
    address: IAddress;
}) => Promise<import("mongoose").Types.DocumentArray<import("../../types/user.types.js").IAddressDocument, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, unknown, import("../../types/user.types.js").IAddressDocument, {}, {}> & import("../../types/user.types.js").IAddressDocument>>;
export declare const updateAddressService: ({ userId, addrId, data }: {
    userId: string;
    addrId: string;
    data: Partial<IAddress>;
}) => Promise<import("mongoose").Types.DocumentArray<import("../../types/user.types.js").IAddressDocument, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, unknown, import("../../types/user.types.js").IAddressDocument, {}, {}> & import("../../types/user.types.js").IAddressDocument>>;
export declare const deleteAddressService: ({ userId, addrId }: {
    userId: string;
    addrId: string;
}) => Promise<boolean>;
export declare const getAllUsersService: () => Promise<(import("mongoose").Document<unknown, {}, import("../../types/user.types.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../types/user.types.js").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const updateUserRoleService: ({ id, role }: {
    id: string;
    role: string;
}) => Promise<import("mongoose").Document<unknown, {}, import("../../types/user.types.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../types/user.types.js").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const deleteUserService: ({ id }: {
    id: string;
}) => Promise<boolean>;
//# sourceMappingURL=user.service.d.ts.map
export declare const registerService: ({ name, email, password, }: {
    name: string;
    email: string;
    password: string;
}) => Promise<import("mongoose").Document<unknown, {}, import("../../types/user.types.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../types/user.types.js").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const loginService: ({ email, password, }: {
    email: string;
    password: string;
}) => Promise<string>;
export declare const forgotPasswordService: ({ email }: {
    email: string;
}) => Promise<true | null>;
export declare const resetPasswordService: ({ token, password, }: {
    token: string;
    password: string;
}) => Promise<boolean>;
export declare const adminLoginService: ({ email, password, }: {
    email: string;
    password: string;
}) => Promise<boolean>;
export declare const adminVerify2faService: ({ email, code, }: {
    email: string;
    code: string;
}) => Promise<string>;
export declare const verifyEmailService: ({ token }: {
    token: string;
}) => Promise<boolean>;
export declare const meService: ({ userId }: {
    userId: string;
}) => Promise<import("mongoose").Document<unknown, {}, import("../../types/user.types.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../../types/user.types.js").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map
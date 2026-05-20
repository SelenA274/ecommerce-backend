import Joi from "joi";
import { Request, Response, NextFunction } from "express";
declare const validate: (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const registerSchema: Joi.ObjectSchema<any>;
export declare const loginSchema: Joi.ObjectSchema<any>;
export declare const forgotPasswordSchema: Joi.ObjectSchema<any>;
export declare const resetPasswordSchema: Joi.ObjectSchema<any>;
export declare const adminLoginSchema: Joi.ObjectSchema<any>;
export declare const verify2faSchema: Joi.ObjectSchema<any>;
export default validate;
//# sourceMappingURL=auth.middleware.d.ts.map
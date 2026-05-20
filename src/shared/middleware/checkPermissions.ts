import { Request, Response, NextFunction } from "express";

export const checkPermissions = (req: Request, res: Response, next: NextFunction): void => {
    const userIdFromToken = req.user?.id;
    const userIdFromUrl = req.params.id;

    // console.log("userIdFromToken",userIdFromToken)
    // console.log("userIdFromUrl",userIdFromUrl)

    if (String(userIdFromToken) !== String(userIdFromUrl)) {
         res.status(401).json({
            status: 401,
            message: `No permission`,
            data: null
        })
    }

    next()
}
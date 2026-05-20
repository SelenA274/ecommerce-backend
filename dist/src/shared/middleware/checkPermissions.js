export const checkPermissions = (req, res, next) => {
    const userIdFromToken = req.user?.id;
    const userIdFromUrl = req.params.id;
    // console.log("userIdFromToken",userIdFromToken)
    // console.log("userIdFromUrl",userIdFromUrl)
    if (String(userIdFromToken) !== String(userIdFromUrl)) {
        res.status(401).json({
            status: 401,
            message: `No permission`,
            data: null
        });
    }
    next();
};
//# sourceMappingURL=checkPermissions.js.map
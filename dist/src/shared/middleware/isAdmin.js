export const isAdmin = (req, res, next) => {
    if (req.user?.role !== "admin") {
        res.status(403).json({ status: 403, message: "Admin only", data: null });
        return;
    }
    next();
};
//# sourceMappingURL=isAdmin.js.map
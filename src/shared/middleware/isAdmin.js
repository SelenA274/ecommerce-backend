export const isAdmin = (req, res, next) => {
  // console.log("is admin ? ->",req.user.role)
    if (req.user.role !== "admin") {
      return res.status(403).json({
        status: 403,
        message: "Admin only",
        data: null
      })
    }
    next()
  }
import multer, { FileFilterCallback } from "multer";
import { Request } from "express";
import { RequestHandler } from "express";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const allowedList = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (allowedList.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported mime type"));
    }
  },
});

export const uploadSingle: RequestHandler = upload.single("image");
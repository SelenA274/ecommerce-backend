
// هاد الملف بيقرأ ويكتب ملفات JSON — كان مستخدم بالبداية قبل ما يضيفوا MongoDB. هلق ما في داعي منه.
// بعثيلي product.schemas.js

import fs from "fs/promises"

async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf8")
        return JSON.parse(data)
    } catch (error) {
        if (error) {
            return []
        }
        throw error
    }
}

async function writeJsonFile(filePath, data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}

export {
    readJsonFile,
    writeJsonFile
}
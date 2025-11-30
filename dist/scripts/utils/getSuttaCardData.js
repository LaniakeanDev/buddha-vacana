"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuttaCardData = getSuttaCardData;
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const typeguards_1 = require("@/utils/typeguards");
async function getSuttaCardData(filePathEnd) {
    const sourcePath = path_1.default.join(process.cwd(), `public/_data/suttaCardData/${filePathEnd}.json`);
    try {
        const rawData = await promises_1.default.readFile(sourcePath, 'utf8');
        const suttaCardData = JSON.parse(rawData);
        if (!(0, typeguards_1.isIDisplaySuttaCardDataArray)(suttaCardData)) {
            throw new Error(`Data structure in ${sourcePath} doesn't match ISuttaCardData interface`);
        }
        return suttaCardData;
    }
    catch (error) {
        console.error(`Failed to load sutta card data from ${sourcePath}:`, error);
        return undefined;
    }
}

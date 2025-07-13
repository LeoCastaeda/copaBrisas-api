"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.createReview = exports.getReviewById = exports.getAllReviews = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const getAllReviews = async () => {
    return await client_1.default.review.findMany({ include: { customer: true } });
};
exports.getAllReviews = getAllReviews;
const getReviewById = async (id) => {
    return await client_1.default.review.findUnique({ where: { id }, include: { customer: true } });
};
exports.getReviewById = getReviewById;
const createReview = async (data) => {
    return await client_1.default.review.create({ data });
};
exports.createReview = createReview;
const deleteReview = async (id) => {
    return await client_1.default.review.delete({ where: { id } });
};
exports.deleteReview = deleteReview;

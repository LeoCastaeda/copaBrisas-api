"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReview = exports.deleteReview = exports.createReview = exports.getReviewById = exports.getAllReviews = void 0;
const reviewService = __importStar(require("../services/review.service"));
const getAllReviews = async (req, res) => {
    const reviews = await reviewService.getAllReviews();
    res.json(reviews);
};
exports.getAllReviews = getAllReviews;
const getReviewById = async (req, res) => {
    const id = Number(req.params.id);
    const review = await reviewService.getReviewById(id);
    res.json(review);
};
exports.getReviewById = getReviewById;
const createReview = async (req, res) => {
    const newReview = await reviewService.createReview(req.body);
    res.status(201).json(newReview);
};
exports.createReview = createReview;
const deleteReview = async (req, res) => {
    const id = Number(req.params.id);
    await reviewService.deleteReview(id);
    res.status(204).send();
};
exports.deleteReview = deleteReview;
const updateReview = async (req, res) => {
    const id = Number(req.params.id);
    const updatedReview = await reviewService.updateReview(id, req.body);
    res.json(updatedReview);
};
exports.updateReview = updateReview;

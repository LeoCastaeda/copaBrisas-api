import { Request, Response } from "express";
import * as reviewService from "../services/review.service";

export const getAllReviews = async (req: Request, res: Response) => {
  const reviews = await reviewService.getAllReviews();
  res.json(reviews);
};

export const getReviewById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const review = await reviewService.getReviewById(id);
  res.json(review);
};

export const createReview = async (req: Request, res: Response) => {
  const newReview = await reviewService.createReview(req.body);
  res.status(201).json(newReview);
};

export const deleteReview = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await reviewService.deleteReview(id);
  res.status(204).send();
};

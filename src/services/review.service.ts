import prisma from "../prisma/client";

export const getAllReviews = async () => {
  return await prisma.review.findMany({ include: { customer: true } });
};

export const getReviewById = async (id: number) => {
  return await prisma.review.findUnique({ where: { id }, include: { customer: true } });
};

export const createReview = async (data: { content: string; rating: number; customerId: number }) => {
  return await prisma.review.create({ data });
};

export const deleteReview = async (id: number) => {
  return await prisma.review.delete({ where: { id } });
};
export const updateReview = async (id: number, data: { content?: string; rating?: number; customerId?: number }) => {
  return await prisma.review.update({ where: { id }, data });
};
import { dbConnect } from "@/lib/dbConnect";

export const reviewsRes = await dbConnect("reviews");

export async function POST(request) {
  const newReview = await request.json();
  const result = await reviewsRes.insertOne(newReview);
  console.log(result);
  return Response.json({ message: "Review Added", review: result });
}

export async function GET(request) {
  const reviews = await reviewsRes.find({}).toArray();
  return Response.json({
    message: "Reviews fetched successfully",
    reviews,
  });
}

import { dbConnect } from "@/lib/dbConnect";

export const reviewsData = [
  { id: 1, name: "John", rating: 4, message: "Good" },
  { id: 2, name: "Bonny", rating: 5, message: "Excellent" },
  { id: 3, name: "Sam", rating: 3, message: "Average" },
];

export async function POST(request) {
  const newReview = await request.json();
  console.log(newReview);
  const reviewsRes = await dbConnect("reviews");
  console.log(reviewsRes);
  const result = await reviewsRes.insertOne(newReview);
  console.log(result);
  return Response.json({ message: "Review Added", review: result });
}

export async function GET(request) {
  const res = await dbConnect("reviews");
  const reviews = await res.find({}).toArray();
  console.log(reviews);
  return Response.json({
    message: "Reviews fetched successfully",
    reviews,
  });
}

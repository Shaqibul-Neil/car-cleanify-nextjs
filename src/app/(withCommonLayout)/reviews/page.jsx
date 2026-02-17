import { getAllReviews } from "@/services/reviewsAction";
import Link from "next/link";

const ReviewsPage = async () => {
  const reviewsData = await getAllReviews();
  console.log(reviewsData);
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">
        Customer Reviews
      </h2>
      <Link
        className="w-40 h-9 py-2 bg-slate-800 text-white cursor-pointer"
        href={"/reviews/create-review"}
      >
        Create a Review
      </Link>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviewsData.map((review) => (
          <div
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            key={review._id}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {review.name}
            </h3>

            <div className="flex mb-3">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-yellow-400 text-xl">
                  {index < review.review ? "★" : "☆"}
                </span>
              ))}
            </div>

            <p className="text-gray-600 text-sm">{review.message}</p>
            <button className="w-20 h-9 bg-slate-800 text-white cursor-pointer">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;

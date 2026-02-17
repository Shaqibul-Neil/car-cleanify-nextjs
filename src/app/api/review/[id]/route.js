import { reviewsRes } from "../route";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = await params;
  if (id.length !== 24) {
    return Response.json(
      {
        message: "Invalid id",
      },
      { status: 400 },
    );
  }

  const review = await reviewsRes.findOne({ _id: new ObjectId(id) });
  return Response.json({
    message: "Reviews fetched successfully",
    review,
  });
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const data = await request.json();

  if (id.length !== 24) {
    return Response.json(
      {
        message: "Invalid id",
      },
      { status: 400 },
    );
  }
  const filter = { _id: new ObjectId(id) };
  const updatedDoc = { $set: data };
  const review = await reviewsRes.updateOne(filter, updatedDoc);
  return Response.json({
    message: "Reviews Updated successfully",
    review,
  });
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json(
      {
        message: "Invalid id",
      },
      { status: 400 },
    );
  }
  const filter = { _id: new ObjectId(id) };
  const review = await reviewsRes.deleteOne(filter);
  return Response.json({
    message: "Reviews Deleted successfully",
    review,
  });
}

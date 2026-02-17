import { dbConnect } from "@/lib/dbConnect";
import { reviewsData } from "../route";
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
  const res = await dbConnect("reviews");
  const review = await res.findOne({ _id: new ObjectId(id) });
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
  const res = await dbConnect("reviews");
  const review = await res.updateOne(filter, updatedDoc);
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

  const res = await dbConnect("reviews");
  const review = await res.deleteOne(filter);
  return Response.json({
    message: "Reviews Deleted successfully",
    review,
  });
}

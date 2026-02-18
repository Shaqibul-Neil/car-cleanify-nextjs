import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
export const users = await dbConnect("users");

export async function POST(request) {
  const reqBody = await request.json();
  const userExist = await users.findOne({ email: reqBody.email });
  if (userExist) {
    return Response.json({ status: 400, message: "user exist" });
  }
  const passwordHash = await bcrypt.hash(reqBody.password, 10);
  const newUser = await users.insertOne({ ...reqBody, password: passwordHash });
  return Response.json({ status: 200, message: "user created", data: newUser });
}

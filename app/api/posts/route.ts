import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response("Unauthorized", { status: 403 });
  }
  const { user } = session;
  console.log(user);
  //const posts = await db.post.findMany({});
}

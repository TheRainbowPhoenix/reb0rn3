import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("blog");

  //   const pageDetails = await getCollectionItem("pages", "about");
  //   const staffMembers = await getCollection("staff-members");

  return {
    body: {
      posts,
    },
  };
}

export async function getAllBlogs({ pageParam = 1, limit = 3 }) {
   try {
      const response = await fetch(`/api/blogs?page=${pageParam}&limit=${limit}`);

      if (!response.ok) {
         throw new Error("Failed to fetch blogs");
      }

      // console.log("response", response);
      return await response.json();
   } catch (error) {
      console.error("Error fetching blogs:", error);
      return { blogs: [], totalBlogs: 0, page: pageParam, totalPages: 0 };
   }
}


export async function getOneBlog(slugParams: string) {
   try {
      const response = await fetch(`/api/blogs/${slugParams}`);

      if (!response.ok) {
         throw new Error("Failed to fetch blog");
      }

      // console.log("response", response);
      return await response.json();
   } catch (error) {
      console.error("Error fetching blog:", error);
      return { blog: null };
   }
}

// a post req for register user
export async function registerUser({ email, username }: { email: string, username: string }) {
   try {
      const response = await fetch(`/api/users`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ email, username }),
      });

      if (!response.ok) {
         throw new Error("Failed to register user");
      }

      return await response.json();
   } catch (error) {
      console.error("Error registering user:", error);
      return { error: "Failed to register user" };
   }
}
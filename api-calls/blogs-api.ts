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

// create new blog
export async function createOneBlog(blogData: {
   author: string;
   title: string;
   imageUrl: string;
   videoLink?: string;
   readTime: string;
   slugParams: string;
   content: { type: string; value: string }[];
}) {
   try {
      const response = await fetch("/api/blogs", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(blogData),
      });

      console.log("response", response);

      if (!response.ok) {
         throw new Error("Failed to create blog");
      }

      return await response.json();
   } catch (error) {
      console.error("Error creating blog:", error);
      return { error: "Try anoter slug value" };
   }
}

// delete blogs by id
export async function deleteOneBlog(slugParams: string) {
   try {
      const response = await fetch(`/api/blogs/${slugParams}`, {
         method: "DELETE",
      });

      if (!response.ok) {
         throw new Error("Failed to delete blog");
      }

      return await response.json();
   } catch (error) {
      console.error("Error deleting blog:", error);
      return { error: "Failed to delete blog" };
   }
}
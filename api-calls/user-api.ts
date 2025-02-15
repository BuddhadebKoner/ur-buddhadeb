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

// get user by id
export async function getUserByID(id: string) {
   try {
      const response = await fetch(`/api/user/${id}`);

      if (!response.ok) {
         throw new Error("Failed to get user");
      }

      return await response.json();
   } catch (error) {
      console.error("Error getting user:", error);
      return { error: "Failed to get user" };
   }
}

// update user by id
export async function getUpdateUser({ id, updateData }: { id: string, updateData: { fullName: string; profileImage: string } }) {
   try {
      const response = await fetch(`/api/user/${id}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(updateData),
      });
      if (!response.ok) {
         throw new Error("Failed to update user");
      }

      return await response.json();
   } catch (error) {
      console.error("Error updating user:", error);
      return { error: "Failed to update user" };
   }
}
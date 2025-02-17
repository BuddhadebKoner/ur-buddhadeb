import { useInfiniteQuery, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import { deleteOneBlog, getAllBlogs, getOneBlog } from "../../api-calls/blogs-api";
import { getUpdateUser, getUserByID } from "../../api-calls/user-api";

export const useGetBlogs = () => {
   return useInfiniteQuery({
      queryKey: [QUERY_KEYS.GET_ALL_BLOGS],
      queryFn: ({ pageParam = 1 }) => getAllBlogs({ pageParam }),
      getNextPageParam: (lastPage) => {
         if (lastPage.page >= lastPage.totalPages) return null;
         return lastPage.page + 1;
      },
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      initialPageParam: 1,
   });
};

export const useGetOneBlog = (slugParams: string) => {
   return useQuery({
      queryKey: [QUERY_KEYS.GET_ONE_BLOG, slugParams],
      queryFn: () => getOneBlog(slugParams),
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
   });
};

// get user by id
export const useGetUserByID = (id: string) => {
   return useQuery({
      queryKey: [QUERY_KEYS.GET_USER_BY_ID, id],
      queryFn: () => getUserByID(id),
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
   });
};

// update user by id
export const useUpdateUserByID = (id: string) => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationKey: [QUERY_KEYS.UPDATE_USER_BY_ID, id],
      mutationFn: (updateData: { fullName: string; profileImage: string }) =>
         getUpdateUser({ id, updateData }),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_USER_BY_ID, id] });
      }
   });
};


// delete blog by id
export const useDeleteBlogByID = (id: string) => { 
   const queryClient = useQueryClient();

   return useMutation({
      mutationKey: [QUERY_KEYS.DELETE_BLOG_BY_ID, id],
      mutationFn: () => deleteOneBlog(id),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_ALL_BLOGS] });
      }
   });
}
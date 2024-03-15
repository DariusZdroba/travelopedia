//json-server --watch data/traveldb.json --port 5001
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const destinationAPI = createApi({
  // reducer path is a key that creates a slice at specified location
  reducerPath: "apidestination",
  // fetchBaseQuery = predefined fetch function for making the request
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    //QUERY -> GET
    //MUTATION -> POST/PUT/DELETE
    getAllDestination: builder.query({
      query: () => "destination",
    }),
    addDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
    }),
    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
    }),
    deleteDestination: builder.mutation({
      query: (id) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});
export const {
  useGetAllDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationAPI;

import React from "react";
import { useDeleteDestinationMutation } from "../../api/destinationApi";
const Destination = ({ destination }) => {
  const [deleteDestination] = useDeleteDestinationMutation();
  const handleDelete = (id) => {
    deleteDestination(id);
  };
  return (
    <article key={destination.id}>
      <div className="text-center text-info p-2">
        <div className="border d-flex justify-content-between p-3">
          <div className="h3">
            {destination.city}, {destination.country}, {destination.daysNeeded}{" "}
            days
          </div>
          <button
            className="btn btn-lg btn-danger m-2"
            onClick={() => handleDelete(destination.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default Destination;

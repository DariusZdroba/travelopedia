import React from "react";
import AddDestination from "./AddDestination";
import DestinationList from "./DestinationList";

const DestinationIndex = () => {
  return (
    <div className="text-white-50 col-8 offset-2">
      <h1 className="text-primary text-center">Travel List</h1>
      <AddDestination />
      <DestinationList />
    </div>
  );
};

export default DestinationIndex;

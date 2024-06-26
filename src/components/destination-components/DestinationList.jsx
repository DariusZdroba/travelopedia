import React from "react";
import { useGetAllDestinationQuery } from "../../api/destinationApi";
import Destination from "./Destination";
const DestinationList = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data.map((destination) => {
      return <Destination destination={destination} />;
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return <div>{content}</div>;
};

export default DestinationList;

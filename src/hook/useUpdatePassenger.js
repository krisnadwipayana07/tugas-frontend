import { useMutation } from "@apollo/client";
import React from "react";
import { GET_ALL_PASSENGER, INSERT_PASSENGERS } from "../graphQL/Query";

export default function useUpdatePassenger() {
  const [insertPassenger, { loading: loadingInsert }] = useMutation(
    INSERT_PASSENGERS,
    { refetchQueries: [GET_ALL_PASSENGER] }
  );
  return { insertPassenger, loadingInsert };
}

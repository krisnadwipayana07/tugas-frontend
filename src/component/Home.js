import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import {
  gql,
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  PASSENGER_SUBSCRIBE,
  GET_ALL_PASSENGER,
  INSERT_PASSENGERS,
  DELETE_PASSENGER,
  GET_PASSENGERS,
  UPDATE_PASSENGER,
} from "../graphQL/Query";

export default function Home() {
  const [getId, setGetId] = useState({});

  const { data, loading, error } = useSubscription(PASSENGER_SUBSCRIBE, {
    variables: getId,
  });

  // const [getAllPassenger, { data, loading, error, refetch }] = useLazyQuery(
  //   GET_ALL_PASSENGER,
  //   { fetchPolicy: "network-only" }
  // );
  const [getPassenger, { data: data1, loading: loading1, error: errorOnce }] =
    useLazyQuery(GET_PASSENGERS);

  const [insertPassenger, { loading: loadingInsert }] = useMutation(
    INSERT_PASSENGERS,
    { refetchQueries: [GET_ALL_PASSENGER] }
  );
  const [deletePassenger, { loading: loadingDelete }] = useMutation(
    DELETE_PASSENGER,
    { refetchQueries: [GET_ALL_PASSENGER] }
  );
  const [updatePassenger, { loading: loadingUpdate }] = useMutation(
    UPDATE_PASSENGER,
    { refetchQueries: [GET_ALL_PASSENGER] }
  );

  // const onGetAll = () => {
  //   getAllPassenger();
  // };

  const onGetData = (id) => {
    if (id === "") {
      setGetId({
        where: {},
      });
    } else {
      setGetId({
        where: { id: { _eq: Number(id) } },
      });
    }
  };

  // useEffect(() => {
  //   onGetAll();
  //   console.log("fetch Passenger");
  // }, []);

  return (
    <div>
      <Header />
      <ListPassenger
        list={data || data1}
        loading={
          loading || loading1 || loadingInsert || loadingDelete || loadingUpdate
        }
        error={error || errorOnce}
        onGetData={onGetData}
        // onGetAll={onGetAll}
        updatePassenger={updatePassenger}
        onDelete={deletePassenger}
      />
      <PassengerInput insertPassenger={insertPassenger} />
    </div>
  );
}

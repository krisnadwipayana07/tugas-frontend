import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const INSERT_PASSENGERS = gql`
  mutation MyMutation($nama: String, $jenis_kelamin: String, $umur: Int) {
    insert_pengunjung_one(
      object: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }
    ) {
      id
    }
  }
`;

const GET_PASSENGERS = gql`
  query MyQuery($id: Int!) {
    pengunjung(where: { id: { _eq: $id } }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;
const GET_ALL_PASSENGER = gql`
  query MyQuery {
    pengunjung {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const DELETE_PASSENGER = gql`
  mutation MyMutation($id: Int!) {
    delete_pengunjung_by_pk(id: $id) {
      id
    }
  }
`;

const UPDATE_PASSENGER = gql`
  mutation MyMutation(
    $id: Int!
    $nama: String
    $jenis_kelamin: String
    $umur: Int
  ) {
    update_pengunjung_by_pk(
      pk_columns: { id: $id }
      _set: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur, id: $id }
    ) {
      id
    }
  }
`;

export default function Home() {
  const [
    getAllPassenger,
    { data: dataAll, loading: loadingAll, error: errorAll, refetch },
  ] = useLazyQuery(GET_ALL_PASSENGER, { fetchPolicy: "network-only" });
  const [getPassenger, { data, loading, errorOnce }] =
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

  const onGetAll = () => {
    getAllPassenger();
  };

  const onGetData = (id) => {
    getPassenger({
      variables: {
        id: id,
      },
    });
  };

  useEffect(() => {
    onGetAll();
    console.log("fetch Passenger");
  }, []);

  return (
    <div>
      <Header />
      <ListPassenger
        list={data || dataAll}
        loading={
          loading ||
          loadingAll ||
          loadingInsert ||
          loadingDelete ||
          loadingUpdate
        }
        error={errorAll || errorOnce}
        onGetData={onGetData}
        onGetAll={onGetAll}
        updatePassenger={updatePassenger}
        onDelete={deletePassenger}
      />
      <PassengerInput insertPassenger={insertPassenger} />
    </div>
  );
}

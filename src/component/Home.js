import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const getPassengers = gql`
  query MyQuery($id: Int!) {
    pengunjung(where: { id: { _eq: $id } }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;
const getAllPassengers = gql`
  query MyQuery {
    pengunjung {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

export default function Home() {
  const [getPassenger, { data, loading, errorOnce }] =
    useLazyQuery(getPassengers);
  const {
    data: dataAll,
    loading: loadingAll,
    error: errorAll,
  } = useQuery(getAllPassengers);
  const [list, setList] = useState([]);

  const onGetAll = () => {
    setList(dataAll?.pengunjung);
  };
  const onGetData = (id) => {
    getPassenger({
      variables: {
        id: id,
      },
    });
    setList(data?.pengunjung);
  };

  useEffect(() => {
    console.log(dataAll);
  }, [dataAll]);

  return (
    <div>
      <Header />
      <ListPassenger
        list={dataAll}
        // loading={loading || loadingAll}
        // error={errorAll || errorOnce}
        onGetAll={onGetAll}
        onGetData={onGetData}
      />
      <PassengerInput />
    </div>
  );
}

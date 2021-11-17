import ListItem from "./ListItem";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

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

const ListPassenger = (props) => {
  const [getPassenger, { data, loading, error }] = useLazyQuery(getPassengers);
  const [
    getAllPassenger,
    { data: dataAll, loading: loadingAll, error: errorAll },
  ] = useLazyQuery(getAllPassengers);
  const [idFind, setIdFind] = useState();
  const [list, setList] = useState([]);
  const onGetAll = () => {
    getAllPassenger();
    setList(dataAll?.pengunjung);
  };
  const onGetData = () => {
    getPassenger({
      variables: {
        id: idFind,
      },
    });
    setList(data?.pengunjung);
  };

  return (
    <div>
      <form>
        <div class="input-group mb-3" style={{ margin: "1rem" }}>
          <input
            type="number"
            class="form-control"
            placeholder="search by id"
            name="id"
            value={idFind}
            onChange={(e) => setIdFind(e.target.value)}
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={idFind === "" ? onGetAll : onGetData}
          >
            Search
          </button>
        </div>
      </form>
      {(loading || loadingAll) && <p>loading...</p>}
      {(error || errorAll) && <p>error!</p>}
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td>Action</td>
        </thead>
        {list?.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={props.hapusPengunjung}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;

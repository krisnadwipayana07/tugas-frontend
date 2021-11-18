import { useState } from "react/cjs/react.development";
import ListItem from "./ListItem";

const ListPassenger = ({ list, loading, error, onGetAll, onGetData }) => {
  const [idFind, setIdFind] = useState(0);
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
            onClick={idFind === "" ? onGetAll() : onGetData(idFind)}
          >
            Search
          </button>
        </div>
      </form>
      {loading && <p>loading...</p>}
      {error && <p>error!</p>}
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <th bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td>Action</td>
        </th>
        {list?.map((item) => (
          <ListItem key={item.id} data={item} />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;

import { useState } from "react";
import "./Home.css";
const ListItem = (props) => {
  const { id, nama, umur, jenis_kelamin } = props.data;
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: 0,
    nama: "",
    umur: 0,
    jenis_kelamin: "",
  });

  const onChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const onEdit = () => {
    setEditData(props.data);
    setEdit(true);
  };

  const onSimpan = () => {
    props.updatePassenger({
      variables: {
        id: editData.id,
        nama: editData.nama,
        jenis_kelamin: editData.jenis_kelamin,
        umur: editData.umur,
      },
    });
    setEdit(!edit);
  };
  return (
    <tr>
      {!edit ? (
        <>
          <td>{id}</td>
          <td>{nama}</td>
          <td>{umur}</td>
          <td>{jenis_kelamin}</td>
          <td className="removeBorder">
            <button style={{ marginInline: "10px" }} onClick={onEdit}>
              Edit
            </button>
            <button
              style={{ marginInline: "10px" }}
              onClick={() =>
                props.onDelete({
                  variables: {
                    id: id,
                  },
                })
              }
            >
              Hapus
            </button>
          </td>
        </>
      ) : (
        <>
          <td>
            <input name="nama" value={editData.nama} onChange={onChange} />
          </td>
          <td>
            <input name="umur" value={editData.umur} onChange={onChange} />
          </td>
          <td>
            <input
              name="jenis_kelamin"
              value={editData.jenis_kelamin}
              onChange={onChange}
            />
          </td>
          <td className="removeBorder">
            <button style={{ marginInline: "10px" }} onClick={onSimpan}>
              simpan
            </button>
            <button
              style={{ marginInline: "10px" }}
              onClick={() =>
                props.onDelete({
                  variables: {
                    id: id,
                  },
                })
              }
            >
              Hapus
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default ListItem;

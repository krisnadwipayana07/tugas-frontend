import "./Home.css";
const ListItem = (props) => {
  const { id, nama, umur, jenis_kelamin } = props.data;

  return (
    <tr>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jenis_kelamin}</td>
      <td className="removeBorder">
        <button style={{ marginInline: "10px" }}>Edit</button>
        <button style={{ marginInline: "10px" }}>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;

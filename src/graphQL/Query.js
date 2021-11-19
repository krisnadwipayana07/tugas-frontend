import { gql } from "@apollo/client";

export const INSERT_PASSENGERS = gql`
  mutation MyMutation($nama: String, $jenis_kelamin: String, $umur: Int) {
    insert_pengunjung_one(
      object: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }
    ) {
      id
    }
  }
`;

export const GET_PASSENGERS = gql`
  query MyQuery($id: Int!) {
    pengunjung(where: { id: { _eq: $id } }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;
export const GET_ALL_PASSENGER = gql`
  query MyQuery {
    pengunjung {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

export const DELETE_PASSENGER = gql`
  mutation MyMutation($id: Int!) {
    delete_pengunjung_by_pk(id: $id) {
      id
    }
  }
`;

export const UPDATE_PASSENGER = gql`
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

export const PASSENGER_SUBSCRIBE = gql`
subscription MySubscription($where: pengunjung_bool_exp) {
  pengunjung(where: $where) {
    id
    jenis_kelamin
    nama
    umur
  }
}
`;

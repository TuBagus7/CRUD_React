import "./App.css";
import { useState } from "react";

// Ini adalah Komponen Utama

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  var [userUpdate, setuserUpdate] = useState("");
  var [namaUserLama, setnamaUserLama] = useState("");
  var [isupdate, setisupdate] = useState(false);
  function ubahUser(e) {
    setUser(e.target.value);
    // console.log(e.target.value);
  }
  function tambahData() {
    setUsers([...users, user]);
    setUser("");
  }

  function hapusData(nama) {
    const userBaru = users.filter((nama_user) => nama_user !== nama);
    setUsers(userBaru);
  }

  function editData(nama) {
    setuserUpdate(nama);
    setnamaUserLama(nama);
    setisupdate(true);
  }

  function updateData() {
    var usersSelainDiPilih = users.filter(
      (nama_user) => nama_user !== namaUserLama
    );
    usersSelainDiPilih.push(userUpdate);
    setUsers(usersSelainDiPilih);
    setuserUpdate("");
    setisupdate(false);
  }

  return (
    <div>
      {!isupdate ? (
        <div>
          <input value={user} type="text" onChange={(e) => ubahUser(e)} />
          <button onClick={tambahData}>Tambah</button>
        </div>
      ) : (
        <div>
          <input
            value={userUpdate}
            type="text"
            onChange={(e) => setuserUpdate(e.target.value)}
          />
          <button onClick={updateData}>Update</button>
        </div>
      )}
      <br />
      <h4>Daftar users</h4>
      <ul>
        {users.map((nama, i) => (
          <li key={i}>
            {nama} <button onClick={() => hapusData(nama)}>Delete</button>
            <button onClick={() => editData(nama)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

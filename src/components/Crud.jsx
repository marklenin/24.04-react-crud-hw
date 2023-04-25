import React, { useState } from "react";
import Modal from "./modal/Modal";
import "./Crud.css";

function Crud() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [array, setArray] = useState([]);
  const [char, setChar] = useState("");
  const [modal, setModal] = useState(false);
  const addToArray = () => {
    if (!name || !surname || !phone || !email) {
      alert("Заполните поле!");
      return;
    }
    let newArr = [...array];
    let obj = {
      Name: name,
      Surname: surname,
      Phone: phone,
      Email: email,
      key: Date.now(),
    };
    newArr.push(obj);
    setArray(newArr);

    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
  };

  const deleteFunc = (name) => {
    let newArr = [...array];
    console.log(newArr);
    let editedarr = newArr.filter((elem) => elem.Name !== name);
    console.log(editedarr);
    setArray(editedarr);
  };

  const editFunc = (value) => {
    let index = array.findIndex((a) => a.key === value.key);
    let newArr = [...array];
    newArr.splice(index, 1, value);
    setArray(newArr);
  };

  const openModal = (item) => {
    setChar(item);
    setModal(true);
  };

  return (
    <>
      <div className="container mt-4 ">
        <h2>Add new contact</h2>
      </div>
      <div className="inputsBtn container d-flex justify-content-between mt-3 ">
        <div>
          <p className="m-1">First Name</p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="form-control"
          />
        </div>
        <div>
          <p className="m-1">Last Name</p>
          <input
            type="text"
            placeholder="Surname"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            className="form-control"
          />
        </div>
        <div>
          <p className="m-1">Phone Number</p>
          <input
            type="text"
            placeholder="Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="form-control"
          />
        </div>
        <div>
          <p className="m-1">Email Address</p>
          <input
            type="email"
            placeholder="mail@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
          />
        </div>
        <div className="align-self-end">
          <button
            type="submit"
            onClick={addToArray}
            className="btn btn-success "
            style={{}}
          >
            Add
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Surname</td>
              <td>Phone number</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {array.map((item, index) => (
              <tr key={item.key} style={{ width: "100%" }}>
                <td>{index + 1}</td>
                <td>{item.Name}</td>
                <td>{item.Surname}</td>
                <td>{item.Phone}</td>
                <td>{item.Email}</td>
                <button
                  onClick={(e) => deleteFunc(item.Name)}
                  className="btn btn-danger text-dark m-1"
                >
                  delete
                </button>
                <button
                  onClick={(e) => openModal(item)}
                  className="btn btn-primary text-dark"
                >
                  edit
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modal ? (
        <Modal char={char} editFunc={editFunc} setModal={setModal} />
      ) : (
        ""
      )}
    </>
  );
}

export default Crud;

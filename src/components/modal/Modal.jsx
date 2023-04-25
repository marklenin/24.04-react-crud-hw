import React, { useState } from "react";
import "./Modal.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Modal({ char, editFunc, setModal, onHide }) {
  const [chars, setChars] = useState(char);

  const saving = () => {
    editFunc(chars);
    setModal(false);
  };

  // console.log(chars);
  return (
    <div className="mainCard">
      <Card style={{ width: "18rem" }} className="Card">
        <ListGroup>
          <h3 style={{ textAlign: "center", margin: "0.4em" }}>Edit Contact</h3>
          <ListGroupItem>
            <p className="m-1">Change First Name</p>
            <input
              className="form-control"
              type="text"
              placeholder=""
              defaultValue={char.Name}
              onChange={(e) => {
                let res = { ...chars };
                res.Name = e.target.value;
                setChars(res);
              }}
            />
          </ListGroupItem>
          <ListGroupItem>
            <p className="m-1">Change Last Name</p>
            <input
              className="form-control"
              type="text"
              placeholder=""
              defaultValue={char.Surname}
              onChange={(e) => {
                let res = { ...chars };
                res.Surname = e.target.value;
                setChars(res);
              }}
            />
          </ListGroupItem>
          <ListGroupItem>
            <p className="m-1">Change Phone</p>
            <input
              className="form-control"
              type="text"
              placeholder=""
              defaultValue={char.Phone}
              onChange={(e) => {
                let res = { ...chars };
                res.Phone = e.target.value;
                setChars(res);
              }}
            />
          </ListGroupItem>
          <ListGroupItem>
            <p className="m-1">Edit Email</p>
            <input
              className="form-control"
              type="text"
              placeholder=""
              defaultValue={char.Email}
              onChange={(e) => {
                let res = { ...chars };
                res.Email = e.target.value;
                setChars(res);
              }}
            />
          </ListGroupItem>
        </ListGroup>
        <div style={{ margin: "0 auto" }}>
          <button
            onClick={() => setModal(false)}
            className="btn btn-danger m-3"
          >
            close
          </button>
          <button onClick={() => saving()} className="btn btn-success">
            save
          </button>
        </div>
      </Card>
    </div>
  );
}

export default Modal;

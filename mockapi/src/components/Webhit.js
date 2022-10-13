import React, { useEffect, useState } from "react";
import axios from "axios";
import Show from "./Show";
import Input from "./Input";
import UpdateInput from "./UpdateInput";
let Web_Url = "http://localhost:3333/todo";

const Webhit = () => {

  let [error, setError] = useState({});
  let [fieldState, setFieldState] = useState({userId: "", title: "", completed: ""});
  let [Data, setData] = useState([]);
  let [isAddClicked, setIsAddClicked] = useState(false);
  let [isUpdateClicked, setUpdateClicked] = useState(false);

  if (fieldState.completed === "true") {
    fieldState.completed = true;
    setFieldState(fieldState);
  } else if (fieldState.completed === "false") {
    fieldState.completed = false;
    setFieldState(fieldState);
  } 
  
  let hitUrl = async () => {
    let { data } = await axios.get(Web_Url);
    setData(data);
  };

  useEffect(() => {
    hitUrl();
  }, []);

  let handleAdd = () => {
    setFieldState({ userId: "", title: "", completed: "" });
    setIsAddClicked(true);
    setUpdateClicked(false);
  };

  let handlePatch = async (r) => {
    setFieldState(r);
    setUpdateClicked(true);
    setIsAddClicked(false);
  };

  let handlePut = async (r) => {
    hitUrl();
  };

  let handleDelete = async (c) => {
    let { data } = await axios.delete(Web_Url + "/" + c.id);
    hitUrl();
  };

  let validate = () => {
    let errors = {};

    if (fieldState.userId.trim() === "")
      error.userId = "userId should not be empty";

    if (fieldState.title.trim() === "")
      error.title = "title should not be empty";

    if (fieldState.completed.toString().trim() === "")
      error.completed = "completed should not be empty";

    return Object.keys(errors).length === 0 ? {} : error;
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    let error1 = validate();
    setError(error1);
    let reg = /[0-9]{5}/;
    let error2 = "";
    let usersId = parseInt(fieldState.userId);
    fieldState.userId = usersId;
    setFieldState(fieldState);
    let isNum = reg.test(fieldState.userId);

    if (!isNum) error2 = error2 + "should contain numbers only";
    console.log(error2);
    console.log("err", error);
    console.log("fieldState while adding", fieldState);

    if (
      error.userId === undefined &&
      error.title === undefined &&
      error.completed === undefined &&
      fieldState !== NaN
    ) {
      isAddClicked
        ? await axios.post(Web_Url, fieldState): await axios.patch(Web_Url + "/" + fieldState.id, fieldState);
      hitUrl();
      setIsAddClicked(false);
      setUpdateClicked(false);
      console.log(e);
    }
  };

  let handleChange = (e) => {
    setFieldState({...fieldState, [e.currentTarget.name]: e.currentTarget.value,});
  };

  let handleCancel = () => {
    setIsAddClicked(false);
  };

  if (isAddClicked || isUpdateClicked) {
    return (
      <div className="row">
        <div className="col-4">
          {isAddClicked && (
            <Input
              submit={handleSubmit}
              change={handleChange}
              onCancel={handleCancel}
            />
          )}
          {isUpdateClicked && (
            <UpdateInput
              submit={handleSubmit}
              change={(e) => handleChange(e)}
              updateValue={fieldState}
            />
          )}
        </div>
        <div className="col-8">
          <Show
            value1={Data}
            onDel={(row) => handleDelete(row)}
            onAdd={() => handleAdd()}
            onPatch={(row) => handlePatch(row)}
            onPut={(row) => handlePut(row)}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <Show
        value1={Data}
        onDel={(row) => handleDelete(row)}
        onAdd={() => handleAdd()}
        onPatch={(row) => handlePatch(row)}
        onPut={(row) => handlePut(row)}
      />
    </div>
  );
};

export default Webhit;

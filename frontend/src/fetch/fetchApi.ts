import { IPayload } from "../views/Users/Form";

export const postUser = async (payload: IPayload) => {
  try {
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    alert("success created");
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: number) => {
  try {
    const url = `http://localhost:5000/users/${id}`;
    await fetch(url, {
      method: "DELETE"
    });
    alert("succes deleted");
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id: number, payload: IPayload) => {
  try {
    const url = `http://localhost:5000/users/${id}`;
    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    alert("succes update");
  } catch (error) {
    console.log("error");
  }
};

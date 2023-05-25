import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TransactionPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("papa");

    if (token) {
      axios
        .post("/verify", { token })
        .then((response) => {
          const user = response.data.user;
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div>
      <h1>Transaction Page</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

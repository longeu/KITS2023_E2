import { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap components

const UserManagement = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    await fetch("http://localhost:8080/api/admin/user/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return (
            <Modal>
              <Modal.Header closeButton>
                <Modal.Title>
                  Error when getting data. Please try again
                </Modal.Title>
              </Modal.Header>
            </Modal>
          );
        }
      })
      .then((data) => setUsers(data.results));
  };

  const handleDeleteUser = async (userID) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/user/${userID}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setUsers(users.filter((user) => user.userID !== userID));
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("An error occurred while deleting the user", error);
    }
  };

  useEffect(() => {
    getUser();
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 20px",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.userID}
            style={{
              width: "fit-content",
              display: "flex",
              gap: "20px",
              margin: "20px 0",
              alignItems: "center",
              border: "1px solid black",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h5>Email:</h5> {user.email}
            <h5>Full Name:</h5> {user.firstName + " " + user.lastName}
            <h5>Phone Number:</h5> {user.phone}
            <h5>Joined at:</h5> {user.createdDate}
            <Button variant="primary">Edit</Button>
            <Button
              variant="danger"
              onClick={() => handleDeleteUser(user.userID)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;

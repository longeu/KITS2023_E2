import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useEffect } from "react";

const CategoryManagement = () => {
  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    await fetch("http://localhost:8080/api/category/list", {
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
      .then((data) => setCategories(data.results));
  };

  useEffect(() => {
    getCategory();
  });

  const handleDelete = (category) => {
    const updatedCategories = categories.filter(
      (c) => c.categoryID !== category.categoryID
    );
    setCategories(updatedCategories);
  };

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
      <h2>Category Management</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.categoryID}
            style={{
              width: "100vw",
              display: "flex",
              gap: "20px",
              margin: "20px 0",
              alignItems: "center",
            }}
          >
            <h5>Category:</h5> {category.name}
            <Button variant="danger" onClick={() => handleDelete(category)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManagement;

/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CreateCategory = ({ onCategoryCreate }) => {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState([]);

  const handleSaveCategory = () => {
    onCategoryCreate(categoryName); // Notify parent component about the new category
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Create Category
      </Button>

      {/* Create Category Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="categoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveCategory}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateCategory;

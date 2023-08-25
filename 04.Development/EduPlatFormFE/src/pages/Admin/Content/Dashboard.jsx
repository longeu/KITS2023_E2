/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Modal } from "react-bootstrap";
import "./Dashboard.scss";
import PieChart from "./PieChart";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState(null);
  const [courses, setCourses] = useState(null);

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
          //show a modal of error
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

  const getCourse = async () => {
    await fetch("http://localhost:8080/api/teacher/course/list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          //show a modal of error
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
      .then((data) => setCourses(data.results));
  };

  const teacherCount = users
    ? users.filter((user) => user.role === "ROLE_TEACHER").length
    : 0;
  const studentCount = users
    ? users.filter((user) => user.role === "ROLE_STUDENT").length
    : 0;
  const courseCount = courses ? courses.length : 0;

  useEffect(() => {
    getUser();
    getCourse();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="card-wrapper">
        <Card className="data-card">
          <Card.Body>
            <Card.Title>Teachers</Card.Title>
            <Card.Text>{teacherCount}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="data-card">
          <Card.Body>
            <Card.Title>Students</Card.Title>
            <Card.Text>{studentCount}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="data-card">
          <Card.Body>
            <Card.Title>Courses</Card.Title>
            <Card.Text>{courseCount}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <PieChart
        teacherPercentage={teacherCount}
        studentPercentage={studentCount}
      />
    </div>
  );
};

export default Dashboard;

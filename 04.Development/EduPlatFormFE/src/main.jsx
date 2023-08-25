import React from "react";
import ReactDOM from "react-dom/client";
import CoursePage from "./pages/CoursePage";
import CreateCourse from "./components/CreateCourse";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CourseDetail from "./pages/CourseDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Layout from "./components/Layout";
import TeacherDetail from "./components/TeacherDetail";
import EditProfile from "./pages/EditProfile";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Content/Dashboard";
import UserManagement from "./pages/Admin/Content/UserManagement";
import CategoryManagement from "./pages/Admin/Content/CategoryManagement";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const course = [
  {
    id: 10,
    name: "Mua tốn tiền",
    description: "Hello các bạn mình là toidicodedao :)))",
    objectives: "vẫn là tiêu tiền của bạn nhưng dài hơn",
    target: "chỉ để tiêu tiền của bạn",
    image:
      "https://firebasestorage.googleapis.com/v0/b/edu-platform-e3877.appspot.com/o/image%2F1692864776904edu-platform-high-resolution-logo-black-on-white-background.png?alt=media&token=fc26e94c-4ab3-4d53-a941-5e5e9242ece7",
    status: "ACTIVE",
    price: 9999999.0,
    teacher: {
      id: 1,
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: "https://source.unsplash.com/random?wallpapers",
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: null,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    category: {
      id: 2,
      name: "Lập trình C++",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      status: "ACTIVE",
      createdDate: "21-08-2023 06:55:32",
      modifiedDate: "21-08-2023 06:55:32",
    },
    createdDate: "24-08-2023 08:14:09",
    modifiedDate: "24-08-2023 08:14:09",
  },
  {
    id: 9,
    name: "",
    description: "Hello các bạn mình là toidicodedao :)))",
    objectives: "asdasda,asdasda",
    target: "target 1,asdasdasd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/edu-platform-e3877.appspot.com/o/image%2F1692861254111meme.png?alt=media&token=64e5f272-6df0-4f41-9c0f-d0bf46c09482",
    status: "ACTIVE",
    price: null,
    teacher: {
      id: 1,
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: "https://source.unsplash.com/random?wallpapers",
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: null,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    category: {
      id: 7,
      name: "Lập trình Mobile",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      status: "ACTIVE",
      createdDate: "21-08-2023 06:56:13",
      modifiedDate: "21-08-2023 06:56:13",
    },
    createdDate: "24-08-2023 07:25:22",
    modifiedDate: "24-08-2023 07:25:22",
  },
  {
    id: 8,
    name: "Timw",
    description: "Hello các bạn mình là toidicodedao :)))",
    objectives: "asdasda,asdasda",
    target: "target 1,asdasdasd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/edu-platform-e3877.appspot.com/o/image%2F1692861254111meme.png?alt=media&token=64e5f272-6df0-4f41-9c0f-d0bf46c09482",
    status: "ACTIVE",
    price: 200000.0,
    teacher: {
      id: 1,
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: "https://source.unsplash.com/random?wallpapers",
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: null,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    category: {
      id: 7,
      name: "Lập trình Mobile",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      status: "ACTIVE",
      createdDate: "21-08-2023 06:56:13",
      modifiedDate: "21-08-2023 06:56:13",
    },
    createdDate: "24-08-2023 07:24:00",
    modifiedDate: "24-08-2023 07:24:00",
  },
  {
    id: 7,
    name: "Khoá học cơ bản C#",
    description:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    objectives: null,
    target: "100dd100dd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/edu-platform-e3877.appspot.com/o/image%2F1692601226089epu+bi%E1%BB%83n+t%C3%AAn+xanh.jpg?alt=media&token=2c58e0bf-695b-4b67-9ac0-2b799fff3c7d",
    status: "ACTIVE",
    price: 150000.0,
    teacher: {
      id: 1,
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: "https://source.unsplash.com/random?wallpapers",
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: null,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    category: {
      id: 1,
      name: "Lập trình C# .Net",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      status: "ACTIVE",
      createdDate: "21-08-2023 06:55:13",
      modifiedDate: "21-08-2023 06:55:13",
    },
    createdDate: "24-08-2023 07:21:45",
    modifiedDate: "24-08-2023 07:21:45",
  },
  {
    id: 6,
    name: "Khoá học cơ bản C#",
    description:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    objectives: null,
    target: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/edu-platform-e3877.appspot.com/o/image%2F1692601226089epu+bi%E1%BB%83n+t%C3%AAn+xanh.jpg?alt=media&token=2c58e0bf-695b-4b67-9ac0-2b799fff3c7d",
    status: "ACTIVE",
    price: 150000.0,
    teacher: {
      id: 1,
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: "https://source.unsplash.com/random?wallpapers",
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: null,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    category: {
      id: 1,
      name: "Lập trình C# .Net",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      status: "ACTIVE",
      createdDate: "21-08-2023 06:55:13",
      modifiedDate: "21-08-2023 06:55:13",
    },
    createdDate: "24-08-2023 07:20:51",
    modifiedDate: "24-08-2023 07:20:51",
  },
  {
    id: 5,
    name: "Timw",
    description: "Hello các bạn mình là toidicodedao :)))",
    objectives: "asdasda,asdasda",
    target: "target 1,asdasdasd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/edu-platform-e3877.appspot.com/o/image%2F1692861254111meme.png?alt=media&token=64e5f272-6df0-4f41-9c0f-d0bf46c09482",
    status: "ACTIVE",
    price: 200000.0,
    teacher: {
      id: 1,
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: "https://source.unsplash.com/random?wallpapers",
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: null,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    category: {
      id: 7,
      name: "Lập trình Mobile",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      status: "ACTIVE",
      createdDate: "21-08-2023 06:56:13",
      modifiedDate: "21-08-2023 06:56:13",
    },
    createdDate: "24-08-2023 07:20:15",
    modifiedDate: "24-08-2023 07:20:15",
  },
  {
    id: 4,
    name: "Timw",
    description: "Hello các bạn mình là toidicodedao :)))",
    objectives: "asdasda,asdasda",
    target: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/edu-platform-e3877.appspot.com/o/image%2F1692861254111meme.png?alt=media&token=64e5f272-6df0-4f41-9c0f-d0bf46c09482",
    status: "ACTIVE",
    price: 200000.0,
    teacher: {
      id: 1,
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: "https://source.unsplash.com/random?wallpapers",
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: null,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    category: {
      id: 7,
      name: "Lập trình Mobile",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      status: "ACTIVE",
      createdDate: "21-08-2023 06:56:13",
      modifiedDate: "21-08-2023 06:56:13",
    },
    createdDate: "24-08-2023 07:19:28",
    modifiedDate: "24-08-2023 07:19:28",
  },
  {
    id: 2,
    name: "Khoá học cơ bản C++",
    description:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    objectives: null,
    target: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/edu-platform-e3877.appspot.com/o/image%2F1692601226089epu+bi%E1%BB%83n+t%C3%AAn+xanh.jpg?alt=media&token=2c58e0bf-695b-4b67-9ac0-2b799fff3c7d",
    status: "ACTIVE",
    price: 150000.0,
    teacher: {
      id: 1,
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: "https://source.unsplash.com/random?wallpapers",
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: null,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    category: {
      id: 2,
      name: "Lập trình C++",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      status: "ACTIVE",
      createdDate: "21-08-2023 06:55:32",
      modifiedDate: "21-08-2023 06:55:32",
    },
    createdDate: "21-08-2023 07:02:15",
    modifiedDate: "21-08-2023 07:02:15",
  },
  {
    id: 1,
    name: "Khoá học cơ bản C#",
    description:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    objectives: null,
    target: null,
    image:
      "https://firebasestorage.googleapis.com/v0/b/edu-platform-e3877.appspot.com/o/image%2F1692601226089epu+bi%E1%BB%83n+t%C3%AAn+xanh.jpg?alt=media&token=2c58e0bf-695b-4b67-9ac0-2b799fff3c7d",
    status: "ACTIVE",
    price: 150000.0,
    teacher: {
      id: 1,
      email: "longeu100@gmail.com",
      phone: null,
      firstName: "Long",
      lastName: "Hoang",
      image: "https://source.unsplash.com/random?wallpapers",
      bio: null,
      link: null,
      certificates: null,
      experience: null,
      userID: null,
      createdDate: "20-08-2023 17:43:45",
      modifiedDate: "20-08-2023 17:43:45",
    },
    category: {
      id: 1,
      name: "Lập trình C# .Net",
      description:
        "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
      status: "ACTIVE",
      createdDate: "21-08-2023 06:55:13",
      modifiedDate: "21-08-2023 06:55:13",
    },
    createdDate: "21-08-2023 07:01:42",
    modifiedDate: "21-08-2023 07:01:42",
  },
];
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="course/:id" element={<CourseDetail />} />
          <Route path="course" element={<CoursePage course={course} />} />
          <Route path="teacher/:id" element={<TeacherDetail />}></Route>
          <Route path="/edit-profile/" element={<EditProfile />}></Route>
          <Route path="course/create" element={<CreateCourse />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist course={course} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset" element={<ResetPassword />} />
          <Route path="*" element={<Login />} />
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="manage-users" element={<UserManagement />} />
            <Route path="manage-categories" element={<CategoryManagement />} />
          </Route>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

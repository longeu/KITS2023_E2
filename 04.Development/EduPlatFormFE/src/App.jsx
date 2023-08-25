import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import CoursePage from "./pages/CoursePage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CourseDetail from "./pages/CourseDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Admin/Content/Dashboard";
import UserManagement from "./pages/Admin/Content/UserManagement";
import CategoryManagement from "./pages/Admin/Content/CategoryManagement";

const App = () => {
  const location = useLocation();

  const hiddenRoutes = [
    "/login",
    "/signup",
    "/reset",
    "/admin",
    "/admin/manage-users",
    "/admin/manage-categories",
  ];

  const isHidden = hiddenRoutes.includes(location.pathname);

  const course = [
    {
      id: 1,
      title: "React",
      category: "Front-end",
      description:
        "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      price: 99.99,
    },
    {
      id: 2,
      title: "React Native",
      category: "Mobile",
      description:
        "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      price: 99.99,
    },
    {
      id: 3,
      title: "NodeJS",
      category: "Back-end",
      description:
        "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      price: 99.99,
    },
    {
      id: 4,
      title: "ExpressJS",
      category: "Back-end",
      description:
        "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/220px-Expressjs.png",
      price: 99.99,
    },
    {
      id: 5,
      title: "MongoDB",
      category: "Database",
      description:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
      price: 99.99,
    },
    {
      id: 6,
      title: "Spring Boot",
      category: "Back-end",
      description:
        "Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can just run.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png",
      price: 99.99,
    },
    {
      id: 7,
      title: "Flutter",
      category: "Mobile",
      description:
        "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google-flutter-logo.png/1200px-Google-flutter-logo.png",
      price: 99.99,
    },
    {
      id: 8,
      title: "Django",
      category: "Back-end",
      description:
        "Django is a Python-based free and open-source web framework that follows the model-template-views architectural pattern.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1200px-Django_logo.svg.png",
      price: 99.99,
    },
    {
      id: 9,
      title: "Laravel",
      category: "Back-end",
      description:
        "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
      price: 99.99,
    },
    {
      id: 10,
      title: "VueJS",
      category: "Front-end",
      description:
        "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      price: 99.99,
    },
    {
      id: 11,
      title: "Angular",
      category: "Front-end",
      description:
        "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
      price: 99.99,
    },
    {
      id: 12,
      title: "Unreal Engine 5",
      category: "Video Game",
      description:
        "Unreal Engine is a game engine developed by Epic Games. It is a suite of integrated tools for game developers to design and build games, simulations, and visualizations.",
      image:
        "https://th.bing.com/th/id/R.7ee30c8175fe55c08a80f1bad1eb78ae?rik=B%2fDn56%2fnuoWP%2bA&pid=ImgRaw&r=0",
      price: 99.99,
    },
    {
      id: 13,
      title: "DevOps A-Z",
      category: "DevOps",
      description:
        "DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.",
      image:
        "https://eadn-wc03-4064062.nxedge.io/cdn/wp-content/uploads/2021/07/DevOps_Diagram-03.png",
      price: 99.99,
    },
  ];

  return (
    <>
      {!isHidden && <Navbar courseData={course} />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home course={course} />} />
        <Route path="/course/:id" element={<CourseDetail course={course} />} />
        <Route path="/course" element={<CoursePage course={course} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist course={course} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<UserManagement />} />
          <Route path="manage-categories" element={<CategoryManagement />} />
        </Route>
      </Routes>
      {!isHidden && <Footer />}
    </>
  );
};

export default App;

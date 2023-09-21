import "./App.css";
import {useSelector} from 'react-redux'
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OpenRoute from "./components/Auth/OpenRoute";
import PrivateRoute from './components/Auth/PrivateRoute'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UpdatePassword from './pages/UpdatePassword'
import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from './pages/ForgotPassword'
import { ACCOUNT_TYPE } from "./utils/constants";
import Instructor from "./components/Dashboard/InstructorDashboard/Instructor";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/Dashboard/MyProfile";
import Settings from "./components/Dashboard/Settings/index";
import AddCourse from "./components/Dashboard/AddCourse";
import MyCourses from "./components/Dashboard/MyCourses";
import EditCourse from "./components/Dashboard/EditCourse";
import EnrolledCourses from "./components/Dashboard/EnrolledCourses";
import Cart from "./components/Dashboard/Cart/index";
import Catalog from './pages/Catalog'
import Error from './pages/Error'
import CourseDetails  from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from './components/ViewCourse/VideoDetails'
import ContactUs from "./pages/ContactUs";

const App = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="/courses/:courseId" element={<CourseDetails/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="*" element={<Error />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        ></Route>
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />

          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
        </Route>

        <Route element={
          <PrivateRoute>
            <ViewCourse/>
          </PrivateRoute>
        }>
            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId" element={<VideoDetails/>}></Route>
            )}
        </Route>
      </Routes>
    </div>
  );
};

export default App;

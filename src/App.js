import "./App.css";
import { Routes, Route } from "react-router-dom";

//import pages
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import ProfileDetails from "./Pages/ProfileDetails";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/profile" element={<ProfileDetails />}>
          <Route
            path=":id"
            element={(props) => (
              <ProfileDetails {...props} key={props.match.params.id} />
            )}
          />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

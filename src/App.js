import "./App.css";
import { Routes, Route } from "react-router-dom";

//import pages
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import ProfileDetails from "./Pages/ProfileDetails";

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
    </div>
  );
}

export default App;

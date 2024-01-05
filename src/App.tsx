import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import { MantineProvider } from "@mantine/core";
import Explore from "./Pages/Explore/Explore";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Message from "./Pages/Message/Message";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

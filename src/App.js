import Login from "./pages/Login";
import Register from "./pages/Register";
import './style.scss'
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Test from './pages/Test'
function App() {
  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if(!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  };

  // console.log(currentUser)
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/">
         <Route index 
         element={
         <ProtectedRoute>
            <Home />
         </ProtectedRoute>
         } />
         <Route path="login" element={<Login />} />
         <Route path="register" element={<Register />} />
         <Route path="/test" element={<Test />} />
       </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;

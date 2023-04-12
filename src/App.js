import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Menu";
import { BlogPage } from "./BlogPage";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";
import { BlogPost } from "./BlogPost";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { AuthProvider, AuthRoute } from "./auth";

function App() {
  return (
   <>
   <HashRouter>
    <AuthProvider>
      <Menu/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blog" element={<BlogPage/>} >
          <Route path=":slug" element={<BlogPost/>} />
        </Route>
        <Route path="/profile" element={
          <AuthRoute>
            <ProfilePage/>
          </AuthRoute>
        } 
        />
        <Route path="/logout" element={
          <AuthRoute>
            <Logout/>
          </AuthRoute>
        } 
        />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </AuthProvider>
   </HashRouter>
   </>
  );
}

export default App;

import Sidebar from "./component/Sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Movielist from "./pages/movielist/Movielist";
import  List  from "./pages/list/List";
import Newlist from './pages/newList/Newlist'


function App() {
 const user=localStorage.getItem("user")
  return (
    <>
      <Topbar />
      <div className="container">
      <Sidebar />
        <Routes>
         
          {user ? 
          <>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/movie/:productId" element={<Product />} />
          <Route path="/newmovie" element={<NewProduct />} />
          <Route path="/lists" element={<Movielist />} />
          <Route path="/lists/:productId" element={<List />} />
          <Route path="/newlist" element={<Newlist />} />
          </> :<Route path="/" element={<Login />} />}
         
        </Routes>
      </div>
    </>
  );
}

export default App;

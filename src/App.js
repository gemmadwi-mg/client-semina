import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation
} from "react-router-dom";
import './App.css';

function Home() {
  return <h1>Home</h1>;
}
function Categories() {
  let location = useLocation();
  return (
    <>
      <h1>C</h1>
      <table> 
        <thead> 
          <tr> 
            <th>Id</th>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody> 
          <tr> 
            <td>1</td>
            <td><Link to="/categories/372435235">Seminar</Link></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
function CategoriesDetail() {
  let {id} = useParams();

  return <h1>C : {id}</h1>;
}
function About() {
  return <h1>A</h1>;
}
function Login() {
  const navigate = useNavigate()
  return (
  <>
  <h1>Login</h1>
    <button onClick={() => navigate('/')}>Submit</button>
  </>);
}

function App() {
  return (

    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
       
        <li>
          <Link to='/categories'>Categories</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:id" element={<CategoriesDetail />} />
        <Route path="about" element={<About />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;

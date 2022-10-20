import Button from './components/Button';
import './App.css';
import { Hello } from './Hello';
import { Title } from './Title';

function App() {
  const users = [{
    _id: 1,
    name: 'Gemma', age: 21,
    status: true,
  }, {
    _id: 1,
    name: 'Nungky', age: 21,
    status: true,
  }, {
    _id: 1,
    name: 'Sihab', age: 21,
    status: false,
  },];

  const isLogin = true;

  return (
    <>
      <h1>Welcome to react</h1>
      <ul>
        <li>Home</li>
        <li>Users</li>
        <li>{ isLogin ? "Sudah login" : "Login"}</li>
      </ul>
      <h1><Hello /></h1>
      <Title name="Gemma Dwi Prasetya" />
      <br />
      <Button onClick={() => alert('Click save')}>Save</Button>
      <ul>
        {users.map((user, index) => {
          return (
            <>
              {user.status && <li key={index}>{`Nama saya ${user.name} dan usia ${user.age}`}</li>}
            </>
          )
        })}
      </ul>
    </>
  );
}

export default App;

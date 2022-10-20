import Button from './components/Button';
import './App.css';
import { Hello } from './Hello';
import { Title } from './Title';

function App() {
  const users = ['gemma', 'nungky', 'Hiji'];

  return (
    <>
      <h1>Hello React</h1>
      <h1><Hello /></h1>
      <Title name="Gemma Dwi Prasetya" />
      <br />
      <Title name="Dwi" />
      <br />
      <Title />
      <Button onClick={() => alert('Click save')}>Save</Button>
      <ul>
        {users.map((user, index) => { return <li key={index}>{user}</li> })}
      </ul>
    </>
  );
}

export default App;

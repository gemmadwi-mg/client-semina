import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';


function App() {
  const [number, setNumber] = useState(0);
  // const [name, setName] = useState('');
  // const [tahunLahir, setTahunLahir] = useState('');
  // const [usia, setUsia] = useState('');
  const [form, setForm] = useState({
    name: '',
    usia: '',
    tahunLahir: ''
  })

  const [error, setError] = useState('')


  const klik = () => {
    setNumber(number + 1);
  }

  const handleSubmit = () => {
    setForm({ ...form, usia: 2022 - form.tahunLahir })
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>Counter app</h1>
      <p>Nilai counter saat ini {number}</p>
      <Button onClick={klik}>
        Click me
      </Button>
      <hr />
      <h1>Aplikasi input data diri</h1>
      name : <Input type='text' value={form.name} name="name" onChange={handleChange} />
      <br />
      <br />
      Tahun Lahir : <Input type='number' value={form.tahunLahir} name="tahunLahir" onChange={handleChange} />
      <br />
      <br />
      Umur Saya : {form.usia}
      <br />
      <br />

      <Button onClick={handleSubmit}>Submit</Button>

    </>
  );
}

export default App;

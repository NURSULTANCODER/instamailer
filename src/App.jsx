import { useRef } from 'react';
import './App.css';
import './reset.css';
import { useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch('http://localhost:5000/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <div className="App">
      <header className='header'>
        <h1>Insta Mailer</h1>
      </header>
      <form className='from' onSubmit={handleSubmit(onSubmit)}>
        <div className="login">
          <TextField id="outlined-basic" 
          label="Login" 
          variant="outlined" 
          {...register("login")} />
          <TextField id="outlined-basic" 
          label="Password" 
          variant="outlined" 
          {...register("password")} />
          <Button  variant="contained" type='submit'>Log In</Button>
        </div>
        <div className='message'>
            <h3>message</h3>
            <textarea
            className='message-textarea'
            rows={8}
            label="message"
            {...register("message")} />

          <Button  variant="contained" type='submit'>message</Button>
        </div>
      </form>
    </div>
  );
}

export default App;

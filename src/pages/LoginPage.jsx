import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fields = [email, password];
  const isDisabled = fields.some((field) => field.trim() === '');

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/profile');
  }

  return (
    <div className="app-container px-5 py-8 flex flex-col gap-5 shadow-lg">
      <div className='space-y-2'>
        <p className="text-3xl text-text font-semibold max-w-[12ch]">Signin to your PopX account</p>
        <p className="text-lg text-text/50 font-medium max-w-[22ch]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      <form onSubmit={() => navigate('/Profile')} className="flex-1 flex flex-col space-y-4">
        <Input 
          value={email}
          type='email'
          isRequired
          label="Email address"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input 
          value={password}
          type='password'
          isRequired
          label="Password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type='submit'
          isPrimary
          onClick={handleSubmit}
          isDisabled={isDisabled}
          className="font-semibold"
        >Login
        </Button>
      </form>
    </div>
  )
}

export default LoginPage;

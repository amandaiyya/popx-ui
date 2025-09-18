import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

// Signup Page
function SignupPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('Marry Doe');
  const [phoneNumber, setPhoneNumber] = useState('1234567890');
  const [email, setEmail] = useState('marrydoe@outlook.com');
  const [password, setPassword] = useState('1234567890');
  const [companyName, setCompanyName] = useState('Marry Corporations');
  const [isAgency, setIsAgency] = useState("yes");

  // Handling submit button disabling based on input
  const fields = [fullName, phoneNumber, email, password, companyName, isAgency];
  const isDisabled = fields.some((field) => field.trim() === '')

  // Form Submit Hanlder
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/profile');
  }

  return (
    <div className="app-container px-5 py-8 flex flex-col gap-5 shadow-lg">
      <div>
        <p className="text-3xl text-text font-semibold max-w-[12ch]">Create your PopX account</p>
      </div>

      {/* Form for Signup*/}
      <form onSubmit={() => navigate('/Profile')} className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Input Component for Full Name*/}
          <Input 
            value={fullName}
            type='text'
            isRequired
            label="Full Name"
            placeholder="Enter full name"
            onChange={(e) => setFullName(e.target.value)}
          />

          {/* Input Component for email */}
          <Input 
            value={phoneNumber}
            type='text'
            isRequired
            label="Phone number"
            placeholder="Enter phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          {/* Input Component for email */}
          <Input 
            value={email}
            type='email'
            isRequired
            label="Email address"
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Input Component for password */}
          <Input 
            value={password}
            type='password'
            isRequired
            label="Password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Input Component for company name */}
          <Input 
            value={companyName}
            type='text'
            label="Company name"
            placeholder="Enter company name"
            onChange={(e) => setCompanyName(e.target.value)}
          />

          {/* Input Component for isAgency */}
          <div className='text-text text-sm space-y-2'>
            <p>
              Are you an Agency?
              <span className='text-required'>*</span>  
            </p>

            <div className='space-x-5 flex items-center'>
              <label className='space-x-3 flex item-center'>
                <input
                 type="radio"
                 value="yes"
                 checked={isAgency === "yes"}
                 className='w-5 h-5 accent-primary'
                 onChange={(e) => setIsAgency(e.target.value)}
                />
                <span>Yes</span>
              </label>

              <label className='space-x-3 flex item-center'>
                <input
                 type="radio"
                 value="no" 
                 checked={isAgency === "no"}
                 className='w-5 h-5 accent-primary'
                 onChange={(e) => setIsAgency(e.target.value)}
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Button Component for Form Submitting */}
        <Button
          type='submit'
          isPrimary
          onClick={handleSubmit}
          isDisabled={isDisabled}
          className="font-semibold"
        >Create Account
        </Button>
      </form>
    </div>
  )
}

export default SignupPage;

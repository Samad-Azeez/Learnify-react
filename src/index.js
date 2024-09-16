import React from 'react';
import ReactDom from 'react-dom';

// import CSS file
import './index.css';

const firstField = {
  id: 'username',
  name: 'password',
  type: 'text',
  labelText: 'Login ID',
  placeholder: 'Username/Email',
};
const secondField = {
  id: 'password',
  name: 'password',
  type: 'password',
  labelText: 'Password',
  placeholder: 'Your Password',
};

const Login = () => {
  return (
    <div className='container'>
      <Logo />
      <Heading />
      <Form />
    </div>
  );
};

const Form = () => {
  return (
    <form action=''>
      <Fields {...firstField} />
      <Fields {...secondField} />
      {/* Forgot password */}
      <a href='null' className='forgot_password'>
        Forgot Password?
      </a>{' '}
      <br />
      {/* Submit button */}
      <button type='submit' className='button'>
        Sign In
      </button>
      {/* Register button */}
      <p className='register'>
        Don't have an account? <span className='sign_up'>Sign Up</span>
      </p>
    </form>
  );
};

const Fields = (props) => {
  const { labelText, type, name, id, placeholder } = props;
  return (
    <section>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </section>
  );
};

const Logo = () => {
  return <img src='/logo.png' alt='logo' />;
};

const Heading = () => {
  return (
    <h1 className='heading'>
      Login into your <span className='learnify'>Learnify</span> account
    </h1>
  );
};

ReactDom.render(<Login />, document.getElementById('root'));

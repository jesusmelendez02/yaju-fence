import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app'>
      <form
        id='contact-form'
        className='contact-form'>
        <label htmlFor="name">Name*</label>
        <input
          placeholder='Enter your name'
          type='text'
          name='name'
          id='name'
          required={true}
        />
        <label htmlFor="email">Email*</label>
        <input
          placeholder='Enter your email address'
          type='email'
          name='email'
          id='email'
          required={true}
        />
        <label htmlFor="phone">Phone</label>
        <input
          placeholder='(xxx)xxx-xxxx'
          type='tel'
          name='phone'
          id='phome'
          required={false}
        />
        <label htmlFor="address">Address</label>
        <input
          placeholder='Enter your address or project location'
          type='address'
          name='address'
          id='address'
          required={false}
        />
        <fieldset>
          <legend>Fence type</legend>
          <ul>
            <li>
              <input
                type="checkbox"
                name='fenceType'
                id='vinyl'
                value='vinyl'
              />
              <label htmlFor="vinyl">Vinyl</label>

            </li>
            <li>
              <input
                type="checkbox"
                name='fenceType'
                id='wood'
                value='wood'
              />
              <label htmlFor="wood">Wood</label>
            </li>
            <li>
              <input
                type="checkbox"
                name='fenceType'
                id='aluminum'
                value='aluminum'
              />
              <label htmlFor="aluminum">Aluminum</label>
            </li>
            <li>
              <input
                type="checkbox"
                name='fenceType'
                id='chainLink'
                value='chainLink'
              />
              <label htmlFor="chainLink">Chain link</label>
            </li>
            <li>
              <input
                type="checkbox"
                name='fenceType'
                id='notSure'
                value='notSure'
              />
              <label htmlFor="notSure">Not sure</label>
            </li>
          </ul>
        </fieldset>
        <label htmlFor="message">Project details</label>
        <textarea
          // maxLength={300}
          rows="3"
          placeholder='Tell us more about your project (e.g., fence length, style preferences, any obstacles)'
          name='message'
          id='message'
          required={false}
        />
        <button type='submit'>REQUEST A FREE QUOTE</button>
      </form>
    </div>
  );
}

export default App;


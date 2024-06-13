import React, {setValue, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Home() {

    const options = [
      {label: 'GPT-2', value: 'gpt2'},
      {label: 'model2', value: 'model2'}
    ]

    const [value, setValue] = React.useState('gpt2')

    const handleChange = (Event) => {
      setValue(Event.target.value)
    }

    const Dropdown = ({ label, value, options, onChange }) => {
      return (
        <label>
          {label}
          <select value={value} onChange={onChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      );
    }

    return (
      <>
        <Dropdown 
          label="Choose a model!" 
          options={options} 
          value={value} 
          onChange={handleChange}
        />
      </>
    );
  }


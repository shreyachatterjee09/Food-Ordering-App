import React from 'react';
import '@testing-library/jest-dom';


  
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe("Contact Us. Page Test Case", () => {
  
  test("Should load contact us component",() => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  })
  test("Should load contact us component",() => {
    render(<Contact/>);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  })
})
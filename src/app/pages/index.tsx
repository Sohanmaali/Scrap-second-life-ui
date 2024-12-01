import React from 'react';
import { isAuthenticated } from '../utils/auth';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to Scrapify</h1>
      {isAuthenticated() ? (
        <p>You are logged in!</p>
      ) : (
        <p>Please login or sign up.</p>
      )}
    </div>
  );
};

export default HomePage;

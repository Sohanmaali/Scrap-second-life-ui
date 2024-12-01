'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { logout } from './store/slices/authSlice';
import LoginForm from './components/LoginForm';
import { isAuthenticated, removeToken } from './utils/auth';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';

const HomePage = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <div>
     {/* <Header/> */}
      {isAuthenticated() ? (
        <div>
          <ImageSlider/>
        </div>
      ) : (
        <LoginForm/>
      )}
    </div>
  );
};

export default HomePage;

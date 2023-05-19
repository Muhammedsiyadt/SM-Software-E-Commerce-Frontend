// 29-04-2023 Athul Vinod

// Components
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';



import React, { useEffect } from 'react'
import { useLocation } from 'wouter'
import { Fade } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../app/auth/userAction';

function DefaultRoute({ children }) {
   const [location] = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location])


   const dispatch = useDispatch();
 
 
   useEffect(() => {
     const checkToken = async () => {
       if (localStorage.getItem('token')) {
         dispatch(userAction({ token: JSON.parse(localStorage.getItem('token')) }))
       }
       else {
         return;
       }
     }
     checkToken()
   }, [])


   return (
      <React.Fragment>
         <Navbar />
          <Fade in>
          {children}
          </Fade>
         <Footer />
      </React.Fragment>
   )
}

export default DefaultRoute
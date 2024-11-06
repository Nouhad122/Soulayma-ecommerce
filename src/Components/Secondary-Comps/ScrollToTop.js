import {useEffect} from 'react';

const ScrollToTop = (location) => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, [location], []);
  return null;
}

export default ScrollToTop

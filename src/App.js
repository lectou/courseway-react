import React, { useState } from 'react';
import {
  Header, Advantages, Courses, Registration,
  Certificate, Partners, Developers, Footer, MobileMenu
} from './components';
import ButtonToTop from './common/ButtonToTop';

function App() {

  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);

  return (
    <div className="App">
      <Header setVisibleMobileMenu={setVisibleMobileMenu} visibleMobileMenu={visibleMobileMenu} />
      <MobileMenu setVisibleMobileMenu={setVisibleMobileMenu} visibleMobileMenu={visibleMobileMenu} />
      <Advantages />
      <Courses />
      <Partners />
      <Certificate />
      <Developers />
      <Registration />
      <Footer />
      <ButtonToTop />
    </div>
  );
}

export default App;

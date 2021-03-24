import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import classNames from 'classnames';
import top from '../images/top.png'
import { animateScroll as scroll } from 'react-scroll'

export default function ButtonToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 700) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset])

  return (
    <button className={classNames("scroll-To-Top", { "active": visible })} onClick={() => scroll.scrollToTop()}>
      <img src={top} alt="top_icon" />
    </button>
  )
}

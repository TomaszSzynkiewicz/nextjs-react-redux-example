import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import classNames from 'classnames';

const Header = ({ currentUrl }) => {
  const renderLinks = () => {
    const links = [
      { href: '/', text: 'Home' },
      { href: '/admin', text: 'Admin' }
    ];

    return links.map(e => (
      <li key={e.href}>
        <Link href={e.href}>
          <a className={classNames({ active: e.href === currentUrl })}>{e.text}</a>
        </Link>
      </li>
    ));
  };

  return (
    <div className="header">
      <ul className="navi">
        {renderLinks()}
      </ul>
    </div>
  );
};

Header.propTypes = {
  currentUrl: PropTypes.string.isRequired
};

export default Header;

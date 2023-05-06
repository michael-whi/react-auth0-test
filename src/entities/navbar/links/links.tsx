import React from 'react';
import { Link } from 'react-router-dom';
import { SLinkItem, SLinkList } from './links.styles';

export const AppLinks = () => (
  <SLinkList>
    <SLinkItem>
      <Link to="/">Home</Link>
    </SLinkItem>
    <SLinkItem>
      <Link to="/profile">Profile</Link>
    </SLinkItem>
    <SLinkItem>
      <Link to="/message">Message</Link>
    </SLinkItem>
    <SLinkItem>
      <Link to="/about">About</Link>
    </SLinkItem>
  </SLinkList>
);

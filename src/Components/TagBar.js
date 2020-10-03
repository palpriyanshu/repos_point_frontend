import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  margin: 20px;
  background: #8c2ce60d;
  height: 3.6vh;
`;

const StyledNavLink = styled(NavLink)`
  color: #111;
  font-size: 20px;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    color: #8c2ce6;
  }
`;

const TagBar = ({ types, baseUrl }) => {
  const navBar = types.map((type) => (
    <StyledNavLink
      to={`${baseUrl}/${type}`}
      activeClassName="activeLink"
      key={type}
    >
      {type}
    </StyledNavLink>
  ));

  return <StyledNavBar>{navBar}</StyledNavBar>;
};

export default TagBar;

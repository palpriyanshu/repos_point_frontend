import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  margin: 20px;
  background-color: #eee;
  height: 3.6vh;
`;

const StyledNavLink = styled(NavLink)`
  color: #444;
  font-size: 20px;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    color: #111;
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

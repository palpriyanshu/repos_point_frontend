import React, { useState } from 'react';
import Cards from './Cards.js';
import styled from 'styled-components';
import searchIcon from '../icons/searchBar.png';

const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;
`;

const SearchBar = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #aaa;
  border-radius: 4px;
  padding: 5px;
  font-size: 18px;
  color: #555;
  border-bottom: 1px solid #888;
`;

const SearchArea = styled.div`
  margin: 20px;
  left: 50vw;
  top: 2.4vh;
  position: absolute;
  display: flex;
`;

const SearchableGallery = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const filteredGallery = (repoList) => {
    return repoList.filter(({ repoName }) => {
      return repoName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };
  const filteredList = filteredGallery(props.data);

  return (
    <div>
      <SearchArea>
        <SearchBar onChange={handleChange} value={searchTerm}></SearchBar>
        <SearchIcon src={searchIcon} alt="searchBar"></SearchIcon>
      </SearchArea>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Cards cards={filteredList} />
      </div>
    </div>
  );
};

export default SearchableGallery;

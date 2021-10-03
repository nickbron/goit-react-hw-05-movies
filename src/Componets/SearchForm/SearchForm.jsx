import React from 'react';
import { toast } from 'react-toastify';

import {
  Header,
  Form,
  SearchButton,
  SearchButtonLabel,
  Input,
} from './SearchForm.styled';

const SearchForm = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    if (e.target.elements.filmName.value.trim() === '') {
      toast.error('Для поиска введите значение');
      return;
    }
    onSearch(e.target.elements.filmName.value);
  };

  return (
    <Header>
      <Form onSubmit={handleSearch} autoComplete="off">
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <Input
          name="filmName"
          // className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </Form>
    </Header>
  );
};

export default SearchForm;

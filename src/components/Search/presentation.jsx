import React, { useState, useEffect, useContext } from 'react';
import { Wrapper, ErrorWrapper } from './presentation.styled';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../../context/context';

const Search = () => {
  const [value, setValue] = useState('')
  const { request, error, searchUser } = useContext(GithubContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(value) {
      searchUser(value)
    }
  }
  useEffect(() => {

  },[value])
  return (
    <section className="section">
      <Wrapper className="section-center">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <MdSearch />
          <input
            type="text"
            name="value"
            placeholder="search github user"
            value={value}
            onChange={(e)=> setValue(e.target.value)}
          />
          {!error.status &&
          <button
            className="button"
            type="submit"
          >
            Search
          </button>}
        </div>
      </form>
      <h3>Request {request}/60</h3>
      <ErrorWrapper>{error.status && <h4 className="section-center">Cannot find github user</h4>}</ErrorWrapper>
      </Wrapper>
    </section>
  )
};

export default Search;

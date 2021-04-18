import React, { useContext } from 'react';
import { GithubContext } from '../../context/context';
import { Wrapper } from './presentation.styled';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const Card = () => {
  const { githubUser } = useContext(GithubContext)
  const { avatar_url, bio, blog, company, name, location } = githubUser

  return (
    <section className="section">
      <Wrapper>
        <header>
          <img src={avatar_url} alt="avatar logo"/>
          <div>
            <h4>{name}</h4>
          </div>
        </header>
        <div>
          <p className="bio">{bio}</p>
          <div className="links">
            <p><MdLocationOn />{location}</p>
            <p><MdLink />{blog}</p>
            <p><MdBusiness />{company}</p>
          </div>
          </div>
      </Wrapper>
    </section>
  )
};

export default Card;

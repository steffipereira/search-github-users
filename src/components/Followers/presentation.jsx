import React, { useContext } from 'react';
import { GithubContext } from '../../context/context';
import { Wrapper } from './presentation.styled';

const Followers = () => {
  const { githubFollowers } = useContext(GithubContext)

  return (
    <Wrapper>
      <div className="followers">
        {githubFollowers.map(followers => {
          const {id, avatar_url, login, url } = followers
          return (
          <article key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <p>{url}</p>
            </div>
          </article>
        )
        })}
      </div>
    </Wrapper>
  )
};

export default Followers;

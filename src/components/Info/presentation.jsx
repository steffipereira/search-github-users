import React, { useContext } from 'react';
import { GithubContext } from '../../context/context';
import { Wrapper } from './presentation.styled'
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
  const { githubUser } = useContext(GithubContext)
  const { public_repos, followers, following, public_gists  } = githubUser

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      iconColor: 'pink',
      githubLabel: 'Repos',
      githubStats: public_repos
    },
    {
      id: 2,
      icon: <GoGist className="icon" />,
      iconColor: 'green',
      githubLabel: 'Followers',
      githubStats: followers
    },
    {
      id: 3,
      icon: <FiUsers className="icon" />,
      iconColor: 'purple',
      githubLabel: 'Following',
      githubStats: following
    },
    {
      id: 4,
      icon: <FiUserPlus className="icon" />,
      iconColor: 'yellow',
      githubLabel: 'Gists',
      githubStats: public_gists
    },
  ]

  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </Wrapper>
    </section>
  )
};

const Item = ({ iconColor, icon, githubLabel, githubStats }) => {
  return (
    <div className="item">
      <i className={iconColor}>{icon}</i>
        <span>
          <h3>{githubLabel}</h3>
          <p>{githubStats}</p>
        </span>
    </div>
   );
}


export default UserInfo;

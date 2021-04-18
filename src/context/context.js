import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext()

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers)
  const [request, setRequest] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ status: false, msg:''})

  function toggleError(status = false, msg = '') {
    setError({ status, msg })
  }

  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({data: { rate: { remaining } }}) => {
        setRequest(remaining)
        if(!remaining) {
          toggleError(true, 'Passed the limit')
        }
        })
      .catch(err => console.log(err))
  }
  const searchUser = async(user) => {
    toggleError()
    setIsLoading(true)
    const response = await axios(`${rootUrl}/users/${user}`)
      .catch((error) => console.log(error))
    if(response) {
      const { data } = response
      setGithubUser(data)
      const { followers_url } = data
      const promises = [axios(`${followers_url}?per_page=30`)]
      await Promise.allSettled(promises)
        .then(result => {
          const [followers] = result
          const { status, value: { data } } = followers
          if(status === 'fulfilled') {
            setGithubFollowers(data)
          }
        })
        .catch(err => console.log(err))
    } else {
      toggleError(true, 'Cannot find user')
    }
    checkRequest()
    setIsLoading(false)
  }

  useEffect(checkRequest,[])

  return (
    <GithubContext.Provider
      value={{ githubUser, githubFollowers, error, request, searchUser, isLoading }}
    >
      {children}
    </GithubContext.Provider>
   );
}

export { GithubProvider, GithubContext };

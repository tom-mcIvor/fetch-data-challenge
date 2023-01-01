



import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Users from './Users';
import Comments from './Comments';




function App() {


  const API_URL = 'https://jsonplaceholder.typicode.com/useres';

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);




  fetch('https://jsonplaceholder.typicode.com/useres')
    .then(response => response.json())
    .then(json => console.log(json))

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))

  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => console.log(json))



    useEffect(() => {

      const fetchItems = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw Error('Did not receive expected data');
          const listItems = await response.json();
          setUsers(listItems);
          setFetchError(null);
        } catch (err) {
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
  
      setTimeout(() => fetchItems(), 2000);
  
    }, [])



    return (
      <div className="App">

        <Users data={users} onClick={setUsers} />
        <Posts data={posts} />
        <Comments data={comments} />

      </div>
    );
  }

export default App;


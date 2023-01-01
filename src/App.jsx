import { useState, useEffect } from 'react'
import Form from './Form'

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users')
  const [items, setitems] = useState([])

  useEffect(() => {

    async function fetchItems()  {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        console.log(data);
        setitems(data)
      }
      catch (err) {
        console.log(err);
      }
    }

    fetchItems()

  }, [reqType])

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <List items={items}/>
    </div>
  );
}

export default App;
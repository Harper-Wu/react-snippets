import React, {useState} from 'react';

export default function FetchData() {

  const [data, setData] = useState()
  const url = "https://reqres.in/api/users";

  function Post() {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'John'
      })
    })
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log(err));
  }

  function Fetch() {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json.data))
      .catch(err => console.log(err));
  }

  return (
    <div className="content">
      <div className="fetch">
        <h1>Let's Fetch Some Data</h1>
        <button onClick={Fetch}>Fetch User</button>
        <button onClick={Post}>New User</button>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  )
}
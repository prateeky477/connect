import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [fetchedName, setfetchedName] = useState([])

  useEffect(() => {
    const handleLoad = async () => {
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
      }
      let response1 = await fetch("http://localhost:3000/", {
        method: "GET",
        headers: headersList
      });
      let data1 = await response1.json();

      console.log(data1.msg);
      setfetchedName(data1.msg)
      console.log(fetchedName, "gyhjg");
    }
    handleLoad()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
    const response = await fetch('http://localhost:3000/', {
      method: "POST",
      headers: headersList,
      body: JSON.stringify({
        name: name
      })
    })

    // console.log(response)
    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      {fetchedName.map((nam, index) => (
        <form key={index} onSubmit={handleSubmit}>
          <input type="text" placeholder='enter' value={nam} onChange={(e) => { setName(e.target.value) }}></input>
          <button type="submit">Submit</button>
        </form>
      ))}
    </>
  )
}

export default App
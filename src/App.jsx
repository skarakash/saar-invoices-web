import { useState, useEffect } from 'react'
import { apiUrl } from './config/config'

const getData = async () => {
  try {
    const res = await fetch(`${apiUrl}/get`);
    return await res.json()
  } catch (err) {
    console.log(err)
  }
}

function App() {
  const [data, setData] = useState([])

  useEffect(  () => {
    getData().then(res => {
      setData(res)
    })
  }, [])

  return (
        <>
          {data.length > 0 ?
            JSON.stringify(data, null, 2): null
          }
        </>
  )
}

export default App

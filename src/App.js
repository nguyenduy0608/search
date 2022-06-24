import { useEffect, useState } from "react";

export default function App() {

  const people = [
    {
      id: 1,
      name: 'huy'
    },
    {
      id: 2,
      name: 'hai'
    },
    {
      id: 3,
      name: 'mai'
    },
    {
      id: 4,
      name: 'hoang'
    }
  ]

  
  const [searchKey, setSearchKey] = useState('')
  const [listPeople, setListPeople] = useState(people)
  const handleChange = e => setSearchKey(e.target.value)

  const onSearch = (arr, keyword) => {
    const matchedArr = arr.filter( ele =>  ele.name.toLowerCase().includes(keyword.toLowerCase())
  )
    setListPeople(matchedArr)
  }

  useEffect(() => {
    onSearch(people, searchKey)
  }, [searchKey])


  return (
    <div className="App" style = {{padding : '30px'}} >
      <input type="text" onChange={handleChange} />
      <h1>List people: </h1>
      {listPeople.map(persone => (
        <p>{persone.name}</p>
      ))}
    </div>
  );
}
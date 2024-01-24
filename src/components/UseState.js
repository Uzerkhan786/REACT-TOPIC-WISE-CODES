import { useState } from "react";


export default function UseState() {
   let arr = [1, 2, 3, 4]
   const [newArr, setNewArr] = useState(arr);
   const [filter, setFilter] = useState(arr);
   const [searchText, setSearchText] = useState('');
   const click = () => {

      const filterArray = newArr.filter((val) => {
         return val >= searchText
      })
      console.log(filterArray);
      setFilter(filterArray);
   }

   return (<>
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={click}>search</button>
      {filter.map((val, index) => (
         <h1 key={index}>{val}</h1>
      ))}
   </>)
}
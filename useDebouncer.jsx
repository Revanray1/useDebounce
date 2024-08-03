

import React ,{useState,useEffect}from 'react'
import ReactDOM from 'react-dom'
function useDebouncer(data,delay){
const [debouncerValue,setDebouncerValue] = useState(data)

useEffect(()=>{
const handler = setTimeout(()=>{
  setDebouncerValue(data)
},delay)
return ()=>clearTimeout(handler)
},[data,delay])

return debouncerValue
}
function App() {

  const [value,setValue]=useState("")
  const debouncerFunction = useDebouncer(value,2000)
  
  useEffect(()=>{
if(debouncerFunction) console.log(debouncerFunction)
  },[debouncerFunction])

  const handleDebounce=(values)=>{
    setValue(values)
  }
  return (<>
  
  <input type="text" onChange={(e)=>handleDebounce(e.target.value)}/>
  </>)
}

ReactDOM.render(<App />, document.getElementById('root'))

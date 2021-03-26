import react,{useState} from 'react'

import List from './list'

function Home() {
    const [input,setinput]=useState('')
    const [list,setlist]=useState([])


    const onchange = (e)=>{
        setinput(e.target.value)
    }

    const onAdd = e =>{
        e.preventDefault()
        setlist([...list,input])
    }
  return (
    <div>

      <div>
        <h1 >Ma Todo list</h1>
        <form >
          <input
            value={input}
            type="text"
            placeholder="Renseigner un item"
            onChange={onchange}

          />
          <button onClick={onAdd} >Ajouter </button>
        </form>
        <List list={list} />
        
      </div>



    </div>
  );
}

export default Home;

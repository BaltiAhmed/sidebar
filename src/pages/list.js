import react from 'react'

const List = props =>{
    return (
        <div>
          {props.list.map(item=>
          <h1>{item}</h1>
            )}
        </div>
    )
}

export default List
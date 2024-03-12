import Name from "./Name"

const Person = (props) => {
    console.log(props)
  return (
    <div>
        
        <Name name={props.name}/>
        {/* <p>Hello {props.name}</p> */}
        <img src={props.img}/>
        <br></br>
       <p> color= {props.color} </p>

        {/* <img src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg"
        alt="cat"/> */}

        {/* <p>Renk: Krem</p> */}
    </div>
  )
}

export default Person
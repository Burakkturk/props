import Name from "./Name"

const Cat = ({name, img, color}) => {
   

    // const {name,img,color} = props
  return (
    <div>
        
        <Name name={name}/>
        {/* <p>Hello {props.name}</p> */}
        <img src={img}/>
        <br></br>
       <p> color= {color} </p>

        {/* <img src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg"
        alt="cat"/> */}

        {/* <p>Renk: Krem</p> */}
    </div>
  )
}

export default Cat
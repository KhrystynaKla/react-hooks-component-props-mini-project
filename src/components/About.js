function About ({props}){
    if (!props) {
      return  <aside>
                <img src='https://via.placeholder.com/215'></img>
                <p>{props.about}</p>
              </aside>
    } else{
      return  <aside>
                <img src={props.image}></img>
                <p>{props.about}</p>
              </aside>
  
    } 
  }

  export default About
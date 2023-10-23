import Message from "./Message"
function Article(props){
    const {id, title, date='January 1, 1970', preview, minutes}=props;
    return (
      <article key = {id} className="Articles">
        <h3>{title}</h3>
        <small>{date}</small>
        <Message minutes={minutes}/>
        <p>{preview}</p>
      </article>
    )
  
  }


  export default Article
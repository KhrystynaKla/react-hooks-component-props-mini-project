function Article({post}){
    console.log(post)
    let message;
    if (post.minutes<30){
        let cups=Math.ceil(post.minutes/5)
        for (let i =0; i<cups; i++){
            message += '☕️'; 
        }
    } else {
        let cups=Math.ceil(post.minutes/10)
        for (let i =0; i<cups; i++){
            message += '🍱'; 
        }
    }

    return (
      <article key = {post.id} className="Articles">
        <h3>{post.title}</h3>
        <small>{post.date="January 1, 1970"}</small>
        <p>{message}
        </p>
        <p>{post.preview}</p>
      </article>
    )
  
  }


  export default Article
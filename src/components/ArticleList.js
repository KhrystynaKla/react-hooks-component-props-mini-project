import Article from './Article.js'
function ArticleList({props}){
    console.log(props.posts)
    
    return (
      <main>{
        props.posts.map(post=>{
          console.log(post)
          return <Article key = {post.id} post ={post}/>
        })}
      </main>
    )
  }
  
  

  export default ArticleList
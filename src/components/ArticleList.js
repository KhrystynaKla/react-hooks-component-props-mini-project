import Article from './Article.js'
function ArticleList(props){
    return (
      <main>{
        props.posts.map(post=>{
          return <Article key = {post.id} id ={post.id} title ={post.title} date ={post.date} minutes={post.minutes} preview ={post.preview}/>
        })}
      </main>
    )
  }
  
  

  export default ArticleList
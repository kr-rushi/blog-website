import { IPost } from "@/types"
import { GetServerSidePropsContext } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
const BASE_URL: string = 'https://jsonplaceholder.typicode.com/posts'

type Props={
    data:IPost,
    posts:IPost
}
const BlogPage:React.FC<Props>=({posts,data})=>{
    
return(
    <div className="blog_details">
      
        <Image className="blog_center_image" src={'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt={'blog_image'} width={250} height={200}/>
        
        <h1 className="blog_details_title">{posts.title}</h1>
        <h1 className="blog_details_body">{posts.body}</h1>
    </div>
)
}
export default BlogPage

export async function getServerSideProps(context:GetServerSidePropsContext) {
    
    const blog=context?.params?.blog
    const res = await fetch(BASE_URL+`/${blog}`)
    const posts: {} = await res.json()
    
    return {
      props: {
        posts,
      },
    }
  }

  
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { IPost } from '../types'

type Props = {
  post: IPost
  deletePost: (id: number) => void
}

const Post: React.FC<Props> = ({ post, deletePost }) => {
  return (
     <Link className='blogs-card' key={post.id} href={`/Blogs/${post.id}`} >
      <div className='blog-image'>
        <Image src={'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt={'blog_image'} width={250} height={200}/>
        </div>
        <div>
          <p className='blog-date'>Date: 12/07/2023</p>
        <h1   className='Card--body-title'>{post.title}</h1>
        <p   className='Card--body-text'>{post.body}</p>
        </div>
      </Link>
  )
}

export default Post

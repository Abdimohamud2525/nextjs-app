
import React, { Suspense } from 'react'
import PostList from './PostList'
import PostSkeleton from './PostSkeleton'

export const PostPage = () => {

  return (
    <div>PostPage🤗
      <Suspense fallback={<PostSkeleton/>}>
     <PostList/>
     </Suspense>
    </div>

  )
}
export default PostPage




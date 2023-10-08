// import Image from 'next/image'
import UsersList from './users/UsersList'
import PostList from './posts/PostList'
import { Suspense } from 'react'

export default function Home() {
  return ( 
    <main>

{/* <Suspense fallback={<p>Loading... users✅</p>}>
      <UsersList/>
      </Suspense> */}

      
      <Suspense  fallback={<p>Loading... posts✅</p>}>
      <PostList/>
      </Suspense>
      
    </main>
  )

}  

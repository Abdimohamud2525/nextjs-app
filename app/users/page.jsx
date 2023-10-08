import React from 'react'
import UsersList from './UsersList'
import PostList from '../posts/PostList'

const page = () => {
  return (
    <div>
        <UsersList/>
        <PostList/>
    </div>
  )
}

export default page
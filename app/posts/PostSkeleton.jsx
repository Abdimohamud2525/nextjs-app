import React from 'react'

const PostSkeleton = () => {
  return (
   <div className='space-y-4'>

      <div className='h-4 w-full spinner bg-slate-400 p-2 animate-pulse py'></div>
      <div className='h-4 w-full spinner bg-slate-400 p-2 animate-pulse py'></div>
      <div className='h-4 w-full spinner bg-slate-400 p-2 animate-pulse py'></div>
      <div className='h-4 w-full spinner bg-slate-400 p-2 animate-pulse py'></div>
      <div className='h-4 w-full spinner bg-slate-400 p-2 animate-pulse py'></div>
      <div className='h-4 w-full spinner bg-slate-400 p-2 animate-pulse py'></div>
      <div className='h-4 w-full spinner bg-slate-400 p-2 animate-pulse py'></div>
      <div className='h-4 w-full spinner bg-slate-400 p-2 animate-pulse py'></div>
   </div>
  )
}

export default PostSkeleton
import React from 'react'

const Post = props => {
  return (
    <div>
        <div>

            <img className='thumbnail' alt="thumbnail" src={props.thumbnailUrl} />
            
            <h1>{props.username}</h1>

        </div>
            <img src={props.imageUrl} alt="thumbnail" />
    </div>
  )
}

export default Post
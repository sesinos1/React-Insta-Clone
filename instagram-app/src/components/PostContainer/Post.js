import React from 'react'
import CommentSection from '../CommentSection/CommentSectionContainer';

const Post = props => {
  return (
    <div>
        <div>
            <div>

                    <img className='thumbnail' alt="thumbnail" src={props.thumbnailUrl} />

                    <h1>{props.username}</h1>

            </div>
                    <img src={props.imageUrl} alt="thumbnail" />

                    
        </div>
            <CommentSection commments={props.commments} />
        <div>
        
        </div>

    </div>
  )
}

export default Post
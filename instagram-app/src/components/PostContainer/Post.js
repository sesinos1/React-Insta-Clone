import React from 'react'
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection'

const Post = props => {
  return (
    <div>
        <div>
            <div>

                    <img className='thumbnail' alt="thumbnail" src={props.thumbnailUrl} />

                    <h1>{props.username}</h1>

            </div>
                    <img src={props.imageUrl} alt="thumbnail" />
                    <LikeSection likes={props.likes}/>
                   
                    
        </div>
            <CommentSection comments={props.comments} />
            <p>{props.timestamp}</p>

            
            
        <div>
        
        </div>

    </div>
  )
}

export default Post
import React from 'react';

import Post from './Post';

const PostContainer = props => {
    return (
        <div>
            {props.profiles.map((props) => (
            <Post thumbnailUrl={props.thumbnailUrl}
            username={props.username}
            imageUrl={props.imageUrl}
            comments={props.comments}/>
            ))}

        </div>
    )
}

export default PostContainer;
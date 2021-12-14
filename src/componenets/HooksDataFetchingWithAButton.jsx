import React, { useState, useEffect } from "react";

function HooksDataFetchingWithAButton() {
    const [post, setPost] = useState([])
    const [postID, setPostID] = useState(1)
    const [postIdFromClick, setPostIdFromClick] = useState(1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postIdFromClick}`)
            .then(response => {
                // console.log("response", response);
                return response.json()
            })
            .then(data => {
                // console.log(data);
                setPost(data)
            })
    }, [postIdFromClick])


    return (
        <div>
            <input type="text" value={postID} onChange={e => setPostID(e.target.value)} />
            <button type="button" onClick={() => { setPostIdFromClick(postID) }}>Fetch post</button>
            <ul>
                <li key={post.id}>{post.title}</li>
            </ul>
        </div>
    )
}

export default HooksDataFetchingWithAButton;
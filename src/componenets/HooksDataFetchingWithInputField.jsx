import React, { useState, useEffect } from "react";

function HooksDataFetchingWithInputField() {
    const [post, setPost] = useState([])
    const [postID, setPostID] = useState(1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then(response => {
                // console.log("response", response);
                return response.json()
            })
            .then(data => {
                // console.log(data);
                setPost(data)
            })
    }, [postID])


    return (
        <div>
            <input type="text" value={postID} onChange={e => setPostID(e.target.value)} />
            <ul>
                <li key={post.id}>{post.title}</li>
            </ul>
        </div>
    )
}

export default HooksDataFetchingWithInputField;
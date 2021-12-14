import React, { useState, useEffect } from "react";

function HooksDataFetching() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                // console.log("response", response);
                return response.json()
            })
            .then(data => {
                // console.log(data);
                setPosts(data)
            })
    }, []) // empty dependency list
    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default HooksDataFetching;
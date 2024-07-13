// This makes LikeButton a Client Component — something rendered on the client, not the server.
'use client'

import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
      }
      
    return <button onClick={handleClick}>Like ({likes})</button>
      
}
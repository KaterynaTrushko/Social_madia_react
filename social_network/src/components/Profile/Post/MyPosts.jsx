import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";


const MyPosts = () => {
  return (
    
      <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      <Post message= "Hello! How are you?" count = "2" />
      <Post message= "I am ok!" count = "5"/>
      <Post message= "Ii is my first post!" count = "8" />
    </div>
  )
}


export default MyPosts;
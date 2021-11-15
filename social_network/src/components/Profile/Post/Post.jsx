import React from "react";
import s from "./Post.module.css";
 

const Post = (props) => {
  return (
    <div className = {s.item}>
      <img src="https://tulatrud.ru/wp-content/uploads/modnye-avatarki-dlya-vk_0.jpg" alt="" />
      {props.message}
      <div>
        <span>like {props.count} </span>
      </div>
    </div>
  )
}

export default Post;




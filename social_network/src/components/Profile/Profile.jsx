import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./Post/MyPosts"

const Profile = () => {
  return (

    <div className={s.content}>
      <div>
        <img src="https://media.istockphoto.com/photos/tropical-paradise-landscape-picture-id1033545162?k=20&m=1033545162&s=612x612&w=0&h=ZNemh8RD7XCM7sWrS7NXt-849G4uWON2631eSKQPWMk=" alt="" />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
   
  )
}

export default Profile;
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';


const MyPosts = (props) => {

    
    let PostsElements = props.posts.map( post => <Post massage={post.massage} likes={post.likes} key={post.id}/> );


    let onAddPost = (values) =>{
        props.addPost (values.newPostText);
    }

    return (
        <div className={s.postBlock}> 
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                   {PostsElements}
                </div>
            </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
              <div>
                    <Field component={"textarea"} name={"newPostText"}  />
                </div>
                <div>
                    <button>Add post</button>
                </div>    
          </form>
          )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);



export default MyPosts;
import { useState } from "react"
import { useDispatch } from "react-redux"
import { postAdded } from "./postsSlice.js"

export default function AddPostForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onSavePostClicked = () =>{
        if(title && content){
            dispatch(
                postAdded(title, content)
            )
            setTitle('')
            setContent('')
        }
    }

    return (
        <div className="container border w-75 mt-4">
            <h2>Add New Post</h2>
            <div className="form-group my-2">
                <label htmlFor="postTitle">Post Title</label>
                <input
                    className="form-control"
                    type="text"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />
            </div>
            <div className="form-group my-2">
                <label htmlFor="postContent">Post Content</label>
                <input
                    className="form-control"
                    type="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />
            </div>
            <div className="form-group row my-2">
                <div className="col-sm-10">
                    <button
                        type="button"
                        onClick={onSavePostClicked}
                        // disabled={!canSave}
                    >
                        Save Post
                    </button>
                </div>
            </div>
        </div>
    );
}

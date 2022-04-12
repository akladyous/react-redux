import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const [addRequestStatus, setAddRequestStatus] = useState("idle");

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const canSave =
        [title, content, userId].every(Boolean) && addRequestStatus === "idle";

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus("pending");
                dispatch(addNewPost({ title, body: content, userId })).unwrap();

                setTitle("");
                setContent("");
                setUserId("");
            } catch (err) {
                console.error("Failed to save the post", err);
            } finally {
                setAddRequestStatus("idle");
            }
        }
    };

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <div className="container border w-75 mt-4">
            <h2>Add a New Post</h2>
            <form>
                <div className="form-group my-2">
                    <label htmlFor="postTitle">Post Title:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="postAuthor">Author:</label>
                    <select
                        class="form-select"
                        aria-label="Default select example"
                        value={userId}
                        onChange={onAuthorChanged}
                    >
                        <option value=""></option>
                        {usersOptions}
                    </select>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="postContent">Content:</label>
                    <textarea
                        className="form-control"
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                    />
                </div>
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </div>
    );
};
export default AddPostForm;
// import Counter from "./features/counter/Counter.js";
import PostsList from "./features/posts/PostsList.js";
import AddPostForm from "./features/posts/AddPostForm.js";

function App() {
    return (
        <div className="App">
            <AddPostForm />
            <PostsList />
            {/* <Counter /> */}
        </div>
    );
}

export default App;

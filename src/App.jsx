import { useState } from "react";
import "./App.css";
import {
  useGetPostsQuery,
  useCreatePostsMutation,
} from "./services/jsonPlaceholderApi";

function App() {
  const [newPost, setNewPost] = useState({ title: "", body: "", id: 99999 });

  const { data, error, isLoading, refetch } = useGetPostsQuery();
  const [createPost, { isLoading: isCreating, error: createError }] =
    useCreatePostsMutation();

  if (isLoading) return <p> Loading...</p>;

  if (createError) return <p> There was an error creating a post</p>;

  if (error) return <p> There was an error :(</p>;

  const handleCreatePost = async () => {
    await createPost(newPost);
    refetch();
  };

  return (
    <>
      <h1> Leave A Like :) </h1>

      <div>
        <input
          type="text"
          placeholder="Title..."
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Body..."
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <button onClick={handleCreatePost} disabled={isCreating}>
          {" "}
          Create Post{" "}
        </button>
      </div>

      <div>
        {data?.map((post) => (
          <p> {post.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;

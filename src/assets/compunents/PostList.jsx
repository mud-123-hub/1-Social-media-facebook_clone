import { useContext } from "react";
import Home from "./home";
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMassage from "./welcomeMassage";


const PostList = () => {

    const { postList, addInitialPosts } = useContext(PostListData);

    const HandleGetPostBtn = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts)
            });
    }

    return (
        <>
            {
                postList.length === 0 ? (<WelcomeMassage HandleGetPostBtn={HandleGetPostBtn} />) : (<div className="postListContainer">
                    {postList.map((post) => <Home key={post.id} post={post} />)}
                </div>)
            }
        </>
    );
};

export default PostList;
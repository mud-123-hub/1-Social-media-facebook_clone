import { useContext, useEffect, useState } from "react";
import Home from "./home";
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMassage from "./welcomeMassage";
import LodingSpiner from "./loadingSpiner";


const PostList = () => {

    const { postList, addInitialPosts } = useContext(PostListData);
    const [feching, setFeching] = useState(false)


    useEffect(() => {
        setFeching(true)
        fetch("https://dummyjson.com/posts")
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
                setFeching(false)
            });
    }, []);

    return (
        <>
            {feching && <LodingSpiner />}
            {!feching && postList.length === 0 ? (<WelcomeMassage />) : (<div className="postListContainer">
                {!feching && postList.map((post) => <Home key={post.id} post={post} />)}
            </div>)}
        </>
    );
};

export default PostList;
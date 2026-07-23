import { useContext } from "react";
import Home from "./home";
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMassage from "./welcomeMassage";




const PostList = () => {

    const { postList } = useContext(PostListData);
    return (
        <>

            {
                postList.length === 0 ? (<WelcomeMassage />) : (<div className="postListContainer">
                    {postList.map((post) => <Home key={post.id} post={post} />)}
                </div>)
            }
        </>
    );
};

export default PostList;
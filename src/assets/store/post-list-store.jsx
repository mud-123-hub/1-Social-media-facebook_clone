import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    addInitialPosts: () => { },
    deletePost: () => { },
});

const postListReducer = (curentPostList, action) => {
    let newPostList = curentPostList;

    if (action.type === 'DELETE_POST') {
        newPostList = curentPostList.filter((post) => post.id !== action.payload.postId)
    } else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...curentPostList]
    }

    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispachPostList] = useReducer(postListReducer, []);

    const addPost = (userId, tages, postTitale, postContant, postReactions) => {
        dispachPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                profileNmae: userId,
                tags: tages,
                profileImage: 'https://i.pravatar.cc/60?img=2',
                title: postTitale,
                body: postContant,
                reaction: postReactions,
            }
        })
    };

    const addInitialPosts = (posts) => {
        dispachPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: {
                posts
            }
        })
    };

    const deletePost = (postId) => {
        dispachPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        });
    };

    return (
        <PostList.Provider value={{
            postList,
            addPost,
            addInitialPosts,
            deletePost,
        }}>
            {children}
        </PostList.Provider >
    )
};


export default PostListProvider;


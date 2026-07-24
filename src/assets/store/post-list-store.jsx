import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});


const postListReducer = (curentPostList, action) => {
    let newPostList = curentPostList;

    if (action.type === 'DELETE_POST') {
        newPostList = curentPostList.filter((post) => post.id !== action.payload.postId)
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...curentPostList]
    }


    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispachPostList] = useReducer(postListReducer, DEFULT_VALUE);

    const addPost = (userId, tages, postTitale, postContant, postReactions) => {
        dispachPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                profileNmae: userId,
                hashTag: tages,
                profileImage: 'https://i.pravatar.cc/60?img=2',
                tital: postTitale,
                body: postContant,
                reaction: postReactions,
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
            deletePost,
        }}>
            {children}
        </PostList.Provider >
    )
};

const DEFULT_VALUE = []

export default PostListProvider;


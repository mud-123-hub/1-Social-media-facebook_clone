import { useContext, useRef } from "react";
import { PostList } from '../store/post-list-store'
import { SiSymantec } from "react-icons/si";

const CreatePost = () => {

    const { addPost } = useContext(PostList);

    const userIdElement = useRef();
    const tagesElement = useRef();
    const postTitaleElement = useRef();
    const postContantElement = useRef();
    const postReactionElement = useRef();


    const handleCreatePost = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const tages = tagesElement.current.value.split(' ');
        const postTitale = postTitaleElement.current.value;
        const postContant = postContantElement.current.value;
        const postReactions = postReactionElement.current.value;

        userIdElement.current.value = '';
        tagesElement.current.value = '';
        postTitaleElement.current.value = '';
        postContantElement.current.value = '';
        postReactionElement.current.value = '';

        addPost(userId, tages, postTitale, postContant, postReactions)

        const notification = document.querySelector('#alerte');
        setTimeout(() => {
            if (notification) {
                notification.style.display = "block";

                setTimeout(() => {
                    notification.style.display = "none";
                }, 2000);
            }
        }, 300)
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white">
                                <h3 className="mb-0">Create New Post</h3>
                            </div>

                            <div className="card-body">
                                <form>
                                    <div className="mb-3" id="userIdElement" >
                                        <label className="form-label">User Name</label>
                                        <input ref={userIdElement}
                                            type="text"
                                            className="form-control"
                                            placeholder="User-123"
                                        />
                                    </div>

                                    <div className="mb-3" id="tagesElement" >
                                        <label className="form-label">Tags</label>
                                        <input
                                            ref={tagesElement}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter #Tages using Space"
                                        />
                                    </div>

                                    <div className="mb-3" id="postTitaleElement" >
                                        <label className="form-label">Post Title</label>
                                        <input
                                            ref={postTitaleElement}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter post title"
                                        />
                                    </div>
                                    <div className="mb-3" id="postContantElement" >
                                        <label className="form-label">Post Content</label>
                                        <textarea
                                            ref={postContantElement}
                                            className="form-control"
                                            rows="5"
                                            placeholder="What's on your mind?"
                                        ></textarea>
                                    </div>

                                    <div className="mb-3" id="postReaction" >
                                        <label className="form-label">Reactions</label>
                                        <input
                                            ref={postReactionElement}
                                            type="number"
                                            className="form-control"
                                            placeholder="0"
                                        />
                                    </div>
                                    <button
                                        onClick={handleCreatePost}
                                        type="button"
                                        className="btn btn-primary w-100"
                                    >
                                        Create Post
                                    </button>
                                </form>

                                <div
                                    id="alerte"
                                    className="alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3 "
                                    style={{ display: "none", zIndex: 9999 }}
                                >
                                    <SiSymantec style={{ fontSize: '30px', color: 'green' }} />  Post Created Successfully!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CreatePost;
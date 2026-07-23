import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { PostList } from "../store/post-list-store";




const Home = ({ post }) => {

    const { deletePost } = useContext(PostList)

    return (
        <>


            <div className="container mt-4">
                <div className="card shadow-sm border-0 rounded-4 mb-4">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    src={post.profileImage}
                                    className="rounded-circle me-3"
                                    alt="Profile"
                                />
                                <div>
                                    <h5 className="mb-0">{post.profileNmae}</h5>
                                    <small className="text-muted">
                                        2 Sec Ago • 🌍 Public
                                    </small>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button
                                    className="btn btn-light"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    ⋮
                                </button>

                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <button className="dropdown-item">
                                            <MdModeEditOutline />Edit Post
                                        </button>
                                    </li>

                                    <li>
                                        <button className="dropdown-item">
                                            <MdOutlineSaveAlt /> Save
                                        </button>
                                    </li>

                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>

                                    <li>
                                        <button
                                            className="dropdown-item text-danger"
                                            onClick={() => deletePost(post.id)} >
                                            <MdDelete /> Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />

                        <div className="mt-2">
                            {post.hashTag.map((tag, index) => <button type="button" className={`btn btn-primary ${index > 1 ? "ms-2" : ''}`} key={index}>
                                #{tag}
                            </button>)}
                        </div>

                        <hr />
                        <div className="mt-3">
                            <h4 className="postTital">{post.tital}</h4>
                            <p className="fs-5">
                                {post.body}
                            </p>
                            <hr />
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <span className="badge text-bg-success fs-6">
                                {`${post.reaction} Reactions`}
                            </span>
                        </div>
                        <hr />
                        <div className="row text-center">
                            <div className="col">
                                <button className="btn btn-light w-100">
                                    👍 Like
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-light w-100">
                                    💬 Comment
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-light w-100">
                                    🔄 Share
                                </button>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <img
                                src="https://i.pravatar.cc/45"
                                className="rounded-circle me-2"
                                alt=""
                            />
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="Write a comment..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
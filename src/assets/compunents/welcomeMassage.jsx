import { FaShareAlt } from "react-icons/fa";
import { FaPrayingHands } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
const WelcomeMassage = () => {
    return (
        <>
            <div
                className="container-fluid d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh", background: "#f8f9fa" }}
            >
                <div className="row justify-content-center w-100">
                    <div className="col-lg-7 col-xl-6">
                        <div className="card border-0 shadow rounded-4">
                            <div className="card-body text-center p-4">
                                <div
                                    className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{ width: "80px", height: "80px" }}
                                >
                                    <span style={{ fontSize: "40px", color: 'red', alignContent: 'center', textAlign: 'center', display: 'flex' }}><FaShareAlt /></span>
                                </div>
                                <h2 className="fw-bold mb-3">
                                    Welcome to Your Feed
                                </h2>
                                <p className="text-muted mb-4" style={{ fontSize: "16px" }}>
                                    Your feed is empty at the moment.
                                    Start sharing your thoughts, ideas, achievements,
                                    and memorable moments with your community.
                                    Every great conversation begins with a single post.
                                </p>
                                <hr />
                                <div className="row mt-4">
                                    <div className="col-md-4 mb-3">
                                        <div className="fs-2"><FaShareAlt style={{ color: 'blue' }} /></div>
                                        <h6 className="fw-bold mt-2">
                                            Share
                                        </h6>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="fs-2"><FaPrayingHands style={{ color: 'blue' }} /></div>
                                        <h6 className="fw-bold mt-2">
                                            Connect
                                        </h6>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="fs-2"><FaPlaneDeparture style={{ color: 'blue' }} /></div>
                                        <h6 className="fw-bold mt-2">
                                            Inspire
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelcomeMassage;
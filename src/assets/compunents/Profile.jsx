

const Profile = () => {
    return (
        <>
            <div className="container py-4">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 text-center border-end">
                                <img
                                    src="https://i.pravatar.cc/200"
                                    alt="Profile"
                                    className="rounded-circle img-fluid border border-3 border-primary"
                                    style={{ width: "170px", height: "170px" }}
                                />
                                <h3 className="mt-3">Muddasir Ahmad</h3>
                                <p className="text-muted">
                                    Frontend React Developer
                                </p>
                                <button className="btn btn-primary mt-2">
                                    Edit Profile
                                </button>
                            </div>
                            <div className="col-lg-8 mt-4 mt-lg-0">
                                <h3 className="mb-4">Profile Information</h3>
                                <div className="row mb-3">
                                    <div className="col-md-4 fw-bold">Full Name</div>
                                    <div className="col-md-8">Muddasir Ahmad</div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4 fw-bold">Email</div>
                                    <div className="col-md-8">muddasir@gmail.com</div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4 fw-bold">Phone</div>
                                    <div className="col-md-8">0348-9095124</div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4 fw-bold">Location</div>
                                    <div className="col-md-8">Dera Ismail Khan, Pakistan</div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4 fw-bold">Bio</div>
                                    <div className="col-md-8">
                                        Passionate React Developer. Learning Full Stack Development and building social media apps.
                                    </div>
                                </div>
                                <hr />
                                <div className="row text-center">
                                    <div className="col-4">
                                        <h4>25</h4>
                                        <p className="text-muted">Posts</p>
                                    </div>
                                    <div className="col-4">
                                        <h4>1.2K</h4>
                                        <p className="text-muted">Followers</p>
                                    </div>
                                    <div className="col-4">
                                        <h4>650</h4>
                                        <p className="text-muted">Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;

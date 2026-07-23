import { CgProfile } from "react-icons/cg";
import { ImHome2 } from "react-icons/im";
import { MdPostAdd } from "react-icons/md";
import { SiTheregister } from "react-icons/si";



const Sidebar = ({ selectedTabe, setSelectedTab }) => {

    return (
        <>
            <div className="bg-dark text-white sidebar">
                <div className="text-center border-bottom profileMain">
                    <img
                        src="https://i.pravatar.cc/60"
                        className="rounded-circle me-3 profileImage"
                        alt="Profile"
                    />
                    <h4 className="profileHadding">Friends</h4>
                </div>

                <ul className="nav flex-column mt-3">

                    <li
                        className={`nav-item ${selectedTabe === "Profile" ? "active" : ""}`}
                        onClick={() => setSelectedTab("Profile")}
                    >
                        <a href="#" className="nav-link text-white">
                            <CgProfile className='profileIcon' /> Profile
                        </a>
                    </li>
                    <li className={`nav-item ${selectedTabe === 'Home' && "active"}`} onClick={() => setSelectedTab('Home')}>
                        <a href="#" className="nav-link text-white active-link">
                            <ImHome2 className='homeIcon' /> Home
                        </a>
                    </li>
                    <li className={`nav-item ${selectedTabe === 'Create Post' && "active"}`} onClick={() => setSelectedTab('Create Post')}>
                        <a href="#" className="nav-link text-white">
                            <MdPostAdd className='postIcon' /> Create Post
                        </a>
                    </li>
                    <li
                        className={`nav-item ${selectedTabe === 'Register' ? 'active' : ''}`}
                        onClick={() => setSelectedTab('Register')}
                    >
                        <a href="#" className="nav-link text-white">
                            <SiTheregister className="registerIcon" /> Register
                        </a>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Sidebar;
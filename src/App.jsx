import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './assets/compunents/fotter';
import Sidebar from './assets/compunents/sidebar';
import Register from './assets/compunents/registerForm';
import Container from './assets/compunents/conatiner';
import CreatePost from './assets/compunents/createPost';
import { useState } from 'react';
import PostList from './assets/compunents/PostList';
import Profile from './assets/compunents/Profile';
import PostListProvider from './assets/store/post-list-store';



function App() {

  const [selectedTabe, setSelectedTab] = useState('Home');

  return (
    <>
      <PostListProvider>
        <div className="main">
          <Sidebar selectedTabe={selectedTabe} setSelectedTab={setSelectedTab}></Sidebar>
          <div className="contant">
            {selectedTabe === 'Home' && (<PostList></PostList>)}
            {selectedTabe === 'Create Post' && (<CreatePost />)}
            {selectedTabe === 'Register' && (<Container>
              <Register></Register>
            </Container>)}
            {selectedTabe === 'Profile' && <Profile></Profile>}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  )
}

export default App

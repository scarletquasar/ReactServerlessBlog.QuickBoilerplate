import React from "react";
import PostsContainer from "../../components/PostsContainer/PostsContainer.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";

function Home() {
    return (
        <React.Fragment>
            <main>
                <SideBar />
                <PostsContainer />
            </main>
        </React.Fragment>
    );
}

export default Home;
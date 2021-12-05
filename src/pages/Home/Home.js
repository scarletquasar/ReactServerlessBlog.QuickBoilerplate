import React from "react";
import PostsContainer from "../../components/PostsContainer/PostsContainer.js";
import SideBar from "../../components/SideBar/SideBar.js";

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
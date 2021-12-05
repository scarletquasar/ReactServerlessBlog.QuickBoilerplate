import React from "react";
import PostsContainer from "../../components/PostsContainer/PostsContainer.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import { useParams } from "react-router-dom";

function Home() {
    const { query } = useParams();

    return (
        <React.Fragment>
            <main>
                <SideBar />
                {query && <PostsContainer query={query} />}
                {!query && <PostsContainer />}
            </main>
        </React.Fragment>
    );
}

export default Home;
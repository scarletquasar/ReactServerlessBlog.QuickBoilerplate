import { useParams } from "react-router-dom";
import { PostsContainer } from "../../components/PostsContainer/PostsContainer";
import SideBar from "../../components/SideBar/SideBar";

function Home() {
    const { query } = useParams();

    return (
        <>
            <main>
                <SideBar />
                {query && <PostsContainer query={query} />}
                {!query && <PostsContainer />}
            </main>
        </>
    );
}

export default Home;
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data, isLoading, errMessage } = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }


    return (
        <div className="home">
            { errMessage && <div>{errMessage}</div> }
            {isLoading && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="All blogs!" />}
        </div>
    );
}
 
export default Home
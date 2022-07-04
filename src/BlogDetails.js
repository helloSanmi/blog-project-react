import {useParams, useNavigate} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

    const { id } = useParams();

    const { data: blog, errMessage, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`);

    const navigate = useNavigate()

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }


    return (
        <div className="blog-details">
            { isLoading && <div>Loading...</div>}
            { errMessage && <div>{errMessage}</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;
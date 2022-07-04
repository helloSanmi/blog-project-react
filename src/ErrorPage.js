import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page does not exist</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    );
}
 
export default ErrorPage;
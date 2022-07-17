import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./usefetch";

const Details = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2><span style={{float: "left", opacity: "0.5"}}>{blog.date}</span>
                    <br />
                    <p>Written by { blog.author }</p>
                    <div> { blog.body }</div>
                    <button onClick={handleClick}>Delete Report</button>
                </article>
            )}
        </div>
    );
}
 
export default Details;
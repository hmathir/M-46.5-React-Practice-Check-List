
const Blog = (props) => {
    return (
        <div>
            <hr />
            <h1>Hi From {props.author}, This is {props.heading}</h1>
            <hr />
        </div>
    );
};

export default Blog;
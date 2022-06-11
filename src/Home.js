import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    // var num1 = 0;
    // const [num, setNum] = useState(0);
    // const handleClick = () => {
    //     console.log("Hello Tonyo, Welcome");
    // }
    // const handleClick2 = (name, e) =>{
    //     console.log("How are you "+name, e.target);
    // }
    // const increment = () => {
    //     num1 += 1;
    //     console.log(num1)
    //     setNum(num1)
    // }
    const [blogs, setBlogs] = useState([
        { title: "My New Website", body: "lorem ipsum...", author: "Tonyo", id: 1},
        { title: "Welcome party!", body: "lorem ipsum...", author: "Michael", id: 2},
        { title: "More web dev tips", body: "lorem ipsum...", author: "Aaron", id: 3}
    ]);

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blogs => blogs.id !== id);
        setBlogs(newBlogs);

    }
    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <button onClick = {handleClick}>Click Me</button>  
            <button onClick = { (e) => handleClick2('Joshua', e)}>Click Me Too</button>
            <button onClick = {increment}>Increment</button> 
            <p>{num1}</p> */}
         <BlogList blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>
         <BlogList blogs = {blogs.filter((blog) => blog.author === "Tonyo")} title = "Tonyo's Blog"/>
        </div>
     );
}
 
export default Home;
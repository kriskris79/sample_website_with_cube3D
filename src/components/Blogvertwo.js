


import {useEffect} from "react";
import Axios from 'axios'


//fake API for testing https://jsonplaceholder.typicode.com/ you can use fetch but axios is better more secure


function Blogvertwo() {

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => console.log(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <div className="blog-container">
           <h1> test for using axios  </h1>



        </div>
    );
}

export  default Blogvertwo;

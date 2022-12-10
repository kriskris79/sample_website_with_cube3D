


import {useEffect, useState} from "react";
import Axios from 'axios'


//fake API for testing https://jsonplaceholder.typicode.com/ you can use fetch but axios is better more secure


function Blogvertwo() {

    //hooks
const [data, setDate] = useState([])
// sample address of api https://jsonplaceholder.typicode.com/posts/

    useEffect(() => {
        Axios.get('https://krislens.com/wp-json/wp/v2/categories/14')
            .then(res => {
                console.log("Getting form data ::::", res.data)
                setDate(res.data) //for hooks

            }).catch(err => console.log('Error getting all data from API', err))
    }, [])


    //for rendering
    const arr = data.map((data, index) => {
    return (

        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.link}</td>
        </tr>

    )
    })

    return (
        <div className="blog-container">
           <h1> T  </h1>

            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Link</th>
                </tr>
                {arr}

                </tbody>
            </table>

        </div>
    );
}

export  default Blogvertwo;

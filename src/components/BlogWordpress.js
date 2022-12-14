
import Table from 'react-bootstrap/Table';


import {useEffect, useState} from "react";
import parse from 'html-react-parser';
import Axios from 'axios'


//fake API for testing https://jsonplaceholder.typicode.com/ you can use fetch but axios is better more secure ect


function BlogWordpress() {

    //hooks
const [data, setDate] = useState([])
// sample address of api https://krislens.com/wp-json/wp/v2/posts?per_page=60

    useEffect(() => {
        fetch('https://krislens.com/wp-json/wp/v2/posts?per_page=60')
            .then(res => res.json())
            .then(res => setDate(res))
            .catch(err => console.log('Error getting all data from API ::::', err))
    }, [])



    return (
        <div className="blog-container-two">
           {/*<h1> T  </h1>*/}

            {/*<table>*/}
                <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    {/*<th>ID</th>*/}
                    <th>Name</th>
                    <th>Link</th>
                </tr>
                {
                    data.map((data, index) => {
                        return (

                            <tr key={data.id}>
                                {/*<td>{data.id}</td>*/}
                                <td>{data.title.rendered}</td>
                                <td>
                                    <a href={data.link} alt={data.title.rendered}>
                                        {data.title.rendered}
                                    </a>
                                </td>
                                {/*<td>{parse(data.content.rendered)}</td>*/}
                            </tr>

                        )
                    })
                }

                </tbody>
            {/*</table>*/}
        </Table>
        </div>
    );
}

export  default BlogWordpress;




//wersja dzialajaca
// import {useEffect, useState} from "react";
// import parse from 'html-react-parser';
// import Axios from 'axios'
//
//
// //fake API for testing https://jsonplaceholder.typicode.com/ you can use fetch but axios is better more secure ect
//
//
// function BlogWordpress() {
//
//     //hooks
//     const [data, setDate] = useState([])
// // sample address of api https://krislens.com/wp-json/wp/v2/posts  https://jsonplaceholder.typicode.com/posts/
//
//     useEffect(() => {
//         fetch('https://krislens.com/wp-json/wp/v2/posts')
//             .then(res => res.json())
//             .then(res => setDate(res))
//             .catch(err => console.log('Error getting all data from API ::::', err))
//     }, [])
//
//
//
//     return (
//         <div className="blog-container">
//             <h1> T  </h1>
//
//             <table>
//                 <tbody>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Link</th>
//                 </tr>
//                 {
//                     data.map((data, index) => {
//                         return (
//
//                             <tr key={data.id}>
//                                 <td>{data.id}</td>
//                                 <td>{data.title.rendered}</td>
//                                 <td>
//                                     <a href={data.link} alt={data.title.rendered}>
//                                         {data.title.rendered}
//                                     </a>
//                                 </td>
//                                 {/*<td>{parse(data.content.rendered)}</td>*/}
//                             </tr>
//
//                         )
//                     })
//                 }
//
//                 </tbody>
//             </table>
//
//         </div>
//     );
// }
//
// export  default BlogWordpress;

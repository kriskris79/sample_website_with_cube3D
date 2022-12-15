


import React, {useState} from "react";
// import {Axios} from "axios";


function JokeGen() {
    const [joke, setJoke] = useState("");
    const getJoke = () => {

        fetch("https://official-joke-api.appspot.com/random_joke").then(
            (response)=> response.json())
            .then((data) => {
                setJoke(data.setup + "..." + data.punchline);   //questions and answers
            });
    };
    return (
        <div className="blog-container" id="joke">
            Hi There !  <button className="button-style2 " onClick={getJoke}> Get a joke  </button>
            {joke}
        </div>
    );
}

export  default JokeGen;



//why with Axios  is not working
// import React, {useState} from "react";
// import {Axios} from "axios";
//
//
// function JokeGen() {
//     const [joke, setJoke] = useState("");
//     const getJoke = () => {
// // why its happens ?
//         Axios.get("https://official-joke-api.appspot.com/random_joke").then(
//             (response)=> {
//                 console.log(response);
//                 setJoke(response.data.setup + "..." + response.data.punchline);   //question and answer
//             }
//         );
//     };
//     return (
//         <div className="blog-container">
//             Hi There !  <button className="button-style2 " onClick={getJoke}> Get a joke  </button>
//             {joke}
//         </div>
//     );
// }
//
// export  default JokeGen;

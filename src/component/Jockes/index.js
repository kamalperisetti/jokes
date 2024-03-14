import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const JokesPage = () => {
    const [jokesData, setJokes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTheJokes();
    }, []);

    const getTheJokes = async () => {
        const url = "https://v2.jokeapi.dev/joke/Any?amount=10";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setJokes(data.jokes);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching jokes:", error);
            setLoading(false);
        }
    };

    return (
        <div className='jokes-background'>
             <div><h1>Jokes</h1>
             </div>
              {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='d-flex justify-content-center p-5 rounded-pill' style={{borderRadius: "30px"}}>
                <table className="table rounded-pill" style={{ color: 'lightgray' }}>
                <thead >
                    <tr>
                        <th scope="col" className="bg-secondary text-light  border border-light p-3" >Category</th>
                        <th scope="col" className="bg-secondary text-light  border border-light p-3" >Joke</th>
                    </tr>
                </thead>
                <tbody >
                    {jokesData.map((joke) => (
                        <tr  key={joke.id}>
                            <td className="bg-secondary text-light border border-light p-3" >{joke.category}</td>
                            <td className="bg-secondary text-light  border border-light p-3" >{joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            )}
        </div>
    );
};

export default JokesPage;

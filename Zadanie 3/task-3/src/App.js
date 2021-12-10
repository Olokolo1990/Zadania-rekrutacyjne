import React, {useState, useEffect} from "react";

const App = () => {

    const [quotes, setQuotes] = useState([]);
    const [randomQuote, setRandomQuote] = useState(null);
    const [previousQuote, setPreviousQuote] = useState(randomQuote);
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd59\n" +
            "61f026264bb6bb3a6c41671b044f1f4/quotes.json")
            .then(response => response.json())
            .then(data => {
                setQuotes(data);
            })
            .catch(err => console.log(err))

    }, []);

    useEffect(() => {
        setRandomQuote(quotes[Math.floor(Math.random() * quotes.length - 1)]);
    }, [quotes]);

    const nextQuote = () => {
        setRandomQuote(quotes[Math.floor(Math.random() * quotes.length - 1)]);
    }
    const savePrevious = () => {
        setPreviousQuote(randomQuote);
    }

    return (
        <div className="container">
            { randomQuote && <h1> Cytat: {randomQuote.quote}</h1> }
            { randomQuote && <h2>Autor: {randomQuote.author}</h2> }
            <button onClick={()=>{nextQuote();savePrevious()}}>Następny cytat</button>
            <button onClick={()=> setRandomQuote(previousQuote)}>Poprzedni cytat</button>
        </div>

    );
}

export default App;

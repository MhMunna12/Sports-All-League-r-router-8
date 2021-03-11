import React, {useState,useEffect} from 'react';
import Header from '../Header/Header';
import League from '../League/League';



const Home = () => {
    const [leagues,setLeagues] = useState([]);

    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res=> res.json())
        .then(data => setLeagues(data.leagues))  
    },[])
    
    return (
        <div className="container mt-1 mr-2">
        <Header/>
            <div className="row">
                {
                    leagues.slice(0,30).map(league => <League league={league} key={league.idLeague}/>)
                }
            </div>
        </div>
    );
};

export default Home;
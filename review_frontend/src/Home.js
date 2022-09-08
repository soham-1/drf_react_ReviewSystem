import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const axios = require('axios').default;
        axios.get('http://localhost:8000/api/candidates/').then((response) => {
            setCandidates(response.data);
            // console.log(response.data);
            // console.log(candidates);
        });
    }, []);

    const candidateList = candidates.map((candidate) => 
        <Link className="list-group-item list-group-item-action active mb-1" aria-current="true"
         to={"/candidate/" + candidate.email + "/"} key={candidate.email}>
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{candidate.name}</h5>
            </div>
            <p className="mb-1">Email - {candidate.email}</p>
            <small>Work Exp. - {candidate.workexp} yrs</small>
        </Link>
    );

    return (
        <div class="list-group col-lg-5 ms-2 mt-5">
            {candidateList}
        </div>
    );
}

export default Home;
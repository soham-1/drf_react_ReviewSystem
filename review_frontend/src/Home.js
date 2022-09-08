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
        <Link className="list-group-item list-group-item-action active mb-3 bg-info" aria-current="true"
         to={"/candidate/" + candidate.email + "/"} key={candidate.email}>
            <div className="d-flex">
                <h5 className="mb-2 text-dark fw-bold fs-4">{candidate.name} - </h5> 
                {
                    (()=>{
                        if (candidate.status == "Accepted")
                            return <h5 className="ms-3 text-success fw-bold fs-4">{candidate.status}</h5>;
                        else if (candidate.status == "Rejected")
                            return <h5 className="ms-3 text-danger fw-bold fs-5">{candidate.status}</h5>;
                        else
                            return <h5 className="ms-3 text-warning fw-bold fs-5">{candidate.status}</h5>;
                    })()
                }
            </div>
            <p className="mb-1 text-black fw-light">Email - {candidate.email}</p>
            <small className="mb-1 text-black fw-light">Work Exp. - {candidate.workexp} yrs</small>
        </Link>
    );

    return (
        <div className="d-flex h-100 justify-content-center bg-light">
            <div class="d-flex-vertical list-group align-items-center col-lg-8 mt-3">
                {candidateList}
            </div>
        </div>
    );
}

export default Home;
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const Candidate = () => {
    const {email} = useParams();
    const [candidate, setCandidate] = useState({});
    const axios = require('axios').default;
    useEffect(() => {
        axios.get(`http://localhost:8000/api/candidate/${email}`).then((response) => {
            // console.log(response);
            setCandidate(response.data)
        });
    }, []);

    const update = (e) => {
        e.preventDefault();
        let data = {}
        if (e.target.status !== "") data['status'] = e.target.status.value;
        console.log(data);

        axios.patch(`http://localhost:8000/api/candidate/${email}`, data).then((response) => {
            if (response.status === 200) {
                alert("updated");
                window.location.reload();
            }
        })
    }

    return (
        <div class="container my-2 col-lg-7">
            <form onSubmit={update}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address:- {candidate.email}</label>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Name:- {candidate.name}</label>
                </div>
                <div class="mb-3">
                    <label for="contact" class="form-label">Contact:- {candidate.contact}</label>
                </div>
                <div class="mb-3">
                    <label for="ssc" class="form-label">SSC:- {candidate.ssc}</label>
                </div>
                <div class="mb-3">
                    <label for="hsc" class="form-label">HSC:- {candidate.hsc}</label>
                </div>
                <div class="mb-3">
                    <label for="degree" class="form-label">Degree:- {candidate.degree}</label>
                </div>
                <div class="mb-3">
                    <label for="workexp" class="form-label">WorkExp:- {candidate.workexp}</label>
                </div>
                <div class="mb-3">
                    <label for="workexp" class="form-label">Status - {candidate.status}</label>
                </div>
                { candidate.status == "Applied" ?
                    <>
                    <div class="mb-3">
                        <label for="status" class="form-label">Change Status</label>
                        <select class="form-select" aria-label="Default select example" id="status">
                            <option defaultValue value="">--Select--</option>
                            <option  value="Accepted">Accept</option>
                            <option value="Rejected">Reject</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                    </>
                    : <></>
                }
                
                
            </form>
        </div>
    );
}

export default Candidate;
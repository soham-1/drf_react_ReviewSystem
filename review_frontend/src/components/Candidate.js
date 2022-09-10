import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const Candidate = () => {
    const {email} = useParams();
    const [candidate, setCandidate] = useState({});
    const axios = require('axios').default;
    useEffect(() => {
        axios.get(`http://localhost:8000/api/candidate/${email}`).then((response) => {
            setCandidate(response.data);
        });
    }, []);

    const update = (e) => {
        let status = document.getElementById("status");
        e.preventDefault();
        let data = {}
        if (status !== null && status.value !== '') data['status'] = status.value;

        axios.patch(`http://localhost:8000/api/candidate/${email}`, data).then((response) => {
            if (response.status === 200) {
                alert("updated");
                window.location.reload();
            }
        })
    }

    return (
        <div class="container my-4 col-lg-7 fs-5">
            <div class="d-flex mb-3">
                <div class="d-flex col-lg-3 form-label fw-light justify-content-end me-4">Email:-</div>
                <div class="col-lg-6 form-label fw-bold">{candidate.email}</div>
            </div>
            <div class="d-flex mb-3">
                <div class="d-flex col-lg-3 form-label fw-light justify-content-end me-4">Name:-</div>
                <div class="col-lg-6 form-label fw-bold">{candidate.name}</div>
            </div>
            <div class="d-flex mb-3">
                <div class="d-flex col-lg-3 form-label fw-light justify-content-end me-4">Contact:-</div>
                <div class="col-lg-6 form-label fw-bold">{candidate.contact}</div>
            </div>
            <div class="d-flex mb-3">
                <div class="d-flex col-lg-3 form-label fw-light justify-content-end me-4">SSC:-</div>
                <div class="col-lg-6 form-label fw-bold">{candidate.ssc}</div>
            </div>
            <div class="d-flex mb-3">
                <div class="d-flex col-lg-3 form-label fw-light justify-content-end me-4">HSC:-</div>
                <div class="col-lg-6 form-label fw-bold">{candidate.hsc}</div>
            </div>
            <div class="d-flex mb-3">
                <div class="d-flex col-lg-3 form-label fw-light justify-content-end me-4">Degree:-</div>
                <div class="col-lg-6 form-label fw-bold">{candidate.degree}</div>
            </div>
            <div class="d-flex mb-3">
                <div class="d-flex col-lg-3 form-label fw-light justify-content-end me-4">Work Experience:-</div>
                <div class="col-lg-6 form-label fw-bold">{candidate.workexp}</div>
            </div>
            <div class="d-flex mb-3">
                <div class="d-flex col-lg-3 form-label fw-light justify-content-end me-4">View Resume:-</div>
                <div class="col-lg-6 form-label fw-bold">
                    <a className="form-label ms-2" href={candidate.resume} target="_blank">
                        {candidate.resume_name}
                    </a>
                </div>
            </div>
            <div class="d-flex mb-3">
                <div class="d-flex col-lg-3 form-label fw-light justify-content-end me-4">Status:-</div>
                <div class="col-lg-6 form-label fw-bold">{candidate.status}</div>
            </div>
            <div class="d-flex mb-3">
                { candidate.status == "Applied" ?
                    <>
                        <div class="d-flex col-lg-3 fw-light justify-content-end me-4">Change Status</div>
                        <div class="col-lg-6 fw-bold">
                            <select id="status">
                                <option defaultValue value="">--Select--</option>
                                <option  value="Accepted">Accept</option>
                                <option value="Rejected">Reject</option>
                            </select>
                        </div>
                    </>
                    : <></>
                }
            </div>
            <div class="d-flex mb-3">
                <div class="col-lg-3 me-4"></div>
                <div class="col-lg-6 fw-bold">
                    <button type="submit" class="btn btn-primary" onClick={update}>Update</button> 
                </div>
            </div>
             
        </div>
    );
}

export default Candidate;
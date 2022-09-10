import React from 'react';

const CreateCandidate = () => {
    const axios = require('axios').default;
    const fileInput = React.createRef();

    const create = (e) => {
        e.preventDefault();
        let data = {}
        for (let i = e.target.length-1; i >= 0; i--) {
            if (e.target[i].id !== "" && e.target[i] !== "resume")
                data[e.target[i].id] = e.target[i].value;
        }
        data['resume'] = e.target.resume.files[0];
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }
        axios.post(`candidate/${data.email}`, data, config).then((response) => {
            if (response.status === 201)
                alert("new candidate added");
                window.location.reload();
        });
    }

    return (
        <div class="container my-2 col-lg-7">
            <form onSubmit={create} encType="multipart/form-data">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required/>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" required/>
                </div>
                <div class="mb-3">
                    <label for="contact" class="form-label">Contact</label>
                    <input type="text" class="form-control" id="contact" required />
                </div>
                <div class="mb-3">
                    <label for="ssc" class="form-label">SSC</label>
                    <input type="text" class="form-control" id="ssc" required />
                </div>
                <div class="mb-3">
                    <label for="hsc" class="form-label">HSC</label>
                    <input type="text" class="form-control" id="hsc" required />
                </div>
                <div class="mb-3">
                    <label for="degree" class="form-label">Degree</label>
                    <input type="text" class="form-control" id="degree" required />
                </div>
                <div class="mb-3">
                    <label for="workexp" class="form-label">WorkExp</label>
                    <input type="text" class="form-control" id="workexp" required />
                </div>
                <div class="mb-3">
                    <label for="resume" class="form-label">Resume</label>
                    <input type="file" class="form-control" id="resume" ref={fileInput} required />
                </div>
                <div class="mb-3">
                    <label for="resume_name" class="form-label">Resume Name</label>
                    <input type="text" class="form-control" id="resume_name" required />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default CreateCandidate;
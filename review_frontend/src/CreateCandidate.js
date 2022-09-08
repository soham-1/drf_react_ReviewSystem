import {useParams} from 'react-router-dom';

const CreateCandidate = () => {
    const {email} = useParams();
    const axios = require('axios').default;

    const create = (e) => {
        e.preventDefault();
        let data = {}
        for (let i = e.target.length-2; i >= 0; i--) {
            if (e.target[i].value !== "")
                data[e.target[i].id] = e.target[i].value;
        }

        axios.post(`http://localhost:8000/api/candidate/${email}`, data).then((response) => {
            console.log(response.status);
            if (response.status === 201)
                alert("new candidate added");
        });
    }

    return (
        <div class="container my-2 col-lg-7">
            <form onSubmit={create}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" />
                </div>
                <div class="mb-3">
                    <label for="contact" class="form-label">Contact</label>
                    <input type="text" class="form-control" id="contact" />
                </div>
                <div class="mb-3">
                    <label for="ssc" class="form-label">SSC</label>
                    <input type="text" class="form-control" id="ssc" />
                </div>
                <div class="mb-3">
                    <label for="hsc" class="form-label">HSC</label>
                    <input type="text" class="form-control" id="hsc" />
                </div>
                <div class="mb-3">
                    <label for="degree" class="form-label">Degree</label>
                    <input type="text" class="form-control" id="degree" />
                </div>
                <div class="mb-3">
                    <label for="workexp" class="form-label">WorkExp</label>
                    <input type="text" class="form-control" id="workexp" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default CreateCandidate;
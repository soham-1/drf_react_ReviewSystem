import { useState, useEffect } from 'react';

import axiosInstance from './axios';

const Register = () => {
    axiosInstance.get('candidate/candidate-list').then(data => {
        console.log(data);
    })
}

export default Register;
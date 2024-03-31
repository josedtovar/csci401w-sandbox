import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom';

const EditReport =  () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/reports/${id}`)
        .then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setFeedback(response.data.feedback)
            setLoading(false);
        }) .catch((error) => {
            setLoading(false);
            alert('An error occured. Please check console.');
            console.log(error);
        })
    }, [])
    const handleEditReport = () => {
        const data = {
          firstName,
          lastName,
          feedback,
        };
        setLoading(true);
        axios
          .put(`http://localhost:5555/reports/${id}`, data)
          .then(() => {
            setLoading(false);
            navigate('/');
          })
          .catch((error) => {
            setLoading(false);
            alert('An error happened. Please Chack console');
            console.log(error);
          });
      };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x-l my-4'>Edit Feedback</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xi w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>First Name</label>
                    <input
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Last Name</label>
                    <input
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Feedback</label>
                    <input
                        type='text'
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditReport}>
                    Save
                </button>
            </div>
        </div>
            

    )
}

export default EditReport
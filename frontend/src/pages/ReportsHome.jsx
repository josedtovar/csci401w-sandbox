import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import ReportsTable from '../components/ReportsHome/ReportsTable';
import ReportsCard from '../components/ReportsHome/ReportsCard';


const ReportsHome = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/reports')
            .then((response) => {
                setReports(response.data.data); //response.data is the object of our response result [count, data]
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

  return (
    <div className='p-4'>
        <div className='flex justify-center items-center gap-x-4'>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl my-8'>Reports List</h1>
                <Link to='/reports/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1' />
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<ReportsTable reports={reports} />) : (<ReportsCard reports={reports} />)}
    </div>
  );
};

export default ReportsHome
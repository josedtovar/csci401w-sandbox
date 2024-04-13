import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi'; 
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const ReportsCard = ({reports}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {reports.map((item) => (
            <div
                key={item._id}
                className='border-2 border-grey-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
            >
                <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                    {item._id}
                </h2>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2x1' />
                    <h2 className='my-1'>{item.firstName} {item.lastName} </h2>
                </div>
                <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                    <Link to={`/reports/details/${item._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                    </Link>
                    <Link to={`/reports/edit/${item._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                    </Link>
                    <Link to={`/reports/delete/${item._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                    </Link>
                </div>
            </div>
            
        ))}
    </div>
  )
}

export default ReportsCard;
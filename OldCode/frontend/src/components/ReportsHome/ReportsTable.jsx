import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const ReportsTable = ({ reports }) => {
  return (
    <table className= 'w-full boder-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>First Name</th>
                            <th className='border border-slate-600 rounded-md'>Last Name</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Feedback</th>  
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={report._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {report.firstName}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {report.lastName}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                {report.feedback}
                            </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/reports/details/${report._id}`}>
                                    <BsInfoCircle className='text-2x1 text-green-800' />
                                </Link>
                                <Link to={`/reports/edit/${report._id}`}>
                                    <AiOutlineEdit className='text-2x1 text-yellow-600' />
                                </Link>
                                <Link to={`/reports/delete/${report._id}`}>
                                    <MdOutlineDelete className='text-2x1 text-red-600' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
         </tbody>
        </table>

  );
};

export default ReportsTable;
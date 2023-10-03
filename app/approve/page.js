import React from 'react'
import { approveData } from '../data/empdata'

const Approve = () => {
    return (
        <>


            <table className='approve-table'>
                <thead className='table-head'>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Total Days</th>
                        <th>Available leave</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='table-body'>

                    {approveData.map((data, i) =>
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.role}</td>
                            <td>{data.from}</td>
                            <td>{data.to}</td>
                            <td>{data.totalDays}</td>
                            <td>{data.availableLeave}</td>
                            <td>{data.reason}</td>
                            <td ><span className={data.status === 'pending' ? 'pending' : data.status === 'approved' ?
                                'approved' : data.status === 'rejected' ? 'rejected' : ""
                            } >{data.status}</span></td>
                        </tr>
                    )}


                </tbody>
            </table>
        </>
    )
}

export default Approve
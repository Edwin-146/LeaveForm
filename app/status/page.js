
"use client"
import React, { useState,useEffect } from 'react'
import { statusData } from '../data/empdata'
import Link from 'next/link'
import 'font-awesome/css/font-awesome.min.css';
import Table from '../components/Table';
import DynamicForm from '../components/DynamicForm';
import { validateUserEdit } from '../components/ValidationSchema';
import axios from 'axios'
const { v4: uuidv4 } = require('uuid');



const Status = () => {
    
    const [dataStd, setDatastd] = useState({
        name: '',
        role: '',
        fromDate: '',
        toDate: '',
        totalDays: '',
        reason: '',
        toWhom: '',
        status: 'pending',
        id:uuidv4()
      });
      const [jsonData,setJsonData]=useState([]);
      
    
const onChange = (name, value) => {
   
    setDatastd({
      ...dataStd,
      [name]: value,
    });
  };

  const fields = [
    {
      name: 'name',
      label: 'Enter Name:',
      type: 'text',
      placeholder: 'Enter Your Name',
    },
    {
      name: 'role',
      label: 'Role:',
      type: 'text',
      placeholder: 'Enter Your Id',
    },
    {
      name: 'fromDate',
      label: 'Choose From Date:',
      type: 'date',
    },
    {
      name: 'toDate',
      label: 'Choose To Date:',
      type: 'date',
    },
    {
      name: 'totalDays',
      label: 'Total Days:',
      type: 'text',
    },
    {
      name: 'reason',
      label: 'Select a reason:',
      type: 'select',
      options: [
        { value: 'Sick', label: 'Sick' },
        { value: 'Medical appointment', label: 'Medical appointment' },
        { value: 'Emergency', label: 'Emergency' },
        { value: 'Others', label: 'Others' },
      ],
    },
    {
      name: 'toWhom',
      label: 'Select to whom:',
      type: 'select',
      options: [
        { value: 'HR', label: 'HR' },
        { value: 'Manager', label: 'Manager' },
        { value: 'CEO', label: 'CEO' },
        { value: 'Asst Manager', label: 'Asst Manager' },
      ],
    },
  ];
  


    const [apply, setApply] = useState(false)

    function overlay() {
        setApply((pre) => !pre)
    }

    
    function applybtn() {
        setApply((pre) => !pre)

    }


    const columns = [
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Role",
            accessor: "role"
        },
        {
            Header: "From Date",
            accessor: "from"
        },
        {
            Header: "To Date",
            accessor: "to"
        },
        {
            Header: "Total Days",
            accessor: "totalDays"
        },
        
        {
            Header: "Reason",
            accessor: "reason"
        },
        {
            Header: "Status",
            accessor: "status"
        }
    ]

    const data = jsonData.map((data, i) => ({
        name: data.name,
        role: data.role,
        from:data.fromDate,
        to:data.toDate,
        totalDays:data.totalDays,
        reason:data.reason,
        toWhom:data.toWhom,
        status: <span className={data.status === 'pending' ? 'pending' : data.status === 'approved' ?
            'approved' : data.status === 'rejected' ? 'rejected' : ""
        }>{data.status}</span>,

    }));


    const displayJSON=()=> {

        axios.get("/api/fetch")
            .then(res => {
                setJsonData(res.data.reverse())
              
            })
    }
    
    useEffect(()=>{
      displayJSON();
    },[])


    function handleinsert() {
        axios.post('/api/create', { addValue: dataStd })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              displayJSON();
              setApply(false); 
            }
          })
          .catch(error => {
            console.error('Error updating JSON data:', error);
          });
      }
      



    return (

        < main className='parent-tag'>

            <div className='apply-btn'>  <button onClick={overlay}>Apply Leave</button></div>
            <Table columns={columns} data={data} className={'status-table'} />
        
         
            {apply && <div className='parent-border' >
                <div className='leave-border'>
                    <div className='exit-icon' onClick={() => setApply(false)}>    <i class="fa fa-times" aria-hidden="true" ></i></div>
                    <b> <h2 align="center">Apply Leave</h2></b>
                   
                    <DynamicForm fields={fields} onSubmit={handleinsert} onChange={onChange} data={dataStd}  validate={validateUserEdit}/>


                </div>
            </div>}


        </main>
    )
}

export default Status




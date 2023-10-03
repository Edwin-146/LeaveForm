// "use client"
// import React, { useState, useEffect } from 'react'
// import { holidaydata } from '../data/empdata'
// import 'font-awesome/css/font-awesome.min.css';
// import Table from '../components/Table';
// import axios from 'axios';
// import DynamicForm from '../components/DynamicForm';
// import { validateUserholiday } from '../components/ValidationSchema';
// const { v4: uuidv4 } = require('uuid');



// const holiday = () => {

//     const [addholiday, setAddHoliday] = useState(false)
//     const [edit, setEdit] = useState(false)
//     const [jsonData, setJsonData] = useState([]);
//     const [selectedRowData, setSelectedRowData] = useState();
//     const [changevalue, setChangeValue] = useState({
//         date: selectedRowData?.date,
//         day: selectedRowData?.day,
//         description: selectedRowData?.description,

//     });
//     const [addValue, setaddValue] = useState({
//         date: '',
//         day: '',
//         description: '',
//         id: uuidv4()
//     });


//     function overlay() {
//         setAddHoliday((pre) => !pre)
//     }



//     function editbtn(e, data) {
//         setSelectedRowData(data);
//         // setEdit(true);
//         setEdit({ [e.target.id]: true })
//         console.log(changevalue);

//     }

//     function deletebtn() {
//         alert("Are you sure, want to delete the data")
//     }
//     //create api
//     function handleinsert() {
//         axios.post('/api/holidaycreate', { addValue: addValue })
//             .then((res) => {
//                 console.log(res);
//                 if (res.status === 200) {
//                     displayJSON();
//                     setAddHoliday(false);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error updating JSON data:', error);
//             });
//     }


//     const columns = [                    //ustable
//         {
//             Header: "Date",
//             accessor: "date"
//         },
//         {
//             Header: "Day",
//             accessor: "day"
//         },
//         {
//             Header: "Description",
//             accessor: "description"
//         },
//         {
//             Header: "Edit",
//             accessor: "button"

//         },

//     ]

//     const data = jsonData.map((data, i) => ({
//         date: data.date,
//         day: data.day,
//         description: data.description,
//         button: <><button className='edit-btn' onClick={(e) => { editbtn(e, data) }}>Edit</button>
//             <button className='delete-btn' onClick={deletebtn}>Delete</button></>
//     }));

//     const displayJSON = () => {

//         axios.get("/api/holidayfetch")
//             .then(res => {
//                 setJsonData(res.data)

//             })
//     }

//     useEffect(() => {
//         displayJSON();
//     }, [])




//     const fields = [
//         {
//             name: 'date',
//             label: 'Date',
//             type: 'date',
//             placeholder: 'Enter Your Name',
//         },
//         {
//             name: 'day',
//             label: 'Day',
//             type: 'text',

//         },
//         {
//             name: 'description',
//             label: 'Description',
//             type: 'text',
//         },
//     ]

//     const onChange = (name, value) => {

//         setaddValue({
//             ...addValue,
//             [name]: value,
//         });
//     };
//     function editValue(e, key) {
// useEffect(() => {
//         setChangeValue({
//             date: selectedRowData?.date || '',
//             day: selectedRowData?.day || '',
//             description: selectedRowData?.description || '',
//         });
//     }, [selectedRowData]);
//         setChangeValue({ ...changevalue, [key]: e.target.value });
//     }



//     return (
//         <>

//             <main className='add-holiday-parent'>
//                 <div className='add-holiday-btn'><button onClick={overlay}>Add Holiday</button></div>
//                 <Table columns={columns} data={data} className={'holiday-table'} />

//                 {addholiday && <div className='parent-add-holiday' >
//                     <div className='add-holiday'>
//                         <DynamicForm fields={fields} onSubmit={handleinsert} onChange={onChange} data={addValue} validate={validateUserholiday} />
//                         <button type='button' onClick={() => setAddHoliday(false)}>Back</button>

//                     </div>
//                 </div>}
//                 {edit && <div className='parent-add-holiday' >
//                     <div className='add-holiday'>

//                         <form>
//                             <div className='exit-icon' onClick={() => setEdit(false)}>    <i class="fa fa-times" aria-hidden="true" ></i></div>
//                             <h2>Edit Holiday</h2>

//                             <div className='add-date'>
//                                 <label>Choose Date:</label>
//                                 <input type='date' onChange={(e) => editValue(e, "date")} value={changevalue?.date} />
//                             </div>
//                             <div className='add-day'>
//                                 <label >Day:</label>
//                                 <input type='text' onChange={(e) => editValue(e, "day")} value={changevalue?.day} />
//                             </div>
//                             <div className='add-description'>
//                                 <label>Description:</label>
//                                 <input type='text' onChange={(e) => editValue(e, "description")} value={changevalue?.description} />
//                             </div>
//                             <div className='add-holiday-submit-btn'>
//                                 <button >Submit</button>
//                             </div>

//                         </form>
//                     </div>
//                 </div>}
//             </main>
//         </>
//     )
// }

// export default holiday



"use client"
import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Table from '../components/Table';
import axios from 'axios';
import DynamicForm from '../components/DynamicForm';
import { validateUserholiday } from '../components/ValidationSchema';
const { v4: uuidv4 } = require('uuid');

const Holiday = () => {
    const [addholiday, setAddHoliday] = useState(false);
    const [edit, setEdit] = useState(false);
    const [jsonData, setJsonData] = useState([]);
    const [selectedRowData, setSelectedRowData] = useState();
    const [changevalue, setChangeValue] = useState({
        date: selectedRowData?.date,
        day: selectedRowData?.day,
        description: selectedRowData?.description,
    });
    const [addValue, setaddValue] = useState({
        date: '',
        day: '',
        description: '',
        id: uuidv4(),
    });

    function overlay() {
        setAddHoliday((pre) => !pre);
    }

    function editbtn(e, data) {
        console.log(changevalue);
        setSelectedRowData(data);
        setEdit(true);
    }

    function deletebtn() {
        alert('Are you sure, want to delete the data');
    }

    function handleinsert() {
        axios
            .post('/api/holidaycreate', { addValue: addValue })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    displayJSON();
                    setAddHoliday(false);
                }
            })
            .catch((error) => {
                console.error('Error updating JSON data:', error);
            });
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date',
        },
        {
            Header: 'Day',
            accessor: 'day',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Edit',
            accessor: 'button',
        },
    ];

    const data = jsonData.map((data, i) => ({
        date: data.date,
        day: data.day,
        description: data.description,
        button: (
            <>
                <button className="edit-btn" onClick={(e) => editbtn(e, data)}>
                    Edit
                </button>
                <button className="delete-btn" onClick={deletebtn}>
                    Delete
                </button>
            </>
        ),
    }));

    const displayJSON = () => {
        axios.get('/api/holidayfetch').then((res) => {
            setJsonData(res.data);
        });
    };

    useEffect(() => {
        displayJSON();
    }, []);

    const fields = [
        {
            name: 'date',
            label: 'Date',
            type: 'date',
            placeholder: 'Enter Your Name',
        },
        {
            name: 'day',
            label: 'Day',
            type: 'text',
        },
        {
            name: 'description',
            label: 'Description',
            type: 'text',
        },
    ];

    useEffect(() => {
        setChangeValue({
            date: selectedRowData?.date,
            day: selectedRowData?.day,
            description: selectedRowData?.description,
        });
    }, [selectedRowData]);

    function editValue(e, key) {
        setChangeValue((prev) => ({
            ...prev,
            [key]: e.target.value || undefined, // Set to undefined if it's an empty string
        }));
    }

    function submit() {
    }

    return (
        <>
            <main className="add-holiday-parent">
                <div className="add-holiday-btn">
                    <button onClick={overlay}>Add Holiday</button>
                </div>
                <Table columns={columns} data={data} className={'holiday-table'} />
                {addholiday && (
                    <div className="parent-add-holiday">
                        <div className="add-holiday">
                            <DynamicForm
                                fields={fields}
                                onSubmit={handleinsert}
                                onChange={(name, value) => setaddValue({ ...addValue, [name]: value })}
                                data={addValue}
                                validate={validateUserholiday}
                            />
                            <button type="button" onClick={() => setAddHoliday(false)}>
                                Back
                            </button>
                        </div>
                    </div>
                )}
                {edit && (
                    <div className="parent-add-holiday">
                        <div className="add-holiday">
                            <form>
                                <div className="exit-icon" onClick={() => setEdit(false)}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </div>
                                <h2>Edit Holiday</h2>
                                <div className="add-date">
                                    <label>Choose Date:</label>
                                    <input type="date" onChange={(e) => editValue(e, "date")}
                                        value={changevalue.date || ''} />
                                </div>
                                <div className="add-day">
                                    <label>Day:</label>
                                    <input type="text" onChange={(e) => editValue(e, "day")}
                                        value={changevalue.day || ''} />
                                </div>
                                <div className="add-description">
                                    <label>Description:</label>
                                    <input
                                        type="text"
                                        onChange={(e) => editValue(e, "description")}
                                        value={changevalue.description || ''}

                                    />
                                </div>
                                <div className="add-holiday-submit-btn">
                                    <button onClick={submit}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default Holiday;

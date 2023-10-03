import React from 'react'
import DynamicForm from '../components/DynamicForm';
import { StyleRegistry } from 'styled-jsx';
import { data } from 'autoprefixer';
import { validateUserEdit } from '../components/ValidationSchema';

const Leave = () => {

  const [dataStd, setDatastd] = useState({

    name: '',
    age: '',
    gender: '',
    department: ''
  }
  )

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
      name: 'id',
      label: 'Enter Id:',
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

  function handleinsert() {
    console.log(data);
  }




  return (
    <>

      <div className='parent-border'>
        <div className='leave-border'>
          <b> <h2 align="center">Apply Leave</h2></b>

          {/* <DynamicForm fields={fields} onSubmit={handleinsert} onChange={onChange} data={dataStd}  validate={validateUserEdit}/> */}


        </div>
      </div>

    </>
  )
}

export default Leave


{/* <form className='leave-form' >
                        <div className='name'>
                            <label>Enter Name :</label>
                            <input type='text' placeholder='Enter Your Name' />
                        </div>
                        <div className='id'>
                            <label>Enter Id :</label>
                            <input type='text' placeholder='Enter Your Id' />
                        </div>
                        <div className='from'>
                            <label>Choose From Date :</label>
                            <input type='date' />
                        </div>
                        <div className='to'>
                            <label>Choose To Date :</label>
                            <input type='date' />
                        </div>
                        <div className='days'>
                            <label>Total Days:</label>
                            <input type='text' />
                        </div>
                        <div className='reason'>
                            <label >Select a reason :</label>

                            <select >
                                <option value="Sick">Sick</option>
                                <option value="Medical appointment">Medical appointment</option>
                                <option value="Emergency">Emergency</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className='to-whome'>
                            <label >Select a reason :</label>

                            <select >
                                <option value="Sick">HR</option>
                                <option value="Medical appointment">Manager</option>
                                <option value="Emergency">CEO</option>
                                <option value="Others">Asst Manager</option>
                            </select>
                        </div>
                        <div className='leave-btn'><button>Apply</button></div>
                    </form> */}

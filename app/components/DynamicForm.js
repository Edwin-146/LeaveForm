'use client';
import React from 'react';
import { useForm } from 'react-hook-form';





function DynamicForm({ fields, onSubmit, onChange, data,validate }) {

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, 
  } = useForm({
    defaultValues: "",
  
  });

console.log(data);

  const handleFormSubmit = async (data) => {

    try {

      const validatedData = await validate(data);
      
  
      onSubmit(validatedData);
      reset();
    } catch (error) {
 
      console.error('Validation failed:', error.errors);

      
    
    }
  };
 

  console.log(data);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}  className='form-data'>
      {fields.map((field) => (
        <div key={field.name} >
          <label>{field.label}</label>
          {field.type === 'select' ? (
            <select
              {...register(field.name)}
              onChange={(e) => onChange( field.name, e.target.value)}
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input  
              type={field.type}
              {...register(field.name)}
              onChange={(e) => onChange(field.name, e.target.value)}
            />
          )}

        </div>
      ))}
      <input type="submit" value="Apply"  className='button' />
    </form>
  );
}

export default DynamicForm;

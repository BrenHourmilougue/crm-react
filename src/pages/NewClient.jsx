import React from 'react'
import { useNavigate,useActionData, Form, redirect } from 'react-router-dom'
import FormClient from '../components/FormClient';
import Error from '../components/Error';
import { addClient } from '../data/clients';

export async function action({request}) {

  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const email = formData.get('email')

  //Validation 
  const errors = []
  if(Object.values(data).includes('')){
    errors.push('Every field is required')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)){
    errors.push('Invalid email')
  }
  
  if (Object.keys(errors).length){
    return errors;
  }

  await addClient(data)

  return redirect('/')
}

const NewClient = () => {

  const errors = useActionData();
  const navigate = useNavigate();


  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>New client</h1>
      <p className='mt-3'>Complete every field</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        
        {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form //Form de resct router dom
          method='POST'
          noValidate
        >
          <FormClient /* Form de mi componente */ />
          <input type="submit" value='Register' className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg' />
        </Form>
      </div>
    </>
  )
}

export default NewClient

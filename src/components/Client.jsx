import React from 'react'
import { useNavigate, Form, redirect } from 'react-router-dom'
import { deleteClient } from '../data/clients'

export async function action({params}){
    await deleteClient(params.clientId)
    return redirect('/')
}

const Client = ({ client }) => {

    const navigate = useNavigate();
    const { name, company, email, phone, id } = client
    return (
        <tr className='border-b'>
            <td className='p-6 space-y-2'>
                <p className='text-2xl text-gray-800'>{name}</p>
                <p className='text-gray-800'>{company}</p>
            </td>
            <td className='p-6 space-y-2'>
                <p className=' text-gray-600'><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
                <p className=' text-gray-600'><span className='text-gray-800 uppercase font-bold'>Phone: </span>{phone}</p>
            </td>
            <td className='p-6 gap-3 flex'>
                <button
                    type='button'
                    className='text-blue-600 hover:text-blue-700 text-xs'
                    onClick={() => navigate(`/clients/${id}/edit`)}
                >Edit</button>
                <Form
                    method='POST'
                    action={`/clients/${id}/delete`}
                    onSubmit = {
                        (e) => {if(!confirm('Are you sure you want to delete this client?')){
                                    e.preventDefault()
                                }
                        }
                    }
                >
                    <button
                        type='submit'
                        className='text-red-600 hover:text-red-700 text-xs'
                    >Delete</button>
                </Form>

            </td>
        </tr>
    )
}

export default Client

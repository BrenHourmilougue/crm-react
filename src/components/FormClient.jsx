const FormClient = ({client}) => {
    
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Name:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Cliente"
                    name="name"
                    defaultValue={client?.name}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="company"
                >Company:</label>
                <input 
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Empresa del Cliente"
                    name="company"
                    defaultValue={client?.company}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={client?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="phone"
                >Phone:</label>
                <input 
                    id="phone"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Cliente"
                    name="phone"
                    defaultValue={client?.phone}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="comments"
                >Comment:</label>
                <textarea
                    as="textarea"
                    id="comments"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="comments"
                    defaultValue={client?.comments}
                />
            </div>
        </>
    )
}

export default FormClient
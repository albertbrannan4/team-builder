const Form = (props) => {


    const change = (evt) => {
        const { value, name } = evt.target
        props.update(name,value)
    }

    const submit = (evt) => {
        evt.preventDefault();
        props.submit();
    }

    return (
        <div>
            <h2>My Form</h2>
            <form onSubmit={submit}>
                <label>Name
                    <input type='text' name='name' value={props.formValues.name} onChange={change} />
                </label>
                <label>Email
                    <input type='email' name='email' value={props.formValues.email} onChange={change} />
                </label>
                <label>Role
                    <select name='role' value={props.formValues.role} onChange={change}>
                        <option value=''>Select A Role</option>
                        <option value='frontend'>Front End</option>
                        <option value='backend'>Back End</option>
                        <option value='cat'>Cat</option>
                    </select>
                </label>
                <input type='submit' value='Create a Team Member!' />
            </form></div>
    )
}
export default Form;
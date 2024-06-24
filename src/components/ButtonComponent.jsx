

const ButtonComponent = props => {
    return (
        <div className="col my-auto">
            <h3 className="my-5">{props.formTitle}</h3>
           
            <div className="form-floating mx-auto" style={props.styleLabel}>
                
                <input className="form-control" type="email" id={props.id} placeholder="example@mail.it" />
                <label htmlFor={props.id}>Iscriviti</label>
            </div>
            <button className="mt-3" style={props.style}>{props.text}</button>
        </div>
    )
}

export default ButtonComponent
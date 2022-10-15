function Person({ data, handleClickDelete, handleClickEdit }) {
    const { dni, name, lastName, birth, type, email, user } = data
    const iconType = {
        student: "mortarboard",
        teacher: "briefcase",
        assistant: "person"
    }
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <i className={`bi bi-${iconType[type]}`} style={{ fontSize: "50px" }}></i>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mb-0 text-truncate">{name} {lastName}</h5>
                        <p className="card-text m-0 text-truncate"><i className="bi bi-card-heading"></i> {dni}</p>
                        <p className="card-text m-0 text-truncate"><i className="bi bi-balloon"></i> {birth}</p>
                        <p className="card-text m-0 text-truncate"><small><i className="bi bi-at"></i> {email}</small></p>
                        <p className="card-text m-0 text-truncate"><i className="bi bi-person-workspace"></i> {user}</p>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <button className="btn btn-primary rounded-0 flex-fill" onClick={handleClickEdit}>Editar</button>
                <button className="btn btn-danger rounded-0 flex-fill" onClick={handleClickDelete}>ELiminar</button>

            </div>
        </div>
    );
}

export default Person;
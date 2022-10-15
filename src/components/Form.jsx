import { useEffect, useState } from "react";

function Form() {
    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birth, setBirth] = useState("")
    const [type, setType] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleChangeDni = ({ target }) => setDni(target.value)
    const handleChangeName = ({ target }) => setName(target.value)
    const handleChangeLastName = ({ target }) => setLastName(target.value)
    const handleChangeBirth = ({ target }) => setBirth(target.value)
    const handleChangeType = ({ target }) => setType(target.value)
    const handleChangeEmail = ({ target }) => setEmail(target.value)
    const handleChangeUser = ({ target }) => setUser(target.value)
    const handleChangePassword = ({ target }) => setPassword(target.value)

    return (
        <div className='card p-0'>
            <div className='card-header bg-dark text-white'>

            </div>
            <form>
                <div className='card-body'>
                    <fieldset className="row">
                        <legend>Datos personales</legend>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">Documento</label>
                                <input className="form-control" name="dni" type="text" value={dni} onChange={handleChangeDni} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Fecha de nacimiento</label>
                                <input className="form-control" name="dateBirth" type="date" value={birth} onChange={handleChangeBirth} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input className="form-control" name="name" type="text" value={name} onChange={handleChangeName} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tipo</label>
                                <select className="form-select" name="type" value={type} onChange={handleChangeType}>
                                    <option defaultValue></option>
                                    <option value="teacher">Profesor</option>
                                    <option value="student">Estudiante</option>
                                    <option value="assistant">Asistente</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label className="form-label">Apellido</label>
                                <input className="form-control" name="lastname" type="text" value={lastName} onChange={handleChangeLastName} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo</label>
                                <input className="form-control" name="email" type="email" value={email} onChange={handleChangeEmail} />
                            </div>
                        </div>
                    </fieldset>
                    <hr className='border border-secondary' />
                    <fieldset className="row">
                        <legend>Datos de acceso</legend>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Usuario</label>
                                <input className="form-control" name="user" type="text" value={user} onChange={handleChangeUser} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input className="form-control" name="password" type="password" value={password} onChange={handleChangePassword} />
                            </div>
                        </div>
                    </fieldset>
                </div>

            </form>
        </div>
    );
}

export default Form;
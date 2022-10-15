import { useEffect, useState } from "react";
import { save, update } from "../services/people"

function Form({ personUpdate, setPersonUpdate, getPeople }) {
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

    const validateFields = () => {
        if (!dni.trim()) {
            return "Debe ingresar el documento."
        }

        if (!name.trim()) {
            return "Debe ingresar el nombre."
        }

        if (!lastName.trim()) {
            return "Debe ingresar el apellido."
        }

        if (!birth.trim()) {
            return "Debe ingresar una fecha de nacimiento válida."
        }

        if (!type.trim()) {
            return "Debe seleccionar un tipo."
        }

        if (!email.trim()) {
            return "Debe ingresar un correo válido."
        }

        if (!user.trim()) {
            return "Debe ingresar un usuario"
        }

        if (!password.trim()) {
            return "Debe ingresar una contraseña"
        }

        return null
    }

    const handleSubmitSave = async (e) => {
        e.preventDefault()
        const error = validateFields()
        setError(error)
        if (!error) {
            await save({
                dni,
                name,
                lastName,
                birth,
                type,
                email,
                user,
                password
            })
            resetForm(e)
            getPeople()
        }
    }

    const handleSubmitUpdate = async (e) => {
        e.preventDefault()
        const error = validateFields()
        setError(error)
        if (!error) {
            await update(personUpdate.id, {
                dni,
                name,
                lastName,
                birth,
                type,
                email,
                user,
                password
            })
            resetForm(e)
            getPeople()
        }
    }

    const resetForm = (e) => {
        setDni("")
        setName("")
        setLastName("")
        setBirth("")
        setType("")
        setEmail("")
        setUser("")
        setPassword("")
        setError(null)
        setPersonUpdate(null)
    }

    const loadToUpdate = () => {
        setDni(personUpdate.dni)
        setName(personUpdate.name)
        setLastName(personUpdate.lastName)
        setBirth(personUpdate.birth)
        setType(personUpdate.type)
        setEmail(personUpdate.email)
        setUser(personUpdate.user)
        setPassword(personUpdate.password)
    }

    useEffect(() => {
        if (personUpdate) {
            loadToUpdate()
        }
    }, [personUpdate])

    return (
        <div className='card p-0'>
            <div className='card-header bg-dark text-white'>
                {
                    !personUpdate
                        ? <h5><i className="bi bi-person-plus-fill"></i> Agregar persona</h5>
                        : <h5><i className="bi bi-pencil-fill"></i> Editar persona</h5>
                }
            </div>
            <form onSubmit={personUpdate ? handleSubmitUpdate : handleSubmitSave}>
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
                {
                    error &&
                    <div className="alert alert-warning d-flex align-items-center mx-3" role="alert">
                        <i className="bi bi-exclamation-diamond-fill me-2"></i> {error}
                    </div>
                }
                {
                    !personUpdate
                        ?
                        <div className="card-footer bg-white d-flex justify-content-end">
                            <input className="btn btn-dark" type="submit" value="Guardar" />
                        </div>
                        :
                        <div className="card-footer bg-white d-flex justify-content-end">
                            <input className="btn btn-secondary mx-3" type="button" value="Cancelar" onClick={(e) => {e.preventDefault(); return resetForm()}} />
                            <input className="btn btn-primary" type="submit" value="Editar" />
                        </div>
                }
            </form>
        </div>
    );
}

export default Form;
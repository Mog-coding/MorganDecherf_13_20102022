import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNameThunk } from './../../actions/authentActions'

export default function Profile() {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.userData.firstName);
    const lastName = useSelector((state) => state.userData.lastName);

    const [isEdit, setIsEdit] = useState(false);
    const [firstNameSaisie, setFirstName] = useState("");
    const [lastNameSaisie, setLastName] = useState("");
  
    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    const saveEdit = () => {
        dispatch(updateNameThunk({"firstName": firstNameSaisie, "lastName": lastNameSaisie}))
    };

    const cancelEdit = () => {
        setFirstName(firstName);
        setLastName(lastName)
        toggleEdit();
    }
    
    return (
        <div className="header">
            {!isEdit ? (
                <>
                    <h1>Welcome back
                        <br />
                        {`${firstName} ${lastName}!`}
                    </h1>
                    <button className="edit-button"
                        onClick={() => toggleEdit()}
                    >Edit Name</button>
                </>
            ) : (
                <>
                    <h1>Welcome back</h1>
                    <input
                        type="text"
                        placeholder={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br />
                    <button onClick={() => {
                            saveEdit();
                            toggleEdit();
                        }}
                    >Save</button>
                    <button onClick={(e) => cancelEdit(e)}>Cancel</button>
                </>
            )}
        </div>
    );
}

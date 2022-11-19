import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {updateNameThunk} from './../../actions/authentActions'

export default function Profile() {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstNameSaved, setFirstNameSaved] = useState('Tony');
    const [lastNameSaved, setLastNameSaved] = useState('Jarvis');

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };
    const saveEdit = () => {
        setFirstNameSaved(firstName);
        setLastNameSaved(lastName);
        dispatch(updateNameThunk({"firstName": firstName, "lastName": lastName}))
    };

    return (
        <div className="header">
            {!isEdit ? (
                <>
                    <h1>Welcome back
                        <br />
                        {`${firstNameSaved} ${lastNameSaved}!`}
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
                        placeholder={firstNameSaved}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={lastNameSaved}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br />
                    <button onClick={() => {
                            saveEdit();
                            toggleEdit();
                        }}
                    >Save</button>
                    <button onClick={(e) => toggleEdit(e)}>Cancel</button>
                </>
            )}
        </div>
    );
}

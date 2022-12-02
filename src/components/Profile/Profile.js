import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFirstName, selectLastName, selectLoadingName,  } from '../../selectors/authentSelectors';
import { updateNameThunk } from './../../actions/actions';
import './Profile.css';

/**
 * @description component that displays and handles user's name with buttons edit, save, cancel
 */
export default function Profile() {
    const dispatch = useDispatch();
    const isLoadingName = useSelector(selectLoadingName);
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);

    const [isEdit, setIsEdit] = useState(false);
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    };

    const saveEdit = () => {
        if (isLoadingName) {
            return;
        }
        // if input empty: store firstName in redux otherwise store input
        dispatch(
            updateNameThunk({
                firstName: !firstNameInput ? firstName : firstNameInput,
                lastName: !lastNameInput ? lastName : lastNameInput,
            })
        );
        toggleEdit();
    };

    const cancelEdit = () => {
        setFirstNameInput(firstName);
        setLastNameInput(lastName);
        toggleEdit();
    };

    return (
        <div className="headerProfile">
            {!isEdit ? (
                <>
                    <h1>
                        Welcome back
                        <br />
                        {`${firstName} ${lastName}!`}
                    </h1>
                    <button
                        className="edit-button"
                        onClick={() => toggleEdit()}
                    >
                        Edit Name
                    </button>
                </>
            ) : (
                <>
                    <h1>Welcome back</h1>
                    <input
                        className="inputEdit inputEditFirstname"
                        type="text"
                        placeholder={firstName}
                        onChange={(e) => setFirstNameInput(e.target.value)}
                    />
                    <input
                        className="inputEdit"
                        type="text"
                        placeholder={lastName}
                        onChange={(e) => setLastNameInput(e.target.value)}
                    />
                    <div className="contSaveButtons">
                        <button
                            className="edit-button saveButton"
                            onClick={(e) => saveEdit(e)}
                        >
                            Save
                        </button>
                        <button
                            className="edit-button"
                            onClick={(e) => cancelEdit(e)}
                        >
                            Cancel
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

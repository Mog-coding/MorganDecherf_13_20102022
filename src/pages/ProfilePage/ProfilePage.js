import { useState } from 'react';
import Account from '../../components/Account/Account';
import './ProfilePage.css';

const dataAccount = [
    {
        title: 'Argent Bank Checking (x8349)',
        amount: '$2,082.79',
        description: 'Available Balance'
    },
    {
        title: 'Argent Bank Savings (x6712)',
        amount: '$10,928.42',
        description: 'Available Balance'
    },
    {
        title: 'Argent Bank Credit Card (x8349)',
        amount: '$184.30',
        description: 'Current Balance'
    }
]

export default function ProfilePage() {

    const [isEdit, setIsEdit] = useState(false);
    const [firstName, setFirstName] = useState("Tony");
    const [lastName, setLastName] = useState("Jarvis");

    const toggleEdit = (e) => {
        setIsEdit(!isEdit);
    }

    return (
        <>
            <main className="mainUser bg-dark">
                <div className="header">
                    {!isEdit ? <>
                        <h1>
                            Welcome back
                            <br />
                            {`${firstName} ${lastName}!`}
                        </h1>
                        <button className="edit-button"
                            onClick={(e) => toggleEdit(e)}
                        >Edit Name</button> </> :
                        <>
                            <h1>Welcome back</h1>
                            <input type="text" placeholder={firstName} />
                            <input type="text" placeholder={lastName} />
                            <br />
                            <button>Save</button>
                            <button onClick={(e) => toggleEdit(e)}>Cancel</button>
                        </>
                    }
                </div>

                <h2 className="sr-only">Accounts</h2>
                {dataAccount.map(({ title, amount, description }, index) => {
                    return <Account
                        title={title}
                        amount={amount}
                        description={description}
                        key={`account-${index}`}
                    />
                })
                }
            </main>
        </>
    )
}

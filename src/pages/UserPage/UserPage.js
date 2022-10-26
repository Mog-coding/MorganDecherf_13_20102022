import Account from '../../components/Account/Account';
import './UserPage.css';

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

export default function UserPage() {

    return (
        <>
            <main className="mainUser bg-dark">
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        Tony Jarvis!
                    </h1>
                    <button className="edit-button">Edit Name</button>
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

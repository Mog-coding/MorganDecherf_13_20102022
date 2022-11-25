import Account from '../../components/Account/Account';
import Profile from '../../components/Profile/Profile';
import './ProfilePage.css';
import { Helmet } from 'react-helmet';

const dataAccount = [
    {
        title: 'Argent Bank Checking (x8349)',
        amount: '$2,082.79',
        description: 'Available Balance',
    },
    {
        title: 'Argent Bank Savings (x6712)',
        amount: '$10,928.42',
        description: 'Available Balance',
    },
    {
        title: 'Argent Bank Credit Card (x8349)',
        amount: '$184.30',
        description: 'Current Balance',
    },
];

export default function ProfilePage() {
    return (
        <>
            <main className="mainUser bg-dark">
                <Profile />
                <h2 className="sr-only">Accounts</h2>
                {dataAccount.map(({ title, amount, description }, index) => {
                    return (
                        <Account
                            title={title}
                            amount={amount}
                            description={description}
                            key={`account-${index}`}
                        />
                    );
                })}
            </main>
            <Helmet>
                <title>Argent Bank - Profile Page</title>
            </Helmet>
        </>
    );
}

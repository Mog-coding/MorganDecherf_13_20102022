import './Account.css';
import TransactionButton from '../transactionButton/TransactionButton';
import PropTypes from 'prop-types';

/**
 * @description component that shows account's balance
 */
export default function Account({ title, amount, description }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <TransactionButton />
        </section>
    );
}

Account.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

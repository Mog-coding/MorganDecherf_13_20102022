import './HomePage.css';
import FeatureItem from '../../components/FeatureItem/FeatureItem';
import chatIcon from '../../assets/pictures/icon-chat.png';
import moneyIcon from '../../assets/pictures/icon-money.png';
import securityIcon from '../../assets/pictures/icon-security.png';

const featureData = [
    {
        title: 'You are our #1 priority',
        text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
        icon: chatIcon,
    },
    {
        title: 'More savings means higher rates',
        text: 'The more you save with us, the higher your interest rate will be!',
        icon: moneyIcon,
    },
    {
        title: 'Security you can trust',
        text: 'We use top of the line encryption to make sure your data and money is always safe.',
        icon: securityIcon,
    },
];

export default function HomePage() {
    return (
        <>
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">
                            Open a savings account with Argent Bank today!
                        </p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {featureData.map(({ title, text, icon }, index) => {
                        return (
                            <FeatureItem
                                featureTitle={title}
                                featureText={text}
                                featureIcon={icon}
                                key={`feature${index}`}
                            />
                        );
                    })}
                </section>
            </main>
        </>
    );
}
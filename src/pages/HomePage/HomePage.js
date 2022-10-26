import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';
import CardHome from '../../components/FeatureItem/FeatureItem';
import chatIcon from '../../assets/pictures/icon-chat.png';
import moneyIcon from '../../assets/pictures/icon-money.png';
import securityIcon from '../../assets/pictures/icon-security.png';

const featureTitle = [
    'You are our #1 priority',
    'More savings means higher rates',
    'Security you can trust',
];
const featureText = [
    'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    'The more you save with us, the higher your interest rate will be!',
    'We use top of the line encryption to make sure your data and money is always safe.',
];
const featureIcon = [chatIcon, moneyIcon, securityIcon];

export default function HomePage() {

    return (
        <>
            <Header />
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
                    {featureTitle.map((titleEl, index) => {
                        return (
                            <CardHome
                                featureTitle={titleEl}
                                featureText={featureText[index]}
                                featureIcon={featureIcon[index]}
                                key={`feature${index}`}
                            />
                        );
                    })}
                </section>
            </main>
            <Footer />
        </>
    )
}

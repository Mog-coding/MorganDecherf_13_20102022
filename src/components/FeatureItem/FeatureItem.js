import './FeatureItem.css';

export default function FeatureItem({ featureTitle, featureText, featureIcon }) {
    return (
        <>
            <div className="feature-item">
                <img
                    src={featureIcon}
                    alt="Chat Icon"
                    className="feature-icon"
                />
                <h3 className="feature-item-title">{featureTitle}</h3>
                <p>{featureText}</p>
            </div>
        </>
    )
}
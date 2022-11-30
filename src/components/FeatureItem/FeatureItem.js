import './FeatureItem.css';
import PropTypes from 'prop-types';

/**
 * @description component that shows Argent Bank's slogans
 */
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

FeatureItem.propTypes = {
    featureTitle: PropTypes.string.isRequired,
    featureText: PropTypes.string.isRequired,
    featureIcon: PropTypes.string.isRequired,
};
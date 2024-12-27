import React from 'react';
import styles from './PictureAndPointsSection.module.scss';

interface SectionProps {
    desktopImage: string;
    mobileImage: string;
    texts: {
        trust: string[];
        actions: string[];
        benefits: string[];
    };
}

const PictureAndPointsSection: React.FC<SectionProps> = ({ desktopImage, mobileImage, texts }) => {
    return (
        <div className={styles.section}>
            <div className={styles.contentWrapper}>
                <div className={styles.trustBlock}>
                    <h3>Нам доверяют</h3>
                    <ul>
                        {texts.trust.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.imageWrapper}>
                    <picture>
                        <source media="(max-width: 1024px)" srcSet={mobileImage} />
                        <img src={desktopImage} alt="Industry automation" />
                    </picture>
                </div>

                <div className={styles.actionsBlock}>
                    <h3>Мы делаем</h3>
                    <ul>
                        {texts.actions.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.benefitsBlock}>
                    <h3>Вы получаете</h3>
                    <ul>
                        {texts.benefits.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PictureAndPointsSection;
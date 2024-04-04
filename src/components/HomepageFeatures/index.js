import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Import images
import exodiaCyan from '@site/static/Logos/exodia-cyan.png';
import predatorLogo from '@site/static/Logos/Predator.png';
import exodiaRed from '@site/static/Logos/exodia-red.png';
import exodiaBlue from '@site/static/Logos/exodia-blue.png';
import exodiaGreen from '@site/static/Logos/exodia-green.png';

const FeatureList = [
    {
        title: 'Home Edition',
        imgSrc: exodiaCyan,
        description: (
            <>
                This Edition is a general purpose operating system with the typical Exodia OS look and feel. This edition is designed for daily use, privacy and software development.
            </>
        ),
    },
    {
        title: 'Acer-Predator Edition',
        imgSrc: predatorLogo,
        description: (
            <>
                This Edition For Acer Predator Laptops with the typical Exodia OS look and feel, Keyboard RGB change based on the selected theme PredatorSense pre-installed to control CPU/GPU Fan, Keyboard RGB
            </>
        ),
    },
    {
        title: 'Wireless Edition',
        imgSrc: exodiaRed,
        description: (
            <>
                This Edition is For penetration testing (and especially for Wireless PenTesting) come with 400+ pre-installed Tools For PenTesting(and 130+ For Wireless PenTesting)
            </>
        ),
    },
    {
        title: 'Dark Edition',
        imgSrc: exodiaBlue,
        description: (
            <>
                ISO image for Exodia OS Dark edition (security-focused), this edition was built for the dark web to
                preserve privacy and anonymity.<br/>
                <div className={'stay_tuned'}>
                    <div className={'stay_tuned-text'}>
                        It's coming soon, Stay Tuned for More!
                    </div>
                </div>
            </>
        ),
    },
    {
        title: 'ARM Edition',
        imgSrc: exodiaGreen,
        description: (
            <>
                A flavor edition for the ARM family: An automated script that installs Exodia OS settings, repositories,
                etc., over an Arch ARM installation.<br/>
                <div className={'stay_tuned'}>
                    <div className={'stay_tuned-text'}>
                        It's coming soon, Stay Tuned for More!
                    </div>
                </div>
            </>
        ),
    },
];

function Feature({imgSrc, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={imgSrc} className={styles.featureImg} alt={title} width="20%" /> {/* Adjust the width value as needed */}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading className={"HomepageFeatures__title"} as="h3">{title}</Heading>
                <div className={"HomepageFeatures__description"}>{description}</div>
            </div>
        </div>
    );
}

HomepageFeatures
export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

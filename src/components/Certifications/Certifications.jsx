import './Certifications.css';

import js from '../../assets/jsIcon.png';
import cpp from '../../assets/cppIcon.png';
import css from '../../assets/cssIcon.png';

import google from '../../assets/google.png';
import amazon from '../../assets/amazon.png';
import oracle from '../../assets/oracle.png';

import gfg from '../../assets/gfg.png';
import coursera from '../../assets/coursera.png';
import nptel from '../../assets/nptel.png';

import CertificationsCard from './CertificationsCard/CertificationsCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const container_y = (d) => ({
    hidden: { x: -400, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: d,
            duration: 0.3
        }
    }
});

const container_x = (d) => ({
    hidden: { x: -400, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: d,
            duration: 0.5
        }
    }
});

function Certifications() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const statements1 = [
        "Completed a 26-week self-paced course on Machine Learning and Data Science from GeeksforGeeks.",
        "Gained hands-on experience with data preprocessing, model building, and evaluation techniques using real-world datasets.",
        "The course covered core topics such as regression, classification, clustering, dimensionality reduction, and model deployment.",
        "Applied machine learning algorithms to solve practical problems, improving accuracy, scalability, and data-driven decision-making skills."
    ];
    
    const statements2 = [
        "Completed a self-paced course on Supervised Machine Learning: Regression and Classification by DeepLearning.AI and Stanford University through Coursera",
        "Gained deep understanding of machine learning fundamentals, including loss functions, gradient descent, and regularization.",
        "The course covered essential algorithms such as linear regression, logistic regression, and classification models with real-world applications",
        "Applied concepts using Python and implemented models to solve practical ML problems, enhancing analytical thinking and model evaluation skills."
    ];
    
    const statements3 = [
        "Completed a 12-week instructor-led Deep Learning course by NPTEL, covering core concepts and hands-on model development.",
        "Gained practical experience in building and training neural networks using techniques like backpropagation and optimization algorithms.",
        "The course covered CNNs, RNNs, deep generative models, and real-time applications across industries.",
        "Applied concepts through weekly graded assignments and final assessments, achieving strong results and reinforcing understanding of model architecture, tuning, and evaluation."
    ];
    

    const iconImages = [js, cpp, css];

    return (
        <div id='certifications' className="certifications_container">
            <motion.p
                ref={ref}
                variants={container_x(0.2)}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                className="certifications_title"
            >
                Certifications
            </motion.p>
            <div className="certifications_cards_container">
                <CertificationsCard
                    companyLogo={gfg}
                    companyName="GeeksForGeeks"
                    designation='ML & DS'
                    statements={statements1}
                    // iconImages={iconImages}
                    delay={0.8}
                />
                <CertificationsCard
                    companyLogo={nptel}
                    companyName="NPTEL"
                    designation='Deep Learning'
                    statements={statements2}
                    // iconImages={iconImages}
                    delay={0.6}
                />
                <CertificationsCard
                    companyLogo={coursera}
                    companyName="Coursera"
                    designation='Supervised ML'
                    statements={statements3}
                    // iconImages={iconImages}
                    delay={0.4}
                />
            </div>
        </div>
    );
}

export default Certifications;

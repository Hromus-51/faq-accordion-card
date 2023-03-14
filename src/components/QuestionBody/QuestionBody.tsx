import { useState, useEffect } from 'react';
import clsx from 'clsx';
//=================================================
import QuestionList from '../QuestionList/QuestionList';
//=================================================
import styles from './styles.module.scss';

const QuestionBody: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <div className={styles.faq}>
            <div className={styles.container}>
                <div className={clsx(styles.faqBody, isMounted && styles.faqBody_visible)}>
                    <div className={styles.faqContent}>

                        <div className={styles.imageSide}></div>

                        <div className={styles.faqSide}>
                            <h3 className={styles.faqTitle}>FAQ</h3>
                            <div className={styles.faqContainer}>
                                <QuestionList />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default QuestionBody;
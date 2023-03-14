import QuestionBody from '../QuestionBody/QuestionBody';
//=================================================
import styles from './styles.module.scss';
import './null.scss';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <QuestionBody />
        </div>
    );
}

export default App;
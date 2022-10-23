import './Results.css';
import { resultData } from '../SearchBar/SearchBar';

function Results() {
    return (
        <div className="results2">
            <p>{(resultData.data ?? '').toString()}</p>
        </div>
    );
}

export default Results;

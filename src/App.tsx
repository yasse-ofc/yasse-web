import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Results from './components/Results/Results';
import SearchBar from './components/SearchBar/SearchBar';
import SeriesTypeButtons from './components/SeriesTypeButtons/SeriesTypeButtons';

function App() {
    return (
        <div className="main">
            <Header />
            <div className="sections">
                <section className="search">
                    <SeriesTypeButtons />
                    <SearchBar />
                </section>
                <section className="results">
                    <Results />
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default App;

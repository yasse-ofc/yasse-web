import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Results from './components/Results/Results';
import SearchBar from './components/SearchBar/SearchBar';
import SeriesTypeButtons from './components/SeriesTypeButtons/SeriesTypeButtons';
import React from 'react';

function App() {
    function on_submit(event: React.FormEvent<HTMLFormElement>) {
        console.log(event);
    }

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

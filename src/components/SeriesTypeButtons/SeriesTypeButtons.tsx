import './SeriesTypeButtons.css';

function SeriesTypeButtons() {
    return (
        <select name="SeriesType">
            <option value="Anime">Anime</option>
            <option value="Manga">Manga</option>
            <option value="Novel">Novel</option>
            <option value="Webtoon">Webtoon</option>
        </select>
    );
}

export default SeriesTypeButtons;

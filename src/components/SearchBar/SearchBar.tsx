import axios from 'axios';
import { SetStateAction, useState } from 'react';
import './SearchBar.css';

export const resultData: { data?: {}[] } = {};

function useInput() {
    const [text, setText] = useState('');

    function onChange(e: { target: { value: SetStateAction<string> } }) {
        setText(e.target.value);
    }

    function resetInput() {
        setText('');
    }

    return {
        text,
        onChange,
        resetInput,
    };
}

function SearchBar() {
    const inputProps = useInput();
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    };

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                await axios
                    .get(
                        `https://yasse.live/anime?title=${inputProps.text}&orderByLatestChapter=true`,
                        config
                    )
                    .then((res) => {
                        resultData.data = res.data;
                    })
                    .catch((err) => console.log(err))
                    .finally(() => {
                        inputProps.resetInput();
                    });
            }}
            className="SearchBar"
        >
            <input
                {...inputProps}
                className="searchBarInput"
                value={inputProps.text}
                placeholder="Series to search for..."
            ></input>
        </form>
    );
}

export default SearchBar;

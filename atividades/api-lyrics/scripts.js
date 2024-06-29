function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#music-form');
form.addEventListener('submit', element => {
    element.preventDefault();
    doSubmit();
})

function doSubmit() {
    const lyrics_element = document.querySelector('#lyrics');
    const artist = document.querySelector('#artist');
    const music = document.querySelector('#music');

    lyrics_element.innerHTML = `
    <div class="container justify-content-center">
        <div class="row justify-content-center">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>`

    findLyrics(artist.value, music.value)
        .then(response => response.json())
        .then(data => {
            if (data.lyrics) {
                lyrics_element.innerHTML = data.lyrics;
            } else {
                lyrics_element.innerHTML = data.error;
            }
        })
        .catch(err => {
            lyrics_element.innerHTML = `Oops! ${err}`;
        })

        // try {
        //     const lyricsResponse = await findLyrics(artist.value, music.value);
        //     const data = await lyricsResponse.json();
            
        //     if (data.lyrics) {
        //         lyrics_element.innerHTML = data.lyrics;
        //     } else {
        //         lyrics_element.innerHTML = data.error;
        //     }
        // } catch (err) {
        //     console.log(err);
        // }
}
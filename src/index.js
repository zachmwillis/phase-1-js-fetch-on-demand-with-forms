const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event);

        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response) => response.json())
            .then((data) => {
                const title = document.querySelector("section#movieDetials h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = data.title;
                summary.innerText = data.summary;
            });
    });
};

document.addEventListener('DOMContentLoaded', init);
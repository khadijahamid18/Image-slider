// function getPictures() {
//     const pictures = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
//         '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']

//     const buttons = document.querySelectorAll(".btn");
//     const imgDiv = document.getElementById("box");

//     let count = 0;

//     buttons.forEach(function (button) {
//         button.addEventListener("click", function (e) {
//             if (button.classList.contains("btn-left")) {
//                 count--
//                 if (count < 0) {
//                     count = pictures.length - 1
//                 }
//                 imgDiv.style.background = `url('${pictures[count]}.jpeg')`
//             }

//             if (button.classList.contains("btn-right")) {
//                 count++
//                 if (count > pictures.length - 1) {
//                     count = 0
//                 }
//                 imgDiv.style.background = `url('${pictures[count]}.jpeg')`
//             }
//         })
//     })
// }



document.addEventListener("DOMContentLoaded", function () {
    getPictures();

    function getPictures() {
        const pictures = Array.from({ length: 100 }, (_, index) => (index + 1).toString());

        const buttons = document.querySelectorAll(".btn");
        const imgDiv = document.getElementById("box");

        let currentIndex = 0;

        buttons.forEach(function (button) {
            button.addEventListener("click", function (e) {
                if (button.id === "btn-left") {
                    currentIndex--;
                    if (currentIndex < 0) {
                        currentIndex = pictures.length - 1;
                    }
                } else if (button.id === "btn-right") {
                    currentIndex++;
                    if (currentIndex >= pictures.length) {
                        currentIndex = 0;
                    }
                }

                imgDiv.style.backgroundImage = `url('img/${pictures[currentIndex]}.jpeg')`;
            });
        });
    }
});

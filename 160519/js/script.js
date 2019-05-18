var allLi = document.querySelectorAll("#tabs ul li");
var text = document.querySelectorAll(".contains")
for (var i = 0; i < allLi.length; i++) {

    allLi[0].addEventListener("click", function () {

        allLi[0].classList.add("active_menu")
        allLi[1].classList.remove("active_menu")
        allLi[2].classList.remove("active_menu")
        text[0].classList.add("active_contain")
        text[1].classList.remove("active_contain")
        text[2].classList.remove("active_contain")

    })
    allLi[1].addEventListener("click", function () {
        allLi[1].classList.add("active_menu")
        allLi[0].classList.remove("active_menu")
        allLi[2].classList.remove("active_menu")
        text[1].classList.add("active_contain")
        text[0].classList.remove("active_contain")

        text[2].classList.remove("active_contain")



    })
    allLi[2].addEventListener("click", function () {
        allLi[2].classList.add("active_menu")
        allLi[0].classList.remove("active_menu")
        allLi[1].classList.remove("active_menu")
        text[0].classList.remove("active_contain")
        text[1].classList.remove("active_contain")

        text[2].classList.add("active_contain")

    })








    console.log()

}
const range = document.querySelector("#next")
const selector = document.querySelector(".selector_btn")
const title = document.querySelector(".chage_buttons")

let count = 1
let title_list = [
    "Beginning Time",
    "Feeling and Love",
    "Relationship...",
    "Confusing Start"
]

title.textContent = title_list[count - 1]


range.addEventListener("change", (e)=>{
    if(e.target.value < 40){
        e.target.value = 40
    }
    rangeValue = e.target.value
    selector.style.width = `${rangeValue}%`

    if(rangeValue >= 98 && count < 4){
        count ++
        setTimeout(()=>{
            e.target.value = 40
            selector.style.width = `${e.target.value}%`
        }, 1000)


        ani_begin()
    }

    title.textContent = title_list[count - 1]

    const current_active_card = document.querySelector(".active")
    current_active_card.classList.remove("active")

    const active_card = document.querySelector(`.text_box_${count}`)
    active_card.classList.add("active")


    if(rangeValue >= 98 && count == 4){
        count = 1
        setTimeout(()=>{
            e.target.value = 40
            selector.style.width = `${e.target.value}%`
        }, 1000)

        ani_begin()
    }

})


function ani_begin(){
    const cards = document.querySelectorAll(".card")

    cards.forEach((card)=>{
        // card.classList.add("rotation_zero")
        card.classList.remove("card")
    }) 
    
    setTimeout(()=>{
        cards.forEach((card)=>{
            // card.classList.remove("rotation_zero")
            card.classList.add("card")
        })    
    }, 1000)
    
}

ani_begin()




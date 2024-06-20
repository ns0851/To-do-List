
let task = document.querySelector(".input")
let enter = document.querySelector(".enter")
// console.log(`hi ${enter.innerHTML}`)
let taskName = document.querySelector(".taskName")

function addToList() {
    enter.addEventListener("click", async () => {
        console.log("clcked")
        let container = document.querySelector(".container")
            // console.log(task)
            // let inner = e.querySelector(".taskName")
            let html = ` <div
        class="card flex flex-col border-2 border-solid border-purple-500 p-5 items-center rounded-md m-5 text-xl">
        <div class="flex justify-around md:justify-between items-center min-w-full md:px-56">
            <div class="left flex gap-3">
                <input type="checkbox" name="" id="" class="cursor-pointer">
                <p class="taskName">${task.value}</p>
            </div>
            <div class="right flex gap-6">
                <img src="svg/update.svg" alt="" class="cursor-pointer update">
                <img src="svg/delete.svg" alt="" class="cursor-pointer remove">
            </div>
        </div>
        <div class="flex gap-5">
            <span class="hidden upText m-2">Update Value: </span>
            <span><input class="border-black border-2 hidden new m-2" type="text" name="" id=""
                    placeholder="Update">
            </span>
        </div>
        <div class="">
            <button class=" m-2 butt rounded-md bg-purple-600 px-4 py-1 text-center text-white enter hidden">
                Update
            </button>
        </div>
    </div>`

    container.innerHTML = container.innerHTML + html
        })
    }


function deleteTask() {
    let container = document.querySelector(".container")
    container.querySelectorAll(".card").forEach((card) => {
        console.log(card)
        let remove = card.querySelector(".remove")
        console.log(remove)
        remove.addEventListener("click", () => {
            card.remove()
        })
    })
}

function updateTask() {
    let container = document.querySelector(".container")
    container.querySelectorAll(".card").forEach((card) => {
        console.log(card)
        let update = card.querySelector(".update")
        console.log(update)
        update.addEventListener("click", () => {
            newEnter = card.querySelector(".new")
            upText = card.querySelector(".upText")
            newEnter.style.display = "block"

            upButton = card.querySelector(".butt")
            upButton.style.display = "block"

            upText.style.display = "block"

            upButton.addEventListener("click", () => {
                card.querySelector(".taskName").innerHTML = newEnter.value
                newEnter.style.display = "none"
                upText.style.display = "none"
                upButton.style.display = "none"
            })
        })
    })
}

deleteTask()
updateTask()

addToList()

document.addEventListener("DOMContentLoaded", ()=>{
    const cards = document.querySelectorAll('.card')
    cards.forEach((card)=>{
        const hasRemove = card.classList.contains('.remove')
        const hasEdit = card.
    })
})
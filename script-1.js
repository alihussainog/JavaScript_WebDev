// console.log(document)

// const para=document.querySelector('p')

// para.innerText= "This is updated paragraph"


// const para=document.getElementsByClassName('para')
// para[0].innerText="This is updated paragaph"
// para[0].style.color="green"
// console.log(para)

// const para=document.querySelector('.para')
// para.innerText="This is updated paragraph"
// para.style.color="blue"
// console.log(para)

// const para=document.querySelectorAll('.para')
// para[0].innerText="yash verma"
// para[1].style.color="red"
// console.log(para)

// let arr=[23,45,235,56,45,3,2]
// arr.forEach((ele)=>console.log(ele))

// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a heading"
// console.log(container)

// const btn=document.querySelector("button")
// btn.classList.add("btn")

// function print(){
//     console.log("button daba diya laadlee")
// }

// btn.addEventListener('click',print)
// btn.removeEventListener('click',print)

// const click=document.querySelector('#click')
// // const stop=document.querySelector('#stop')

// function message(){
//     console.log("Button Clicked!")
// }

// click.addEventListener('click',message)
// stop.addEventListener('click',()=>{
//     console.log("Stop button clicked!")
//     click.removeEventListener('click',message)
// })


// const click=document.querySelector('#click')

// function message(event){
//     console.log(event.key)
//     console.log("Button Clicked!")
// }

// click.addEventListener('keyup',message)


const form=document.querySelector('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log("Form Submitted!")
})

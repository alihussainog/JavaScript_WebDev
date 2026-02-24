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


// const form=document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log("Form Submitted!")
// })


// debugger
// console.log(a)
// // console.log(b)

// var a=678
// let b=567

// console.log(a)
// console.log(b)

// function print(){
//     let c=63
//     console.log(c)
//     console.log("inside fn")
// }

// print()


// function greet(){
//     var message="Hello User!"
//     console.log(message)
// }

// greet()
// // console.log(message)

// debugger
// function first(){
//     second()
// }

// function second(){
//     third()
// }

// function third(){
//     console.trace()
// }
// first()


// console.log("first line")
// setTimeout(()=>{console.log("line after 2 seconds")},2000)
// console.log("second line")


// setTimeout(()=>{
//     alert("Pop-Up Alert after 2-Seconds")
// },2*1000)

// const timerId=setInterval(()=>{
//     console.log("Console Alert after 2-Seconds")
// },2*1000)
// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },20*1000)

// let count=0
// const timerId=setInterval(()=>{
//     count++
//     console.log(count)
// },1000)

// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)


// console.log("Before Timeout")
// setTimeout(()=>{
//     console.log("Inside Timeout")
// },0)
// console.log("After Timeout") 


// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener("click",()=>{
//     if(name.value=="")return
//     const li=document.createElement("li")
//     const dlt=document.createElement("button")
//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     list.appendChild(li)
//     li.appendChild(dlt)
//     name.value=""
// })

// callback function

// function greet(){
//     console.log("Hello!")
// }

// function print(sample, num){    //higher order fn
//     sample()
//     console.log("Total students are",num)
// }

// print(greet, 45)


// console.log("Starting homework....")

// setTimeout(()=>{
//     console.log("Homework Done!");
//     console.log("Starting Dinner...");

//     setTimeout(()=>{
//         console.log("Dinner Done!");
//         console.log("Getting ready to go out...");

//         setTimeout(()=>{
//             console.log("Going to playground!");
//         },1000);    //after dinner
//     },1500);   //dinner line
// },2000);   //homework line


// function finishHomework(callback) {
//     console.log("Starting Homework...")
//     setTimeout(() => {
//         console.log("Homework Done!");
//         callback();
//     }, 2000);
// }

// function eatDinner(callback) {
//     console.log("Starting Dinner...")
//     setTimeout(() => {
//         console.log("Dinner Done!");
//         callback();
//     }, 1500);
// }

// function goToPlayground() {
//     console.log("Going to Playground!");
// }

// finishHomework(() => {
//     eatDinner(() => {
//         goToPlayground();
//     });
// });

// promise fn
// const p=new Promise((res,rej) => {
//     let done=false
//     setTimeout(() => {
//         if(done){
//             res("Work is Done!")
//         }else{
//             rej("Work is not done:(")
//         }
//     },5000)
// })

// p.then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Finally Block!")
// }) 

// console.log(p)


// promise chaining
// function doHomework() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let homeworkDone = true;
//             if (homeworkDone) {
//                 console.log("Homework is Done!");
//                 resolve("Homework Complete:)");
//             } else {
//                 reject("Homework not done:(");
//             }
//         }, 3000);
//     })
// }

// function eatDinner() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let dinnerEaten = true;
//             if (dinnerEaten) {
//                 console.log("Dinner is eaten!");
//                 resolve("Dinner Complete:)");
//             } else {
//                 reject("Dinner not done:(");
//             }
//         }, 2000);
//     })
// }


// function goToPlayground() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let permission = true;
//             if (permission) {
//                 console.log("Went to Playground!");
//                 resolve("Playground time:)");
//             } else {
//                 reject("Not allowed to go out:(");
//             }
//         }, 3000);
//     })
// }

// doHomework().then((msg)=>{
//     console.log(msg);
//     return eatDinner();
// }).then((msg)=>{
//     console.log(msg);
//     return goToPlayground();
// }).then((msg)=>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Go to sleep");
// });

// async & await function ------>
// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Ordered!")
//             res("Food has been Ordered..")
//         },2000)
//     })
// }

// function prepareFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Prepared")
//             res()
//         },2000)
//     })
// }

// function deliverFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Delivered:)")
//             res()
//         },2000)
//     })
// }

// async function order(){
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }

// order()

// diff bw await & then fn ---->
// orderFood().then((data)=>{
//     return prepareFood()
// }).then((data)=>{l
//     return deliverFood()
// }).then((data)=>{

// }).catch((err)=>{
//     console.log("Something went wrong:(")
// })

//Error Handling ---->
// console.log("First Line")
// try{
//     // let sample = 234
//     // console.log(sample)
//     // console.log("Line after sample")
//     let age = 16
//     if(age<18){
//         throw new Error("You are not eligible to vote!") 
//         // console.log("line after throw")
//         //
//         //
//         //
//         //
//     }
//     ///

// }catch(e){
//     console.error(e)
// }
// console.log("Last Line")

//Fetch ----->
// async function getData(){
//     try{
//         const response = await fetch("https://dummyjson.com/products")
//         if(response.ok===false){
//             throw new Error("Something Went Wrong:(")
//         }
//         const data = await response.json()
//         console.log(data)
//         //console.log(data.products[0].title)
//         data.products.forEach((product)=>{
//             console.log(product.title)
//         })
//     }catch(err){
//         console.log(err)
//     }
// }
// getData()
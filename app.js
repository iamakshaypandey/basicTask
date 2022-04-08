console.log('hello akshay');


const city1 = [
    "indore",
    "mumbai",
    "delhi",
    "chandhigrah",
    "mohali",
    "Dharamshala",
    "gurugram",
    "bengluru",
    "surat"
]


const select=document.querySelectorAll('.dropdownitem')
select.forEach((crr,i,arr)=>{
    crr.textContent=city1[i]
    // console.log(city1[i]);
})

function clickCity(){
    var cityNumber=document.getElementById('myClick').value
    console.log(cityNumber);
}

localStorage.setItem('name','akshay')











// console.log(select);
// const allCity=document.querySelector('a')
// city1.forEach(item=>{
//     allCity.textContent=item
//     console.log(item);
// })















// const select=document.querySelector('.dropdown-menu')
// city1.forEach(opt=>{
//     var el = document.createElement("div");
//     el.classList.add('dropdown-item')
//     el.setAttribute("onclick","clickCityName()");
//     el.textContent = opt;
//     el.value = opt;
//     // console.log(el);
//     select.appendChild(el)
// })

// function clickCityName(i){
//     console.log('its');
// }





// for(let i in city1){
//     allCity.textContent=city1[i]
//     console.log(city1[i]);
// }

// const cname=document.getElementsByClassName('dropdown-menu')[0]
// const cname1=cname.getElementsByClassName('dropdown-item')
// console.log(cname1);
// cname1.textContent='indore'

// var size=Object.values(city).map(item=>{
//     document.getElementsByClassName('dropdown-item').innerHTML=item
//    console.log(document.getElementsByClassName('dropdown-item').innerHTML=item)
//     // console.log(item);
// })
// var size = Object.values(city).length;
// for(i=0;size>i;i++){
//     console.log(city[i]);
// }
// console.log(size);
// console.log(city);

// for (let i=0;)

// const allCity=document.querySelector('.dropdown-item')
// allCity.textContent='indore'


// const creatCity=document.createElement('div')
// creatCity.classList.add('dropdown-item')
// creatCity.innerText='indore'
// console.log(creatCity);

// const city= document.querySelectorAll('.dropdown-item')
// var newObject={}
// var count=1
// const allCity=city.forEach(item=>{
//     newObject[count]=item.textContent
//     console.log(newObject);
//     count++
//     // console.log(item.textContent);  
// })

// function clickCity(arr){
//     const city= document.querySelectorAll('.dropdown-item')
//     console.log(arr);
//     var newObject={}
//     var count=1
//     const allCity=city.forEach(item=>{
//     newObject[count]=item.textContent
//     console.log(newObject);
//     count++
//     // console.log(item.textContent);  
// })

// }





// console.log(city);



// console.log('how are you');
// // console.log(document.documentElement);
// // console.log(document.head);
// const header=document.querySelector('.header')
// console.log(header);
// const message=document.createElement('div')
// message.classList.add('demo')
// // message.innerText='hello akshay just try to keep'
// message.innerHTML='hello akshay just try to keep ,<button class="btn">got It!</button>'
// console.log(message);

// header.prepend(message)
// // header.append(message.cloneNode(true))

// document.querySelector('.btn').addEventListener('click',function(){
//     message.remove()
// })

// // const compair=document.querySelector(".compair")
// // console.log(compair);
// // compair.innerHTML="<a href'index1.html'>link element</a>"
// // compair.innerText="<a href'index1.html'>link element</a>"

// // console.log(message.getBoundingClientRect());

// window.addEventListener('scroll',function(e){
//    console.log(this.window.scrollY); 
// });
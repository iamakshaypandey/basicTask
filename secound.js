
// const obj = {
//     akshay:"akshay123",
//     subhash:"subhash123",
//     dewashish:"dev123",
//     pravin:"pravin123",
//     niki:"niki123",
//     ravi:"ravi123"
// }

// const submitBtn = document.querySelector('.submit-btn')
// const output=document.querySelector('.output')

// function insertData(obj){
//     Object.keys(obj).map(item=>localStorage.setItem(item,obj[item]));
// }
// insertData(obj)

// const checkOpration=()=>{
//     const input1 = document.querySelector('#fname').value
//     const input2 = document.querySelector('#lname').value
//     if(localStorage.getItem(input1)===input2){
//     output.textContent = `welcom in my page ${input1}`;
//     }else{
//         // console.log('password is rong');
//     output.textContent = `Please Check Your password`;
//     }
// }
// submitBtn.addEventListener('click',checkOpration)




const obj= [
      {
        "user":"akshay@123",
        "password":"akshay123" , 
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
        ]
      },
      {
        "user":"niki@123",
        "password":"niki123" ,   
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
        ]
      },
      {
        "user":"pravin@123",
        "password":"pravin123" ,   
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
        ]
      }
    ]

const submitBtn = document.querySelector('.submit-btn')
const output=document.querySelector('.output')

function insertData(obj){
    const str=JSON.stringify(obj)
    obj.map(item=>localStorage.setItem("arr",str));
    // console.log(typeof str);
}
insertData(obj)

const checkOpration=()=>{
    const input1 = document.querySelector('#fname').value
    const input2 = document.querySelector('#lname').value
    const data = localStorage.getItem("arr");
    const objPars=JSON.parse(data)
    for(let i=0 ; i<objPars.length;i++){
        const data1 = Object.values(objPars[i])
        if(data1.includes(input1)&&data1.includes(input2)){
            output.textContent='login success full'; 
            break         
        }else{
            output.textContent='please try again'
        }
    }
    
}
submitBtn.addEventListener('click',checkOpration)










// obj.forEach(function(i){
//     const user = i.user
//     const password=i.password
//     // console.log(i.user);
// })

    // const arr = obj.map(i=>console.log(i.user,i.password))



    // const checkOpration=()=>{
    //     const input1 = document.querySelector('#fname').value
    //     const input2 = document.querySelector('#lname').value
    //     if(localStorage.getItem(input1)===input2){
    //     output.textContent = `welcom in my page ${input1}`;
    //     }else{
    //         // console.log('password is rong');
    //     output.textContent = `Please Check Your password`;
    //     }
    // }
    // submitBtn.addEventListener('click',checkOpration)
    
















    // objPars.forEach(item=> {
    //     const data1 = Object.values(item)
        // if(data1.includes(input1)&&data1.includes(input2)){
        //     console.log('login success full');
        // }else{
        // console.log('plese try again');
        // }
    //     // console.log(data1.includes(input2));
    //     // console.log(item);
    //     // console.log(item.user);
    // });
    // console.log(typeof objPars);
    // if(localStorage.getItem(input1)===input2){
    // output.textContent = `welcom in my page ${input1}`;
    // }else{
    //     // console.log('password is rong');
    // output.textContent = `Please Check Your password`;
    // }
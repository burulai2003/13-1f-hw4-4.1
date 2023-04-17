const button =document.getElementById("btn")
const input = document.getElementById("input")
const bbbb = document.getElementById("bbb")
const ff = document.getElementById("opp")
const fff = document.getElementById("bbbb")
const ffff = document.getElementById("bb")
button.addEventListener('click',function(){

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        const filter1 = data.filter((item)=>item.id == input.value)
        console.log(Number(input.value)<=10)
        if(Number(input.value)<=10){
            const burulai = filter1.map((el)=> {
                return `<div class =" bb"><h1>${el.id} </h1><p><b>name:</b> ${el.name}</p> <p><b>phone:</b> ${el.phone}</p> <p><b>username:</b> ${el.username}</p> <p><b>web:</b> ${el.website}</p><p><b>email:</b> ${el.email}</p></div> 
               ` 
            })
            bbbb.innerHTML=burulai.join("")
            ff.innerHTML = burulai.join("") 
            
        }else {
         
            
            ff.innerHTML = "this account doesn't excist " 
            
        }
      
                
                                     
    
    }
    getData()
})

const datGet = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    const result = data.map((el) =>{
        return `<div class ="first"><h2>${el.id} </h2><p><b>name:</b> ${el.name}</p> <p><b>phone:</b> ${el.phone}</p> <p><b>username:</b> ${el.username}</p> <p><b>web:</b> ${el.website}</p><p><b>email:</b> ${el.email}</p></div> 
           ` 
    })
    ffff.innerHTML = result.join('')
}
datGet()
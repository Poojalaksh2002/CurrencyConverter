const inputBox1 = document.querySelector("#select-box1")
const inputBox2 = document.querySelector("#select-box2")
const worthOne = document.querySelector("#worth-scroll-1")
const worthTwo = document.querySelector("#worth-scroll-2")
const eachWorthEl = document.querySelector("#each-worth")


function update(){
    // alert('clicked')
    fetch(`https://v6.exchangerate-api.com/v6/147060cde4a14e2fef6dd2c7/latest/${inputBox1.value}`)
    .then((res)=>res.json()) // it juz giving nly the url fetched frm the api
    .then((data)=>{
        console.log(data)// see the base code has keep changing according to our selection,it returns keys & values
        let result = data.conversion_rates[inputBox2.value]
        console.log(result)


        eachWorthEl.innerText = `1 ${inputBox1.value} = ${result} ${inputBox2.value} `
        worthTwo.value = (worthOne.value * result).toFixed(2)

    })
}

inputBox1.addEventListener("change", update)
inputBox2.addEventListener("change", update)
worthOne.addEventListener("change", update)
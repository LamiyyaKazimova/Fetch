
const getAlbums= async ()=>{
    const url="https://jsonplaceholder.typicode.com/posts/1/comments"
    const fetchRequest= await fetch(url)
    const dataJson=await fetchRequest.json()
    return dataJson;
}



getAlbums().then((data=>{
data.forEach((data)=>{
const albumList=document.querySelector(".album-list")
const newElement=document.createElement("li")
  newElement.textContent=`${data.id} ${data.email}`
albumList.append(newElement)
}
)
    
}))






const btn = document.querySelector(".add");

btn.addEventListener('click', async function() {
    const textInput = document.querySelector(".text").value;
    const emailInput = document.querySelector(".email").value;
    const textArea = document.querySelector(".area").value;

    
    const data = {
        name: textInput,
        email: emailInput,
        message: textArea
    };

   const url="https://jsonplaceholder.typicode.com/posts/1/comments"

    const response=await fetch(url,{
        method:"POST",
        body:JSON.stringify(data)
    })
    if(textInput.trim()==="" || emailInput.trim()==="" || textArea.trim()===""){
        alert("Zehmet olmasa melumat elave edin!")
    }else{
        alert("Melumat ugurla gonderildi!")
    }

}

)




// const button = document.querySelector("button");

// button.addEventListener('click', async function() {

    
//     const data = {
//         name: textInput,
//     };

//    const url="https://jsonplaceholder.typicode.com/posts/1/comments"

//     const response=await fetch(url,{
//         method:"PATCH",
//         body:JSON.stringify(data)
//     })
//     if(textInput.trim()==="" || emailInput.trim()==="" || textArea.trim()===""){
//         alert("Zehmet olmasa melumat elave edin!")
//     }else{
//         alert("Melumat ugurla gonderildi!")
//     }
// }

// )




const deleteElement = document.querySelector(".delete");
deleteElement.addEventListener('click', async function() {
    const postId=5


   const url=`https://jsonplaceholder.typicode.com/posts/${postId}`

    const response=await fetch(url,{
        method:"DELETE",
    })
}

)
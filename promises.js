const clickBtn = document.querySelector(".btn");
const para = document.querySelector(".paragraph")


// walk the dog
const walkTheDog = () =>  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

                const didIt = false;

                if(didIt){
                    resolve("he walked the dog!!")
                }else{
                    reject("he didn't walk the dog!!")
                }
            }, 1500);
    });
}

clickBtn.addEventListener("click", () => {
    // Call the walkTheDog function when button is clicked
    
    walkTheDog().then((message) => {
        console.log("What James did: " + message);
        para.textContent = "Bonjourno " + message;
    }).catch((message) => {
        console.log("What james did: " + message);
        para.textContent = "Bonjourno " + message;
    });
});
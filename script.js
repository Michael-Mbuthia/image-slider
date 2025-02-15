const wrapper = document.querySelector(".wrapper"),
 container = document.querySelector(".container"),
 images = document.querySelectorAll(".img"),
 buttons = document.querySelectorAll(".button");

let imageIndex = 0,
intervalId;

//function to start automatic slider
const  autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};

//autoslide function on page load
autoSlide();

//updates container display to show the specified image
const slideImage = () => {
    /*if (imageIndex === images.length) {
        imageIndex = 0;
    } else if (imageIndex < 0) {
        imageIndex = images.length - 1;
    }*/
    
   //  imageIndex = imageIndex  === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
//console.log(container);
    container.style.transform = `translate(-${imageIndex * 100}%)`;

};

const updateClick = (e) => {
    clearInterval(intervalId); 

    imageIndex += e.target.id === "next" ? 1 : -1;
    console.log(imageIndex);
}

buttons.forEach((button) => button.addEventListener("click", updateClick));
//add event listner to stop autoslide
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
//add event listner to start auto sliding
wrapper.addEventListener("mouseleave", autoSlide);

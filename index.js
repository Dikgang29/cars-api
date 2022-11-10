const vehicleTemplateText = document.querySelector('.vehicleTemplate');
const colorTemplateText = document.querySelector('.colorTemplate');
const userTemplate = Handlebars.compile(vehicleTemplateText.innerText);

const usersElem = document.querySelector('.cars')

axios
    .get("http://api-tutor.herokuapp.com/v1/cars")
    .then(result => {
        const cars = result.data;
        
        usersElem.innerHTML = userTemplate({
            cars
        });

    });


    // axios
    // .get("http://api-tutor.herokuapp.com/v1/cars")
    // .then(result => {
    //     const carsColor = result.data;
        
    //     usersElem.innerHTML = userTemplate({
    //         carsColor
    //     });

    // });
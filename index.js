const vehicleTemplateText = document.querySelector('.vehicleTemplate');
const userTemplate = Handlebars.compile(vehicleTemplateText.innerText);

const usersElem = document.querySelector('.cars')

axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(result => {
        const cars = result.data;
        
        usersElem.innerHTML = userTemplate({
            cars
        });

    });


    //  color api
    const colorTemplateText = document.querySelector('.colorTemplate');
    const colorTemplate = Handlebars.compile(colorTemplateText.innerText);

    const colorElem = document.querySelector('.showColor')

    axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(result => {
        const carsColor = result.data;
        
        colorElem.innerHTML = colorTemplate({
            carsColor
        });

    });

     //  Brand api
     const brandTemplateText = document.querySelector('.brandTemplate');
     const brandTemplate = Handlebars.compile(brandTemplateText.innerText);
 
     const brandElem = document.querySelector('.showBrands');
 
     axios
     .get("https://api-tutor.herokuapp.com/v1/makes")
     .then(result => {
         const carBrand = result.data;
         
         brandElem.innerHTML = brandTemplate({
             carBrand
         });
 
     });

    
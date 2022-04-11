// gettin the user location

// getting the location picture from the second component

const location_picture = document.querySelector('.location')
let inputLocation = document.querySelector('.input-location')



location_picture.addEventListener('click', () => {
    
    
    const success = (position) => {
        const {latitude, longitude} = position.coords;

        
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        console.log('-------');



    }
    
    const error = (error) => {
        console.error('error');
    }
    
    navigator.geolocation.getCurrentPosition(success, error)

    

})


console.log(inputLocation);






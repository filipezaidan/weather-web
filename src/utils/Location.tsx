export const getLocation =  navigator.geolocation.getCurrentPosition((position : any) => {
     return position.coords;
    }, (err: any) => {
        console.log(`ERROR(${err.code}): ${err.message}`)
    });

    

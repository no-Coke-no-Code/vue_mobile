let defaultCity = "韶关";
try{
    if(localStorage.city)
    {
        defaultCity = localStorage.city;
    }
}
catch(e){}

export default {
    city:defaultCity,
}
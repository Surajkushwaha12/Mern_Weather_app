
// Submit Button code 
const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');

const data_hide = document.querySelector(".middle_layer");


const getInfo = async(event)=>{
     event.preventDefault(); // To prevent the page for unneccsary referesh 
     let cityval = cityName.value;
     if(cityval === ""){
         city_name.innerHTML = "Plz write the name before search";
         data_hide.classList.add("data_hide"); 
     }
     else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=a1cb2b16bab265641821d921d0803945`;
        const response = await fetch(url);
        const data =  await response.json();
        // console.log(data);
        const arrData = [data];

        city_name.innerHTML = `${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_real_val.innerHTML = arrData[0].main.temp;
       // temp_status.innerHTML = arrData[0].weather[0].main;

       temp_mood = arrData[0].weather[0].main;;
       //Condition to Check sunny or cloudy 
       if(temp_mood ==="clear")
       {
        temp_status.innerHTML =
         "<i class='fas fa-sun'  style ='color: #eccc68;'></i>";
       }
       else if(temp_mood ==="clouds")
       {
        temp_status.innerHTML =
         "<i class='fas fa-cloud'  style ='color: #f1f2f6;'></i>";
       }
       else if(temp_mood ==="Rain")
       {
        temp_status.innerHTML =
         "<i class='fas fa-rain'  style ='color: #a4b0be;'></i>";
       }
       else{
        temp_status.innerHTML =
         "<i class='fas fa-sun'  style ='color: #eccc68;'></i>";
       }

       data_hide.classList.remove("data_hide"); 
        }
        catch{
            city_name.innerHTML = `Plz enter the city name properly`;
            data_hide.classList.add("data_hide"); 
        }
     }
}

submitBtn.addEventListener('click', getInfo);


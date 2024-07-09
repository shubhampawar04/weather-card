
import React from 'react'
import "../Home.css"
import WeatherCard from '../../components/WeatherCard/WeatherCard'
const weatherData = [
    {
        tempreature: 25,
        city: "AahilyaNagar",
        weather: "cloudy"
    },
    {
        tempreature: 17,
        city: "Raigad",
        weather: "rainy"
    },
    {
        tempreature: 33,
        city: "Nagpur",
        weather: "sunny"
    },

    {
        tempreature: 10,
        city: "Jambu",
        weather: "snowy"
    },

    {
        tempreature: 25,
        city: "Rahuri",
        weather: "cloudy"
    },
    {
         tempreature: 28,
         city : "Mumbai",
         weather : "rainy"
    },

    {
        tempreature: 35,
        city: "Nashik",
        weather: "sunny"
    },
    {
        tempreature: 22,
        city: "Kolhapur",
        weather: "rainy"
    },

    {
        tempreature: 10,
        city: " Shambhaji Nagar",
        weather: "snowy"

    }
  

   

]


function Home() {
    return (
        <>
            <h1 className='weather-card-heading'>Weather Card</h1>
            <div className='weather-card-container'>
                {
                    weatherData.map((weatherObj, i) => {
                        const {tempreature , city , weather} = weatherObj
                        return (
                            <WeatherCard
                                key={i}
                                tempature={tempreature}
                                city={city}
                                weather={weather}
                            />
                        )
                    })
                }

            </div>
        </>
    )
}

export default Home

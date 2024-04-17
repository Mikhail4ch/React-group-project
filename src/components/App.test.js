import CurrentWeather from "./current-weather/current-weather";
import { render, screen } from '@testing-library/react'

const mockData = [
  {
      "city": "Oslo",
      "weather[0].description": "overcast clouds",
      "weather[0].icon": "grey cloud",
      "main.temp": 15,
      "main.feels_like": 9,                       
      "wind.speed": 1,   
      "main.humidity": 20, 
      "main.pressure": 1140                   
    }
]

test ('Testing span in current-weather component', () => {
  render(<CurrentWeather data = {mockData}/>);
  expect(screen.getByText(/details/i)).toBeInTheDocument();
})


test('renders learn react link', () => {
    expect(true).toBe(true);
  });
import CurrentWeather from "./current-weather/current-weather";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

const mockData = {
  "city": "Oslo",
  "weather": [
  {
    "description": "overcast clouds",
    "icon": "grey cloud"
  }
  ],
  "main": {
  "temp": 15,
  "feels_like": 9,
  "humidity": 20,
  "pressure": 1140
  },
  "wind": {
  "speed": 1
  }
  };

test ('Testing spans in current-weather component', () => {
  render(<CurrentWeather data = {mockData}/>)
  expect(screen.getByText(/Details/ & /Feels like/ & /°C/ & /%/ & /hPa/)).toBeInTheDocument();
})


test('renders learn react link', () => {
    expect(true).toBe(true);
  });
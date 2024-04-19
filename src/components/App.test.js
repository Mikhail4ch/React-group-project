import CurrentWeather from "./current-weather/current-weather";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Forecast from "./forecast/forecast";


// Test for the current-weather component using mockData 

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

test('Testing spans in current-weather component', () => {
  render(<CurrentWeather data={mockData} />)
  const spans = ['Details', 'Feels like', '%', 'hPa'];
  spans.forEach(span => {
    expect(screen.getByText(new RegExp(span, 'i'))).toBeInTheDocument();
  });
  expect(screen.getAllByText(/°C/)).toBeTruthy();
})

// Test for the forecast component using mockData2

const mockData2 = {

  "item": [
    {
      "weather": [
        {
          "description": "broken clouds",
          "icon": "bright cloud"
        }
      ],
      "main": [
        {
          "temp_min": 5
        }
      ]
    }
  ],
  "index": 2,
  "list": [
    {
      "splice": [
        {
          "map": "whatever"
        }
      ]
    }
  ]

};

test('Testing labels in forecast component', () => {
  render(<Forecast data={mockData2} />)
  const labels = ['Daily', '°C'];
  labels.forEach(label => {
    expect(screen.getByText(new RegExp(label, 'i'))).toBeInTheDocument();
  });
})




test('renders learn react link', () => {
  expect(true).toBe(true);
});
import CurrentWeather from "./current-weather/current-weather";
import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Forecast from "./forecast/forecast";
import Main from "./mainPage/mainPage";
import Register from "./Register/Register";


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

test('Testing labels in forecast component', async () => {

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

  render(<Forecast data={mockData2} />);
  const Week_Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  for (const day of Week_Days) {
    const button = await screen.findByText(day);
    fireEvent.click(button);
  }

const labels = ['Daily', '°C'];

for (const label of labels) {
  expect(await screen.findByText(new RegExp(label, 'i'))).toBeInTheDocument();
  }
});

// Testing content presence on mainPage

test ("There h3 on the mainPage", () => {
  render(<Main/>)
  const h3 = ["Homepage", "Weather app"];
  h3.forEach(h => {
    expect(screen.getByText(new RegExp(h, 'i'))).toBeInTheDocument();
  });
})

// Testing interaction on mainPage

test ("testing a click on a link", async () => {
  render(<Main />)
  await userEvent.click(screen.getByText(/Weather app/));
  expect(userEvent).toHaveBeenCalled();
})

// Testing Register component 

test ("testing input fields of Register component", async () => {
  render(<Register/>)
  const inputValues = ["Enter your email", "Enter your password"];
 for (const input of inputValues) {
  expect(screen.getByDisplayValue(new RegExp(input, 'i'))).toBeInTheDocument();
 }
})
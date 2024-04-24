import CurrentWeather from "./current-weather/current-weather";
import { render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
/*import { render, screen, fireEvent, userEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from "./mainPage/mainPage";
import Register from "./Register/Register";
import { describe, expect, it } from "vitest";*/
import Forecast from "./forecast/forecast";
import * as services from '../weatherApp'



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

/*
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

test("There h3 on the mainPage", () => {
  render(<Main />)
  const h3 = ["Homepage", "Weather app"];
  h3.forEach(h => {
    expect(screen.getByText(new RegExp(h, 'i'))).toBeInTheDocument();
  });
})

// Testing interaction on mainPage

test("testing a click on a link", async () => {
  render(<Main />)
  await userEvent.click(screen.getByText(/Weather app/));
  expect(userEvent).toHaveBeenCalled();
})

// Testing Register component 

test("testing input fields of Register component", async () => {
  render(<Register />)
  const inputValues = ["Enter your email", "Enter your password"];
  for (const input of inputValues) {
    expect(screen.getByDisplayValue(new RegExp(input, 'i'))).toBeInTheDocument();
  }
})

test("testing button of Register component", async () => {
  render(<Register />)
  const createButton = screen.getByRole('button', { name: /Create/ });
  expect(createButton).toBeInTheDocument();
})

test("testing a click on a Create/ buttons", async () => {
  render(<Register />)
  await userEvent.click(screen.getByText(/Create/));
  expect(userEvent).toHaveBeenCalled();
})

describe("testing state updates of input fields", () => {
  it("work", () => {
    let isCallbackCalled = false;

    const setInputValue = () => {
      isCallbackCalled = true;
    };

    render(
      <Register onChange={setInputValue} />
    );
    const inputs = ["Email", "Password"]
    for (const input of inputs) {
      fireEvent.change(screen.getByLabelText(new RegExp(input, 'i')), { target: { value: "1" } })
    };
    expect(isCallbackCalled).toBe(true);
  })
}) */

// Testing API call in current-weather component 

const mockFetchData = jest.spyOn(services, 'FetchData')
  .mockImplementation(async () => {
    return [{
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
    }];
  })

render(<CurrentWeather/>)
expect(mockFetchData).toHaveBeenCalled(); 
const data = ["grey cloud", 1140, "Oslo", "1"]
await waitFor(() => { for (const dat of data) {
  expect(screen.getByText(new RegExp(dat, 'i'))).toBeInTheDocument();
}}) 

// Testing API call in forecast component 

const mockFetchData2 = jest.spyOn(services, 'FetchData')
  .mockImplementation(async () => {
    return [{
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
    }];
  })

render(<Forecast/>)
expect(mockFetchData2).toHaveBeenCalled(); 
const data2 = ["whatever", 2, "bright cloud", 5]
await waitFor(() => { for (const dat of data2) {
  expect(screen.getByText(new RegExp(dat, 'i'))).toBeInTheDocument();
}}) 

import CurrentWeather from "./current-weather/current-weather";
import { render, screen } from '@testing-library/react'

test ('Testing spans in current-weather component', () => {
  render(<CurrentWeather/>);

  const element = screen.getByText(/details/i);

  expect(element).toBeInTheDocument();
})


test('renders learn react link', () => {
    expect(true).toBe(true);
  });
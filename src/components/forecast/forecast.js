import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading } from "react-accessible-accordion";
import "./forecast.css";

const Week_Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = Week_Days.slice(dayInAWeek, Week_Days.length).concat(Week_Days.slice(0, dayInAWeek));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton >
                                <div role = "button" className="daily-item">
                                    <img alt="weather" className="icon-mini" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}
export default Forecast;
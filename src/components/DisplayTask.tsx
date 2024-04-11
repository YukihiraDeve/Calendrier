import React from 'react';


type TableProps = {
    hours: string[];
    days: string[];
}

const DisplayTask: React.FC<TableProps> = ({ hours, days }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Heure / Jour</th>
                    {days.map(day => <th key={day}>{day}</th>)}
                </tr>
            </thead>
            <tbody>
                {hours.map(hour => (
                    <tr key={hour}>
                        <td>{hour}</td>
                        {days.map(day => <td key={`${day}-${hour}`}>{`${hour} - ${day}`}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

function App() {
    const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

    return (
        <div className="App">
            <DisplayTask hours={hours} days={days} />
        </div>
    );
}

export default App;

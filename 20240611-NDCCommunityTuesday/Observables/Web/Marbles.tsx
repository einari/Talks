import React, { useState, ReactNode } from 'react';
import { ReplaySubject } from 'rxjs';
import { ToggleButton } from './ToggleButton';
import { MarbleLine } from './MarbleLine';
import './Marbles.css';

export interface Line {
    title: string;
    types: string[];
}

export interface Event {
    title: string;
    type: string;
}

const events: Event[] = [
    { title: 'OnboardingStarted', type: 'a' },
    { title: 'OnboardingCompleted', type: 'b' },
    { title: 'AddressSet', type: 'c' },
    { title: 'PasswordChanged', type: 'd' },
];

export const Marbles = () => {
    const [subject] = useState<ReplaySubject<string>>(new ReplaySubject<string>());
    const [lines, setLines] = useState<Line[]>([]);
    const [selectedEvents, setSelectedEvents] = useState({});

    const addObserver = () => {
        setLines([...lines, { title: `Observer ${lines.length}`, types: Object.keys(selectedEvents) }]);
    };

    return (
        <div>
            <div className='marble-actions'>

                <div>
                    <h1>Append Events</h1>
                    <div className="marble-legend">
                        {events.map((event, index) => (
                            <button key={index} onClick={() => subject.next(event.type)} className='marble-legend-button'>
                                <span className={`marble ${event.type}`}>{event.type}</span>
                                <span>{event.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <h1>Observe Events</h1>
                    <div className="marble-legend">
                        {events.map((event, index) => (
                            <ToggleButton key={index} onToggle={(isToggled) => {
                                if (isToggled) {
                                    setSelectedEvents({ ...selectedEvents, [event.type]: true });
                                } else {
                                    delete selectedEvents[event.type];
                                    setSelectedEvents({ ...selectedEvents });
                                }
                            }}>
                                <span className={`marble ${event.type}`}>{event.type}</span>
                                <span>{event.title}</span>
                            </ToggleButton>
                        ))}
                    </div>
                    <button style={{ color: "black"}} onClick={addObserver}>Add observer</button>
                </div>
            </div>
            <MarbleLine title='Event Log' subject={subject} />
            {lines.map((line, index) => <MarbleLine key={index} title={line.title} types={line.types} subject={subject} />)}
        </div>
    );
};

import React, { useEffect, useState } from 'react';
import { ReplaySubject, concatMap, scan, delay, of } from 'rxjs';
import MarbleDiagram from './MarbleDiagram';
import { Marble } from './Marble';
import './MarbleLine.css';

export interface MarbleLineProps {
    title: string;
    subject: ReplaySubject<string>;
    types?: string[]
}

export const MarbleLine = ({ title, subject, types }: MarbleLineProps) => {
    const [marbles, setMarbles] = useState('');

    useEffect(() => {
        subject.pipe(
            scan((acc, value) => {
                if (types == undefined || types.includes(value)) {
                    return acc + value;
                } else {
                    return acc + '-';
                }
            }, ''),
            concatMap((value) => of(value).pipe(delay(500))),
        ).subscribe((value) => setMarbles(value));
    }, []);

    return (
        <div>
            <hr></hr>
            <h1 className={'marble-line-header'}>
                {title}
                &nbsp;
                &nbsp;
                Event Types:
                {types?.map((type) => {
                    return (
                        <Marble key={type} char={type} />
                    );
                })}
            </h1>
            <MarbleDiagram diagram={marbles} />
            &nbsp;
        </div>
    );
};

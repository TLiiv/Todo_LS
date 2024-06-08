import * as React from 'react';
import { Hero } from '../Components/Hero';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <div>
        <Hero />
    </div>
  );
}

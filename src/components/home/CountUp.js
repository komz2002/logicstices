
import React, { useEffect, useState } from 'react';

const CountUp = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; 
    const stepTime = 10; 
    const stepCount = Math.ceil(duration / stepTime);
    const stepValue = endValue / stepCount;

    const interval = setInterval(() => {
      start += stepValue;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [endValue]);

  return <div>{count}</div>;
};

export default CountUp;

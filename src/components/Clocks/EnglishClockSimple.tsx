import * as React from 'react';
import * as Clock from '../../utils/clockUtils';
import { useTime } from '../../contexts/ClockContext';
import { Wrapper, Meters } from './ClockElements';

export const EnglishClockSimple = () => {
  const { time } = useTime();
  const { hour, minute, second } = time;

  return (
    <Wrapper size={48} tightTracking tightLeading>
      <div className="row">
        <span data-active>I T</span> <span>X</span> <span data-active>I S</span>{' '}
        <span>T</span>{' '}
        <span data-active={Clock.roundedMinute(minute, 30)}>H A L F</span>{' '}
        <span data-active={Clock.roundedMinute(minute, 10)}>T E N</span>
      </div>
      <div className="row">
        <span data-active={Clock.roundedMinute(minute, 15)}>Q U A R T E R</span>{' '}
        <span
          data-active={
            Clock.roundedMinute(minute, 20) || Clock.roundedMinute(minute, 25)
          }
        >
          T W E N T Y
        </span>
      </div>
      <div className="row">
        <span
          data-active={
            Clock.roundedMinute(minute, 5) || Clock.roundedMinute(minute, 25)
          }
        >
          F I V E
        </span>{' '}
        <span>Q</span>{' '}
        <span
          data-active={
            !Clock.roundedMinute(minute, 0) &&
            !Clock.roundedMinute(minute, 15) &&
            !Clock.roundedMinute(minute, 30)
          }
        >
          M I N U T E S
        </span>{' '}
        <span>R</span>
      </div>
      <div className="row">
        <span data-active={Clock.isRoughlyBefore30(minute)}>P A S T</span>{' '}
        <span>R A M I S</span>{' '}
        <span
          data-active={
            !Clock.isRoughlyBefore30(minute) && !Clock.roundedMinute(minute, 0)
          }
        >
          T O
        </span>{' '}
        <span>N E</span>
      </div>
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute, 34) === 1}>
          O N E
        </span>{' '}
        <span>X</span>{' '}
        <span data-active={Clock.displayHour(hour, minute, 34) === 2}>
          T W O
        </span>{' '}
        <span>R</span>{' '}
        <span data-active={Clock.displayHour(hour, minute, 34) === 3}>
          T H R E E
        </span>
      </div>
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute, 34) === 4}>
          F O U R
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute, 34) === 5}>
          F I V E
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute, 34) === 7}>
          S E V E N
        </span>
      </div>
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute, 34) === 6}>
          S I X
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute, 34) === 8}>
          E I G H T
        </span>{' '}
        <span>Y</span>{' '}
        <span data-active={Clock.displayHour(hour, minute, 34) === 9}>
          N I N E
        </span>
      </div>
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute, 34) === 10}>
          T E N
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute, 34) === 11}>
          E L E V E N
        </span>{' '}
        <span>W O R D</span>
      </div>
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute, 34) === 12}>
          T W E L V E
        </span>{' '}
        <span>R</span>{' '}
        <span data-active={minute >= 0 && minute < 5}>O C L O C K</span>{' '}
      </div>
      <Meters minute={minute} second={second} />
    </Wrapper>
  );
};

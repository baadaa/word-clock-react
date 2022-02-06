import * as React from 'react';
import * as Clock from '../../utils/clockUtils';
import { useTime } from '../../contexts/ClockContext';
import { Wrapper } from './ClockElements';

export const EnglishClockComplex = ({ currentYear = '2022' }) => {
  const { time } = useTime();
  const { hour, minute, second } = time;
  return (
    <Wrapper size={27}>
      <div className="row">
        <span data-active>T H E</span> <span>H</span>{' '}
        <span data-active>T I M E</span> <span>X</span>{' '}
        <span data-active>I S</span> <span>E</span>{' '}
        <span data-active={Clock.exactMinute(minute, 30)}>H</span>{' '}
        <span
          data-active={
            Clock.exactMinute(minute, 30) || Clock.exactMinute(minute, 15)
          }
        >
          A
        </span>{' '}
        <span data-active={Clock.exactMinute(minute, 30)}>L F</span>
      </div>
      <div className="row">
        <span data-active={Clock.exactMinute(minute, 15)}>Q U A R T E R</span>{' '}
        <span data-active={Clock.exactMinute(minute, 20)}>T W E N T Y</span>{' '}
        <span>T X J</span>
      </div>
      <div className="row">
        <span data-active={Clock.exactMinute(minute, 10)}>T E N</span>{' '}
        <span
          data-active={
            Clock.exactMinute(minute, 16) || Clock.exactMinute(minute, 6)
          }
        >
          S I X
        </span>{' '}
        <span data-active={Clock.exactMinute(minute, 16)}>T E E N</span>{' '}
        <span data-active={Clock.exactMinute(minute, 2)}>T W</span>{' '}
        <span
          data-active={
            Clock.exactMinute(minute, 2) || Clock.exactMinute(minute, 1)
          }
        >
          O
        </span>{' '}
        <span data-active={Clock.exactMinute(minute, 1)}>N E </span>{' '}
        <span>Z</span>
      </div>
      <div className="row">
        <span data-active={Clock.exactMinute(minute, 8)}>E I G H T</span>{' '}
        <span data-active={Clock.exactMinute(minute, 18)}>E E N</span>{' '}
        <span data-active={Clock.exactMinute(minute, 5)}>F I V E</span>{' '}
        <span>R X A Q</span>
      </div>
      <div className="row">
        <span
          data-active={
            Clock.exactMinute(minute, 7) || Clock.exactMinute(minute, 17)
          }
        >
          S E V E N
        </span>{' '}
        <span data-active={Clock.exactMinute(minute, 17)}>T E E</span>{' '}
        <span
          data-active={
            Clock.exactMinute(minute, 17) || Clock.exactMinute(minute, 9)
          }
        >
          N
        </span>{' '}
        <span data-active={Clock.exactMinute(minute, 9)}>I N E</span>{' '}
        <span data-active={Clock.exactMinute(minute, 19)}>T E E N</span>{' '}
      </div>
      <div className="row">
        <span
          data-active={
            Clock.exactMinute(minute, 4) || Clock.exactMinute(minute, 14)
          }
        >
          F O U R
        </span>{' '}
        <span data-active={Clock.exactMinute(minute, 14)}>T E E N</span>{' '}
        <span data-active={Clock.exactMinute(minute, 13)}>T H I R T E E N</span>{' '}
      </div>
      <div className="row">
        <span data-active={Clock.exactMinute(minute, 12)}>T W E L V</span>{' '}
        <span
          data-active={
            Clock.exactMinute(minute, 12) || Clock.exactMinute(minute, 11)
          }
        >
          E
        </span>{' '}
        <span data-active={Clock.exactMinute(minute, 11)}>L E V E N</span>{' '}
        <span data-active={Clock.exactMinute(minute, 3)}>T H R E E</span>{' '}
      </div>
      <div className="row">
        <span
          data-active={
            !Clock.exactMinute(minute, 0) &&
            !Clock.exactMinute(minute, 30) &&
            !Clock.exactMinute(minute, 15)
          }
        >
          M I N U T E
        </span>{' '}
        <span
          data-active={
            !Clock.exactMinute(minute, 0) &&
            !Clock.exactMinute(minute, 15) &&
            !Clock.exactMinute(minute, 30) &&
            minute !== 1 &&
            minute !== 59
          }
        >
          S
        </span>{' '}
        <span>X</span> <span data-active={Clock.isBefore30(minute)}>P A S</span>{' '}
        <span data-active={!Clock.exactMinute(minute, 0)}>T</span>{' '}
        <span
          data-active={
            !Clock.isBefore30(minute) && !Clock.exactMinute(minute, 0)
          }
        >
          O
        </span>{' '}
        <span>P T K</span>{' '}
      </div>
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute) === 2}>T W</span>{' '}
        <span
          data-active={
            Clock.displayHour(hour, minute) === 2 ||
            Clock.displayHour(hour, minute) === 1
          }
        >
          O
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute) === 1}>N</span>{' '}
        <span
          data-active={
            Clock.displayHour(hour, minute) === 1 ||
            Clock.displayHour(hour, minute) === 11
          }
        >
          E
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute) === 11}>
          L E V E
        </span>{' '}
        <span
          data-active={
            Clock.displayHour(hour, minute) === 11 ||
            Clock.displayHour(hour, minute) === 9
          }
        >
          N
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute) === 9}>I N E</span>{' '}
        <span data-active={Clock.displayHour(hour, minute) === 6}>S I X</span>{' '}
      </div>
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute) === 7}>
          S E V E N
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute) === 3}>
          T H R E E
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute) === 12}>
          T W E L V E
        </span>{' '}
      </div>
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute) === 4}>F O U R</span>{' '}
        <span>X</span>{' '}
        <span data-active={Clock.displayHour(hour, minute) === 5}>F I V</span>{' '}
        <span
          data-active={
            Clock.displayHour(hour, minute) === 5 ||
            Clock.displayHour(hour, minute) === 8
          }
        >
          E
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute) === 8}>I G H</span>{' '}
        <span
          data-active={
            Clock.displayHour(hour, minute) === 8 ||
            Clock.displayHour(hour, minute) === 10
          }
        >
          T
        </span>{' '}
        <span data-active={Clock.displayHour(hour, minute) === 10}>E N</span>{' '}
        <span>T</span>{' '}
      </div>
      <div className="row">
        <span data-active={Clock.exactMinute(minute, 0)}>O C L O C K</span>{' '}
        <span>X </span>
        <span
          data-active={
            !Clock.isNight(hour) && Clock.displayHour(hour, minute) !== 12
          }
        >
          I N
        </span>{' '}
        <span data-active={Clock.isNight(hour)}>A T</span>{' '}
        <span>Z {currentYear}</span>{' '}
      </div>
      <div className="row">
        <span data-active={Clock.isNight(hour)}>N I G H</span>{' '}
        <span data-active={!Clock.isNoon(hour, minute)}>T</span>{' '}
        <span data-active={!Clock.isNight(hour) && !Clock.isNoon(hour, minute)}>
          H E
        </span>{' '}
        <span>R</span>{' '}
        <span
          data-active={Clock.isMorning(hour) && !Clock.isNoon(hour, minute)}
        >
          M O R N I N G
        </span>{' '}
        <span>B</span>
      </div>
      <div className="row">
        <span data-active={Clock.isEvening(hour)}>E V E N I N G</span>{' '}
        <span
          data-active={
            Clock.isAfternoon(hour) && Clock.displayHour(hour, minute) !== 12
          }
        >
          A F T E R
        </span>{' '}
        <span
          data-active={Clock.isAfternoon(hour) || Clock.isNoon(hour, minute)}
        >
          N O O N
        </span>
      </div>
      <div className="row">
        <span>P E R K O N X O F F U Y S Y N C</span>
      </div>
      <div className="row">
        {[0, 1, 2, 3, 4, 5].map((num, i) => {
          const digit1 = second < 10 ? 0 : Math.floor(second / 10);
          return (
            <span key={i} className="sec-1" data-active={num === digit1}>
              {num}{' '}
            </span>
          );
        })}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => {
          const digit2 = second % 10;
          return (
            <span key={i} className="sec-1" data-active={num === digit2}>
              {num}{' '}
            </span>
          );
        })}
      </div>
    </Wrapper>
  );
};

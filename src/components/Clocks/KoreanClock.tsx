import * as React from 'react';
import * as Clock from '../../utils/clockUtils';
import { useTime } from '../../contexts/ClockContext';
import { Wrapper, Meters } from './ClockElements';

export const KoreanClock = () => {
  const { time } = useTime();
  const { hour, minute, second } = time;

  return (
    <Wrapper size={90} tightLeading font="'Noto Sans KR', sans-serif">
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute, 59) >= 10}>열</span>
        <span
          data-active={
            Clock.displayHour(hour, minute, 59) === 1 ||
            Clock.displayHour(hour, minute, 59) === 11
          }
        >
          한
        </span>
        <span data-active={Clock.displayHour(hour, minute, 59) === 5}>다</span>
        <span data-active={Clock.displayHour(hour, minute, 59) === 3}>세</span>
        <span data-active={Clock.displayHour(hour, minute, 59) === 4}>네</span>
      </div>
      <div className="row">
        <span
          data-active={
            Clock.displayHour(hour, minute, 59) === 2 ||
            Clock.displayHour(hour, minute, 59) === 12
          }
        >
          두
        </span>
        <span data-active={Clock.displayHour(hour, minute, 59) === 6}>여</span>
        <span
          data-active={
            Clock.displayHour(hour, minute, 59) === 5 ||
            Clock.displayHour(hour, minute, 59) === 6
          }
        >
          섯
        </span>
        <span data-active={Clock.displayHour(hour, minute, 59) === 7}>
          일곱
        </span>
      </div>
      <div className="row">
        <span data-active={Clock.displayHour(hour, minute, 59) === 8}>
          여덟
        </span>
        <span data-active={Clock.displayHour(hour, minute, 59) === 9}>
          아홉
        </span>
        <span data-active>시</span>
      </div>
      <div className="row">
        <span data-active={hour === 0 && minute < 5}>자</span>
        <span
          data-active={Clock.displayHour(hour, minute, 59) === 12 && minute < 5}
        >
          정
        </span>
        <span data-active={minute >= 20 && minute < 30}>이</span>
        <span data-active={minute >= 30 && minute < 40}>삼십</span>
      </div>
      <div className="row">
        <span data-active={minute >= 40 && minute < 50}>사</span>
        <span data-active={(hour === 12 && minute < 5) || minute >= 50}>
          오
        </span>
        <span data-active={minute >= 10 && !(minute >= 30 && minute < 40)}>
          십
        </span>
        <span
          data-active={
            (minute >= 5 && minute < 10) ||
            (minute >= 15 && minute < 20) ||
            (minute >= 25 && minute < 30) ||
            (minute >= 35 && minute < 40) ||
            (minute >= 45 && minute < 50) ||
            minute >= 55
          }
        >
          오
        </span>
        <span data-active={minute >= 5}>분</span>
      </div>
      <Meters minute={minute} second={second} />
    </Wrapper>
  );
};

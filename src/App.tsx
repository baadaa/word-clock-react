import * as React from 'react';
import * as Clock from './utils/clockUtils';
import { Time, TimeContext } from './contexts/ClockContext';
import { ForkMe } from './components/Icons';
import Config from './components/Clocks/Config';
import {
  KoreanClock,
  EnglishClockSimple,
  EnglishClockComplex,
  ToyInput,
} from './components/Clocks';

function App() {
  const [language, setLanguage] = React.useState('English (Simple)');
  const [isToy, setIsToy] = React.useState(false);
  const [now, setNow] = React.useState(Clock.getTime());
  const [hour, setHour] = React.useState(now.hour);
  const [minute, setMinute] = React.useState(now.minute);
  const [second] = React.useState(now.second);
  const [time, setTime] = React.useState<Time>({ hour, minute, second });
  const currentTime = { time, setTime };
  const currentYear = new Date().getFullYear().toString().split('').join(' ');

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setNow(Clock.getTime());
    }, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  React.useEffect(() => {
    if (isToy) {
      setTime({ hour, minute, second: now.second });
    } else {
      setTime({ hour: now.hour, minute: now.minute, second: now.second });
    }
  }, [isToy, now, hour, minute, second]);
  return (
    <TimeContext.Provider value={currentTime}>
      <a
        href="https://github.com/baadaa/word-clock-react"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <ForkMe />
      </a>
      <div
        style={{
          display: 'flex',
          margin: 0,
          padding: 0,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Config
          currentLanguage={language}
          setAppLanguage={setLanguage}
          isToy={isToy}
          setIsToy={setIsToy}
        />
        {language === 'Korean (Simple)' && <KoreanClock />}
        {language === 'English (Simple)' && <EnglishClockSimple />}
        {language === 'English (Sophisticated)' && (
          <EnglishClockComplex currentYear={currentYear} />
        )}
        {isToy && (
          <ToyInput
            hour={hour}
            setHour={setHour}
            minute={minute}
            setMinute={setMinute}
          />
        )}
      </div>
      <footer style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
        &copy; {new Date().getFullYear()} by{' '}
        <a href="https://bald.design" style={{ color: 'inherit' }}>
          Bumhan Yu
        </a>
      </footer>
    </TimeContext.Provider>
  );
}

export default App;

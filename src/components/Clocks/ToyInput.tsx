import * as React from 'react';
import styled from 'styled-components';

const ToyStyles = styled.div`
  order: -1;
  margin-bottom: 20px;
  font-size: 15px;
  span {
    font-size: 10px;
    font-weight: 600;
  }
  input {
    text-align: center;
    width: 45px;
    font-size: 16px;
    padding: 10px;
    color: var(--text-color);
    background-color: var(--clock-bg);
    border: 1px solid var(--meter-tick);
  }
`;

type ToyInputProps = {
  hour: number;
  setHour: (value: number) => void;
  minute: number;
  setMinute: (value: number) => void;
};
export const ToyInput: React.FC<ToyInputProps> = ({
  hour,
  setHour,
  minute,
  setMinute,
}) => {
  const handleHourChange = (
    e: React.SyntheticEvent & { target: HTMLInputElement }
  ) => {
    if (e.target.value === '') setHour(0);
    const hr = parseFloat(e.target.value);
    if (hr >= 0 && hr < 24) setHour(hr);
  };
  const handleMinuteChange = (
    e: React.SyntheticEvent & { target: HTMLInputElement }
  ) => {
    if (e.target.value === '') setMinute(0);
    const min = parseFloat(e.target.value);
    if (min >= 0 && min < 60) setMinute(min);
  };

  return (
    <ToyStyles>
      <label htmlFor="hr">
        HH:
        <input
          type="text"
          name="hr"
          id="hr"
          value={hour}
          onChange={handleHourChange}
        />
      </label>{' '}
      <label htmlFor="min">
        MM:
        <input
          type="text"
          name="min"
          id="min"
          value={minute}
          onChange={handleMinuteChange}
        />
      </label>{' '}
      <span>(Use 24-hour format)</span>
    </ToyStyles>
  );
};

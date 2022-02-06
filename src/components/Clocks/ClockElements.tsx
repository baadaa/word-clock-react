import * as React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  size: number;
  font?: string;
  tightTracking?: boolean;
  tightLeading?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  --font-size: ${props => props.size}px;
  font-family: ${props =>
    props.font ? props.font : '"Fira Code", Courier, monospace'};
  font-size: var(--font-size);
  color: var(--text-color);
  text-align: center;
  margin: 0 auto;
  letter-spacing: ${props => (props.tightTracking ? '-0.175em' : '0.05em')};
  line-height: ${props => (props.tightLeading ? 1 : 1.35)};
  padding: 0.8em;
  box-shadow: var(--pale-shadow);
  background-color: var(--clock-bg);
  border-radius: 0.2em;
  span {
    opacity: 0.2;
    text-transform: uppercase;
  }
  span[data-active='true'] {
    opacity: 1;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    --font-size: ${props => props.size * 0.85}px;
  }
  @media screen and (max-width: 640px) {
    --font-size: ${props => props.size * 0.75}px;
  }
  @media screen and (max-width: 550px) {
    --font-size: ${props => props.size * 0.65}px;
  }
  @media screen and (max-width: 480px) {
    --font-size: ${props => props.size * 0.6}px;
  }
  @media screen and (max-width: 430px) {
    --font-size: ${props => props.size * 0.5}px;
  }
`;

type MeterPros = {
  minute: number;
  second: number;
};

export const Meters: React.FC<MeterPros> = ({ minute, second }) => (
  <>
    {[
      {
        type: 'min',
        width: (minute % 5) / 4,
      },
      {
        type: 'sec',
        width: second / 60,
      },
    ].map(item => (
      <div className={`meterContainer ${item.type}`}>
        <div
          className={`meter ${item.type}`}
          style={{
            width: `${item.width * 100}%`,
          }}
        ></div>
      </div>
    ))}
  </>
);

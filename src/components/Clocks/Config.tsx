import * as React from 'react';

import styled from 'styled-components';
import { IconCog, IconClose } from '../Icons';

const ConfigStyle = styled.div`
  position: fixed;
  top: 15px;
  right: 0;
  left: 0;
  margin: 0;
  padding: 0 5px;
  z-index: 999;
  .wrapper {
    margin: 0 20px 0;
    position: relative;
    display: flex;
    justify-content: flex-end;
    .icon {
      width: 24px;
      height: 24px;
      position: relative;
      span {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        width: 24px;
        height: 24px;
      }
    }
    button {
      border: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0;
      margin: 0;
      background: transparent;
      .close {
        opacity: 0;
      }
      .cog {
        opacity: 1;
      }
      &[data-open='true'] {
        svg {
          transform: rotate(90deg);
        }
        .close {
          opacity: 1;
        }
        .cog {
          opacity: 0;
        }
      }
    }
  }
  .labelWrapper {
    display: flex;
    align-items: center;
    label + label {
      margin-left: 15px;
    }
  }
  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--bg);
    margin: 15px 0;
  }
  .options {
    position: absolute;
    top: 40px;
    right: 0;
    opacity: 0;
    transform: translateY(-30px);
    pointer-events: none;
    display: flex;
    flex-direction: column;
    background-color: var(--menu-bg);
    box-shadow: none;
    border-radius: 1em;
    padding: 16px;
    input,
    label {
      cursor: pointer;
    }
    input {
      margin: 0 6px 0 0;
    }
    label {
      display: flex;
      align-items: center;
      line-height: 1;
    }
    .languageChange + .languageChange {
      margin-top: 10px;
    }
  }
  .options[data-active='true'] {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
    box-shadow: var(--hover-shadow);
  }
`;
type ConfigProps = {
  currentLanguage: string;
  setAppLanguage: (value: string) => void;
  isToy: boolean;
  setIsToy: (value: boolean) => void;
};
const Config: React.FC<ConfigProps> = ({
  currentLanguage,
  setAppLanguage,
  isToy,
  setIsToy,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const [language, setLanguage] = React.useState(currentLanguage);
  const handleClick = (
    e: React.SyntheticEvent & { target: HTMLInputElement }
  ) => {
    const target = e.target.value;
    setLanguage(target);
    setAppLanguage(target);
  };
  React.useEffect(() => {
    if (typeof window === undefined) return;
    window.addEventListener('keydown', e =>
      e.code === 'Escape' && isOpen ? setIsOpen(false) : null
    );
  });
  React.useEffect(() => {
    if (isDark) {
      document.querySelector('body')!.classList.add('dark');
    } else {
      document.querySelector('body')!.classList.remove('dark');
    }
  }, [isDark]);
  return (
    <ConfigStyle>
      <div className="wrapper">
        <button onClick={() => setIsOpen(!isOpen)} data-open={isOpen}>
          <h1>{language === 'Korean (Simple)' ? '한글 시계' : 'Word Clock'}</h1>
          <div className="icon">
            <span className="cog">
              <IconCog />
            </span>
            <span className="close">
              <IconClose />
            </span>
          </div>
        </button>
        <div className="options" data-active={isOpen}>
          <h3>Language</h3>
          {[
            'English (Simple)',
            'English (Sophisticated)',
            'Korean (Simple)',
          ].map(item => (
            <React.Fragment key={item}>
              <label className="languageChange" htmlFor={item} data-id={item}>
                <input
                  type="radio"
                  id={item}
                  name="sectionSelector"
                  value={item}
                  checked={language === item}
                  onChange={handleClick}
                  tabIndex={0}
                />
                {item}
              </label>
            </React.Fragment>
          ))}
          <hr />
          <h3>Color Mode</h3>
          <div className="labelWrapper">
            {[
              { mode: 'Light', isDark: false },
              { mode: 'Dark', isDark: true },
            ].map(item => (
              <React.Fragment key={item.mode}>
                <label
                  className="colorModeChange"
                  htmlFor={item.mode}
                  data-id={item.mode}
                >
                  <input
                    type="radio"
                    id={item.mode}
                    name="colorModeSelector"
                    value={item.mode}
                    checked={isDark === item.isDark}
                    onChange={() =>
                      item.isDark ? setIsDark(true) : setIsDark(false)
                    }
                    tabIndex={0}
                  />
                  {item.mode}
                </label>
              </React.Fragment>
            ))}
          </div>
          <hr />
          <div className="labelWrapper">
            <label
              className="colorModeChange"
              htmlFor="toymode"
              data-id="toymode"
            >
              <input
                type="checkbox"
                id="toymode"
                name="colorModeSelector"
                value="toymode"
                checked={isToy}
                onChange={() => setIsToy(!isToy)}
                tabIndex={0}
              />
              <h3 style={{ margin: 0 }}>Turn on Toy Mode</h3>
            </label>
          </div>
        </div>
      </div>
    </ConfigStyle>
  );
};

export default Config;

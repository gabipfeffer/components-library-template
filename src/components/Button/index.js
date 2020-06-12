import React from 'react';
import cs from 'classnames';

import s from './button.pcss';

const styleLookups = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  download: 'btn-download'
};

function Button({ type, children, onClick, small, isLive }) {
  return (
    <button
      className={cs(s.btn, {
        [s[styleLookups[type]]]: type,
        [s.small]: small,
        [s.live]: isLive
      })}
      onClick={onClick}>
      <span className={s.content}>{children}</span>
    </button>
  );
}

export default Button;
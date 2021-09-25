import { useCallback } from 'react';

export const Button = (props) => {
  const { src, title, children } = props;
  const handleClick = useCallback(() => {
    window.open(src);
  }, [src]);
  return (
    <>
      <button
        className='w-full py-1 border border-gray-400 bg-gray-300 rounded-lg shadow'
        onClick={handleClick}
      >
        {children || title}
      </button>
    </>
  );
};

Button.defaultProps = {
  src: '',
  title: 'button',
};

export const ButtonPanel = (props) => {
  const { src, title, children } = props;
  const handleClick = useCallback(() => {
    window.open(src);
  }, [src]);
  return (
    <div className="w-full flex flex-col p-2">
      <h2 className="text-lg text-center font-extrabold">{title}</h2>
      <div>
        <img className="w-full" src={'https://chart.apis.google.com/chart?cht=qr&chs=150x150&choe=utf8&chl=' + encodeURIComponent(src)} alt='qr' />
      </div>
      <button
        className='w-full py-1 text-xs border border-gray-400 bg-gray-300 rounded-lg shadow'
        onClick={handleClick}
      >
        {children || title} で開く
      </button>
    </div>
  );
};

ButtonPanel.defaultProps = {
  src: '',
  title: 'button',
};


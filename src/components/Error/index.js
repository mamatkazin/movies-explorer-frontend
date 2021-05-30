import React from 'react';

class HTTPError extends Error {
  constructor(code, message) {
    super(message);

    this.code = code;
    this.name = 'HTTPError';
  }
}

function ShowError(props) {
  const [err, setErr] = React.useState(null);
  const currentErr = props.err;

  React.useEffect(() => {
    setErr(currentErr);
  }, [currentErr]);

  function handleClick(e) {
    setErr(null);
  }

  if (err !== null) {
    return (
      <section className='error error_opened' onClick={handleClick}>
        <h2 className='error__title'>{err.code}</h2>
        <p className='error__text'>{err.text}</p>
      </section>
    );
  } else {
    return <></>;
  }
}

export { ShowError, HTTPError };

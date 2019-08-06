import React, { useState } from 'react';

const submitTerminal = (terminalValue: string) => {
  console.log(`implement redux state with value: ${terminalValue}`);
}


export function Terminal(props: {}) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitTerminal(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>$<input type="text" onChange={e => setValue(e.target.value)} value={value} /></div>
    </form>
  );
}

export default Terminal;
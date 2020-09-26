import React from 'react';
type Props = { title: string | number }

function BaseGenericPage(props: Props) {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export const GenericPage = BaseGenericPage;
export default GenericPage;
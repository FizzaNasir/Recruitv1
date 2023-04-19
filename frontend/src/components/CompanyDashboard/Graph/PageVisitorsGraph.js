import React from 'react';
import LineGraph from './LineGraph';
import {data, options} from './data'
const PageVisitorsGraph = () => {
  return (
    <div>
      <LineGraph data={data} options={options} />
    </div>
  );
}

export default PageVisitorsGraph;
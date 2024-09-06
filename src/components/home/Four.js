
import React from 'react';
import CountUp from './CountUp'; 
import '../styles/Four.css';

function Four() {
  return (
    <div className="container-fluid count">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <CountUp endValue={500}/>
          <div className="team">Team member</div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <CountUp endValue={250} />
            <div className="team">Complete projectr</div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <CountUp endValue={350} />
            <div className="team">Winning award</div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <CountUp endValue={1000} />
            <div className="team">Team member</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Four;

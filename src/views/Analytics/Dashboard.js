import React from "react";

function Dashboard() {
  return (
  	<div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="float-right">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Metrica</a></li>
                <li className="breadcrumb-item"><a href="#">Analytics</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            <h4 className="page-title">Dashboard</h4>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;

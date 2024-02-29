



function Progressbar() {
  return (
    <div className="container mt-3">
    <h2>Striped Progress Bars</h2>
    <p>The .progress-bar-striped class adds stripes to the progress bars:</p>
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped"
        style={{ width: "30%" }}
      />
    </div>
    <br />
    <div className="progress">
      <div
        className="progress-bar bg-success progress-bar-striped"
        style={{ width: "40%" }}
      />
    </div>
    <br />
    <div className="progress">
      <div
        className="progress-bar bg-info progress-bar-striped"
        style={{ width: "50%" }}
      />
    </div>
    <br />
    <div className="progress">
      <div
        className="progress-bar bg-warning progress-bar-striped"
        style={{ width: "60%" }}
      />
    </div>
    <br />
    <div className="progress">
      <div
        className="progress-bar bg-danger progress-bar-striped"
        style={{ width: "70%" }}
      />
    </div>
  </div>
  
  );
}

export default Progressbar;
const CardInterview = ({ title, paragraph }) => {
  return (
    <div className="m-3 h-auto">
      <div className="card">
        <div className="card-body shadow">
          <p className="font-italic text-right">
            <small>(1/4)</small>
          </p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text mt-5 mb-5">{paragraph}</p>

          <a
            className="nav-link navb btn text-warning w-50"
            style={{ backgroundColor: "#14213D", borderRadius: "10px" }}
            href="#"
          >
            <b>See Challenges</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardInterview;

const Footer = () => {
  return (
    <form className="row border border-3 p-0 m-5 rounded">
      <div className="col border border-3">
        <label className="d-flex justify-content-center fw-bolder">
          Search
        </label>
        <input
          className="text-center w-100 m-2"
          type="text"
          placeholder="Try Sarah, Java"
        />
      </div>
      <div className="col border border-3">
        <label className="d-flex justify-content-center fw-bolder">
          Availability
        </label>
        <input
          className="text-center w-100 m-2"
          type="text"
          placeholder="Add range of dates"
        />
      </div>
      <div className="col border border-3">
        <label className="d-flex justify-content-center fw-bolder">
          Expertise
        </label>
        <input
          className="text-center w-100 m-2"
          type="text"
          placeholder="Select Expertise"
        />
      </div>
      <div className="col-2 border border-3 d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-dark w-100 text-warning rounded fs-5 m-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Footer;

import CardInterview from "./CardInterview";

export default function Interview() {
  return (
    <div>
      <div className="ml-4">
        <h2>Interview Preparation Kit</h2>
        <div className="row">
          <div className="col">
            <CardInterview
              title={"Warm-up Challenges"}
              paragraph={
                "New to Tech Mentor Match? Try out our warm up challenges"
              }
            />
          </div>
          <div className="col">
            <CardInterview
              title={"Arrays"}
              paragraph={"A lot of companies test this"}
            />
          </div>
          <div className="col mr-2">
            <CardInterview
              title={"Tips and guidelines"}
              paragraph={"Helpfull tips and guidelines for the big day"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CardInterview
              title={"Dictionaries and Hashmaps"}
              paragraph={"A lot of companies test this"}
            />
          </div>
          <div className="col">
            <CardInterview
              title={"Sorting"}
              paragraph={"A lot of companies test this"}
            />
          </div>
          <div className="col mr-2">
            <CardInterview
              title={"String manipulation"}
              paragraph={"A lot of companies test this"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CardInterview
              title={"Algorithms"}
              paragraph={"A lot of companies test this"}
            />
          </div>
          <div className="col">
            <CardInterview
              title={"Stack and Queues"}
              paragraph={"A lot of companies test this"}
            />
          </div>
          <div className="col mr-2">
            <CardInterview
              title={"Graphs"}
              paragraph={"A lot of companies test this"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

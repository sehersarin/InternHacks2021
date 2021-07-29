import FindMentorComponent from "./FindMentorComponent";
const profesionals = [
  {
    name: "Jhon Doe",
    industry: "Apple",
    position: "Software Engineering",
  },
  {
    name: "Jane Doal",
    industry: "Facebook",
    position: " Technical Productor Manager",
  },
  {
    name: "Ashley Yoon",
    industry: "Google",
    position: "Software Engineering",
  },
  {
    name: "Josua Parker",
    industry: "Amazon",
    position: "Software Engineering",
  },
  {
    name: "Seher Sarin",
    industry: "Google",
    position: "Technical Productor Manager",
  },
  {
    name: "Adhel Geng",
    industry: "Google",
    position: "Product Designer",
  },
];
const software = profesionals.filter((person) => {
  return person.position === "Software Engineering";
});

const SoftwareEngineer = () => {
  return (
    <div className="ml-5">
      {software.map((person, i) => {
        return (
          <div className="d-inline-flex">
            <FindMentorComponent
              key={i}
              name={person.name}
              industry={person.industry}
              position={person.position}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SoftwareEngineer;

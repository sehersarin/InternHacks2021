import FindMentorComponent from "./FindMentorComponent";
const professionals = [
  {
    name: "Jhon Doe",
    industry: "Apple",
    position: "Software Engineering",
  },
  {
    name: "Jane Doal",
    industry: "Facebook",
    position: "Technical Productor Manager",
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
const productor = professionals.filter((person) => {
  return person.position === "Technical Productor Manager";
});

const ProductorManager = () => {
  return (
    <div className="ml-5">
      {productor.map((person, i) => {
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

export default ProductorManager;

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
const designer = profesionals.filter((person) => {
  return person.position == "Product Designer";
});

const ProductDesigner = () => {
  return (
    <div className="ml-5">
      {designer.map((person, i) => {
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

export default ProductDesigner;

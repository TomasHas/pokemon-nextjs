import Card from "@/app/ui/card";

function CardContainer(data, query, currentPage) {
  // console.log(pokeData.results.map((e) => e.name));

  // console.log(data.data.map((e) => e.name));
  return (
    <div className=" grid  grid-cols-4   container bg-slate-600 w-screen rounded-xl p-4 gap-4 ">
      {data.data.map((e, i) => (
        <Card key={i} name={e.name} image={e.image} type={e.types} id={e.id} />
      ))}
    </div>
  );
}

export default CardContainer;

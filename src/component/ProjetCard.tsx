export const ProjetCard = ({
  title,
  description,
  img,
  stack,
}: {
  title: string;
  description: string;
  img: string;
  stack: string[];
}) => {
  return (
    <div className="border-2 border-black bg-blue-700 items-center hover:shadow-2xl transition duration-200 p-4 rounded-xl flex flex-col w-full h-fit">
      <img
        src={img}
        className="w-full h-60 object-cover rounded-xl border-2 border-black"
      ></img>
      <div className="h-fit w-full p-5 flex flex-col gap-4">
        <h2 className="text-yellow-100 font-Neue text-xl ml-2">{title}</h2>
        <p className="text-white font-Neue">{description}</p>
        <div className="flex gap-5 w-full">
          {stack.map((stk) => (
            <div
              className="p-2 border-2 text-yellow-100 flex-1 font-Neue border-yellow-100 rounded-xl  flex items-center justify-center"
              key={stk}
            >
              {stk}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjetCard;

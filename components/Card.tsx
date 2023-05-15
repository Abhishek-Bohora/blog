export const Card = () => {
  return (
    <div className="w-full p-6 bg-gray-800 m-2 rounded-md shadow-md space-y-2">
      <div className="flex space-x-4 items-center">
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="w-16 h-16 rounded-full"
        />
        <div className="flex flex-col">
          <p className="text-gray-200">Username</p>
          <p className="text-gray-300">example@gmail.com</p>
        </div>
      </div>
      <div className="p-2">
        <p className="text-gray-200 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo magni
          reiciendis nisi nihil. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Illo magni reiciendis nisi nihil. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Illo magni reiciendis nisi
          nihil. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          magni reiciendis nisi nihi
        </p>
      </div>
      <div className="flex space-x-3">
        <button className="btn btn-primary">edit</button>
        <button className="btn btn-primary">edit</button>
        <button className="btn btn-primary">edit</button>
      </div>
    </div>
  );
};
export default Card;

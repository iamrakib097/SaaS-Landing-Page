const EcoCard = ({ image, title, para }) => {
  return (
    <div className=" mx-10  lg:mx-0  border p-5 lg:p-0 rounded-lg mt-10 shadow-lg w-[320px] md:w-[400px] lg:w-[490px] lg:h-[500px] lg:px-20">
      <div className="p-5 lg:p-5">
        <img src={image} alt="cube plus element" width={329} height={329} />
      </div>
      <div className="px-5 lg:px-3">
        <h3 className="mt-2 text-xl lg:mt-1 font-bold">{title}</h3>
        <p className="tracking-tighter mt-6 lg:text-lg lg:tracking-tight">
          {para}
        </p>
      </div>
    </div>
  );
};

export default EcoCard;

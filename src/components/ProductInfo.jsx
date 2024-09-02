const ProductInfo = ({ icon, title, para }) => {
  return (
    <div className="px-10 lg:px-0">
      <div className="flex text-start items-start justify-start flex-col mt-10">
        <img src={icon} alt="" width={24} height={24} />
        <p className="font-bold text-md tracking-tight mt-2 lg:mt-0">{title}</p>
        <p className="text-md tracking-tight mt-2 leading-normal lg:mt-0">
          {para}
        </p>
        <button className="btn btn-text -ml-4 mt-0 lg:mt-0">
          Learn more &rarr;
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;

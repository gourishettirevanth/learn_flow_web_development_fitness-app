/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="border-green-600 border-l-2 ">
      <p className="text-3xl ml-3 font-bold text-white">{heading}</p>
      <h1 className="text-sm ml-3 w-8/12">{subHeading}</h1>
    </div>
  );
};

export default SectionTitle;

/*
 */

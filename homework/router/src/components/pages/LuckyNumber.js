import { useParams } from "react-router-dom";

const LuckyNumber = () => {
  const { numero } = useParams();
 
  return (
    <div>
      <h2> El {numero} es tu numero de la suerte </h2>
    </div>
  );
};

export default LuckyNumber;


import { FadeLoader } from "react-spinners";

function Spinner() {

  return (
    <div className="mt-10 min-h-[60vh] flex justify-center items-center">
      
          <FadeLoader color="#3498db" height={15} width={5} radius={2} margin={2} />
          <p style={{ marginTop: "15px", color: "#555", fontSize: "18px" }}>Loading...</p>
        
    </div>
  );
}

export default Spinner;
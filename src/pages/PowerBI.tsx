import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../redux/actions/steps";

const BI_URL =
  "https://app.powerbi.com/view?r=eyJrIjoiODYwYjBhOGMtZTIzYS00ZDJkLTk1MTEtNTk3Nzk4YTE2ZjUzIiwidCI6IjJhZTk1YzIwLWM2NzUtNGM0OC04OGQzLWYyNzZiNzYyYmY1MiIsImMiOjl9";

const PowerBI = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStep(5));
  }, [dispatch]);

  return (
    <div className="power-BI">
      <iframe
        title="Power BI"
        style={{
          position: "absolute",
          width: "100%",
          height: "90vh",
          border: "none",
        }}
        src={BI_URL}
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default PowerBI;

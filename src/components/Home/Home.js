import React, { useEffect, useRef, useState } from "react";
import handFlower from "./images/restaurant.png";
import "./Home.css";
import { getDatabase, ref, child, get } from "firebase/database";
import firebaseApp from "../../firebase";

// Loading Spinner Component
const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "4px solid rgba(255, 128, 0, 0.3)",
          borderTop: "4px solid #FF8000",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          animation: "spin 1s linear infinite",
        }}
      />
    </div>
  );
};

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null);

  const getValue = async () => {
    try {
      const database = getDatabase(firebaseApp);
      const rootRefrence = ref(database);
      const dbGet = await get(child(rootRefrence, "post"));
      const dbValue = dbGet.val();
      snapshot.current = dbValue;
    } catch (getError) {
      error.current = getError.message;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getValue();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const post = snapshot.current;
  const data = Object.values(snapshot.current);

  return (
    <div className="home">
      <div className="home-description">
        <div>
          {data.map((item) => {
            return (
              <div key={item.title}>
                <h1>{item.title}</h1>
              </div>
            );
          })}
        </div>
      </div>

      <div className="img">
        <img className="img-pic" src={handFlower} alt="Hand holding flower" />
      </div>
    </div>
  );
}

export default Home;

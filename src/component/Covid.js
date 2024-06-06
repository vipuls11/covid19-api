import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json"
      );
      console.log(res);
      const actualdata = await res.json();
      console.log(actualdata);
      setData(actualdata.cases_time_series);
      console.log(setData(actualdata.cases_time_series));
    } catch (err) {
      console.log(err);
    }

    // const res = await fetch("https://api.covid19india.org/data.json")
    // console.log(res);
    // const actualdata = await res.json();
    // console.log(actualdata.cases_time_series);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <div>
        <h5 className="">live</h5>
        <h3 className="">COVID-19 CORONAVIRUS TRACKER</h3>

        <div>
          <div>
            <p>
              <span className="">OUR</span> COUNTRY
            </p>
            <p></p>
          </div>

          <div>
            <p>
              <span className="">OUR</span> COUNTRY
            </p>
            <p>INDIA</p>
          </div>

          <div>
            <p>
              <span className="">OUR</span> COUNTRY
            </p>
            <p>{data.recovered}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid;

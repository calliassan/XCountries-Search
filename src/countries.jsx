import { useEffect, useState } from "react";
import { Card } from "./card";
import styles from "./countries.module.css";

export function Countries() {
  const [country, setcountry] = useState([]);
  const [val, setval] = useState("");

  const fetchdata = async () => {
    try {
      const datas = await fetch(`https://restcountries.com/v3.1/all`);

      const res = await datas.json();
      console.log(res);
      setcountry(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handlechange = (e) => {
    setval(e.target.value);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const filteredcountries = country.filter((item) =>
    item.name.common.toLowerCase().includes(val)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="search for countries"
        value={val}
        onChange={handlechange}
      />
      <div className={styles.countriesgrid}>
        {filteredcountries.map((item) => (
          <Card
            name={item.name.common}
            flagimage={item.flags.png}
            key={item.tid}
          />
        ))}
      </div>
    </div>
  );
}

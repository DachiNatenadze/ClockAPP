/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import refresh from "/public/icon-refresh.svg";
import axios from "axios";

export default function Clock() {
  const Refresh = () => {
    FetchingProgQuestos();
  };
  const [progQuetos, setProgQuetos] = useState(null);
  const [Realtime, SetRealTime] = useState(null);
  const [time, setTime] = useState(null);
  async function FetchingProgQuestos() {
    try {
      const response = await axios.get("https://api.quotable.io/random ");
      const data = response.data;
      setProgQuetos(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function FetchingRealTime() {
    try {
      const response = await axios.get(
        "http://worldtimeapi.org/api/timezone/Asia/Tbilisi"
      );
      const data = response.data;
      SetRealTime(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fethcingTime() {
    try {
      const response = await axios.get(
        "https://api.ipbase.com/v2/info?apikey=ipb_live_X3di55yYvrwhl9G4JshVAHbhmo2oHLyMWk2Ui5ck&ip=1.1.1.1"
      );
      const data = response.data;
      setTime(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    FetchingRealTime();
  }, []);
  console.log(Realtime);
  useEffect(() => {
    FetchingProgQuestos();
  }, []);
  console.log(progQuetos);
  useEffect(() => {
    fethcingTime();
  }, []);
  console.log(time);
  return (
    <main>
      <div>
        <h2>{progQuetos?.content}</h2>
        <img src={refresh} onClick={Refresh} alt="" />
      </div>
    </main>
  );
}

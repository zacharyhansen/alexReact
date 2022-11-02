import styles from "../styles/Home.module.css";
import { Fragment, useEffect, useState } from "react";
import { IAPODQueryParams, IAPODResponse } from "../models/apiModels";
import { getAPODDAL } from "../apodDAL";
import { Box } from "@mui/material";
import moment from "moment";

const Home = () => {
  const [response, setResponse] = useState<IAPODResponse[]>();
  const [date, setDate] = useState<moment.Moment>(moment());

  const getAPOD = (params: IAPODQueryParams) => {
    setResponse(undefined);
    getAPODDAL<IAPODResponse>("/api/nasa/apod", params).then((res) => {
      setResponse(res);
    });
  };

  useEffect(() => getAPOD({ date: date.format("YYYY-MM-DD") }), [date]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!response ? (
          <text>loading... implement a nice loader</text>
        ) : (
          <Fragment>{JSON.stringify(response)}</Fragment>
        )}
      </main>
    </div>
  );
};

export default Home;

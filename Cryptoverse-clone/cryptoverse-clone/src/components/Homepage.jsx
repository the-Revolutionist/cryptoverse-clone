import { Col, Row, Statistic, Typography } from "antd";

import { millify } from "millify";
import { useGetCryptoQuery } from "../services/cryptoAPI";

//import { Link } from "react-router-dom";
const { Title } = Typography;

export const Homepage = () => {
  const { data, isFetching } = useGetCryptoQuery();
  const globalStats = data?.data?.stats;
  if (isFetching) {
    return "Loading...";
  }

  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={globalStats.totalMarketCap}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={globalStats.total24hVolume}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats.totalMarkets} />
        </Col>
      </Row>
    </>
  );
};

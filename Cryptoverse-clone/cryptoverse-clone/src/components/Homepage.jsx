import { Col, Row, Statistic, Typography } from "antd";

import { Cryptocurrencies } from "../componentIndex";
import { Link } from "react-router-dom";
import { News } from "../componentIndex";
import { millify } from "millify";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const { Title } = Typography;

export const Homepage = () => {
  const count = 8;
  const { data, isFetching } = useGetCryptosQuery(count);
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

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

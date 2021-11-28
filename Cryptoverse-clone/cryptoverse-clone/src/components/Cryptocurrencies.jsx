import { Card, Col, Input, Row } from "antd";

import { Link } from "react-router-dom";
import { millify } from "millify";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import { useState } from "react";

export const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank} - ${currency.name}`}
                extra={
                  <img
                    alt="cryptoimage"
                    className="crypto-image"
                    src={currency.iconUrl}
                  />
                }
                hoverable
              >
                <p>Price: ${millify(currency.price)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
                <p>Volume: {millify(currency.volume)}</p>
                <p>Market Cap: ${millify(currency.marketCap)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

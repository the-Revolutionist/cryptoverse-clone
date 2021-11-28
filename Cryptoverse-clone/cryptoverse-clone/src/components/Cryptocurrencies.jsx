import { Card, Col, Input, Row } from "antd";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { millify } from "millify";
import { useGetCryptosQuery } from "../services/cryptoAPI";

export const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 8 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [searchTerm, cryptosList]);

  if (isFetching) {
    return "Loading...";
  }

  return (
    <>
      <div className="search-crypto">
        {simplified ? null : (
          <Input
            placeholder="Search for Cryptocurrency..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
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

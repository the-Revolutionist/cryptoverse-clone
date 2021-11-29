import { Avatar, Card, Col, Row, Select, Typography } from "antd";

import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import { useState } from "react";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

export const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews) {
    return "Loading...";
  }
  return (
    <>
      <div className="search-crypto">
        {!simplified && (
          <Col span={24}>
            <Select
              className="select-news"
              placeholder="Select a news category"
              showSearch={true}
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) > 0
              }
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins?.map((coin) => (
                <Option key={coin.name} value={coin.name}>
                  {coin.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
      </div>
      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          <Col key={i} xs={24} sm={12} lg={8}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news.title" level={4}>
                    {news.name}
                  </Title>

                  <img
                    style={{ maxWidth: 200, maxHeight: 100, margin: 5 }}
                    alt="news"
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                  />
                </div>

                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 50)}...`
                    : news.description}
                </p>

                <div className="provider-container">
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

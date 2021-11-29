import { Avatar, Card, Col, Row, Select, Typography } from "antd";

import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
export const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCatagory: "Cryptocurrency",
    count: simplified ? 6 : 18,
  });
  if (!cryptoNews) {
    return "Loading...";
  }
  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          <Col key={i} xs={24} sm={12} lg={8}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news.title" level={4}>
                    {news.name}
                  </Title>
                </div>
                <img
                  style={{ width: 100, height: 100 }}
                  alt="news"
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                />
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 50)}...`
                    : news.description}
                </p>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

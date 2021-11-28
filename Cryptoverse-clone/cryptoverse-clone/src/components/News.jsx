import { Avatar, Card, Col, Row, Select, Typography } from "antd";

import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

export const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCatagory: "Cryptocurrency",
    count: simplified ? 8 : 100,
  });
  console.log(cryptoNews);
  return (
    <>
      <div>News</div>
    </>
  );
};

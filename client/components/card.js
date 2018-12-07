import { Card, Icon } from 'antd';

import './card.css';
const { Meta } = Card;

export default ()=> (
	<Card
    hoverable
    style={{ width: 290 }}
    cover={<img alt="example" src="https://www.huxinmin.com/upload/post/pics/DYQbN1uFPF0iLQ-0.jpg" />}
    actions={[<span><Icon type="clock-circle" />2018-01-10</span>, <span><Icon type="message" />11</span>, <span><Icon type="eye" />22</span>]}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
)
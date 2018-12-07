import React, { Component } from 'react';

import BasicLayout from '../layouts';
import Carousel from '../components/carousel';
import Card from '../components/card';
import Tree from '../components/tree';
import './index.css';

export default class extends Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <BasicLayout>
      	<div className="index-content">
          <Carousel />
      		<ul className="index-content-group">
      			<li className="content-side-left">
              {
                [1,2,3,4,5,6,7,8].map((item, index)=>(<Card key={index}/>))
              }
            </li>
      			<li className="content-side-right">
              <Tree />
            </li>
      		</ul>
      	</div>
      </BasicLayout>
    )
  }
}
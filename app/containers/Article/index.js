import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Article extends Component {


  render() {
    return (
      <div>
        <Helmet>
          <title>新增-编辑文章</title>
        </Helmet>
        文章相关
      </div>
    );
  }
}

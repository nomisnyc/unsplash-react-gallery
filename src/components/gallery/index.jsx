import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import * as API from '../../cred.js';
import ImageList from '../imagelist'
import SearchForm from '../searchform'

const AccessKey = API.API_ACCESS_KEY

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      loading: true,
    };

  }
  componentDidMount() {
    this.doSearch();
  }

  doSearch = (query = 'nature') => {
    axios
      .get('https://api.unsplash.com/search/photos/?page=1&per_page=10&query=' + query + '&client_id=' + AccessKey)
      .then(data => {
        this.setState({ imgs: data.data.results, loading: false });
        console.log(data)
      })
      .catch(err => {
        console.log('Error happened during GET!', err);
      });

  }


  render(){

    return(
      <GalleryWrap>
        <div className="inner">
          <h1 className="main-title">ImageSearch</h1>
          <SearchForm onSearch={this.doSearch} />
        </div>
        <div className="main-content">
          {this.state.loading
            ? <p>Loading</p>
            : <ImageList data={this.state.imgs} />}
        </div>
      </GalleryWrap>
    )
  }
}

export default Gallery;

const GalleryWrap = styled.div`
  text-align: center;
`;

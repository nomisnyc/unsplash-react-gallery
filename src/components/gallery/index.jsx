import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import * as API from '../../../cred.js';
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

  doSearch = (query = 'New York') => {
    axios
      .get('https://api.unsplash.com/search/photos/?page=1&per_page=10&query=' + query + '&client_id=' + AccessKey)
      .then(data => {
        this.setState({ imgs: data.data.results, loading: false });
      })
      .catch(err => {
        console.log('Error happened during GET!', err);
      });

  }


  render(){

    return(
      <GalleryWrap>
        <h2>Unsplash Image Search</h2>
        <SearchBar>
          <SearchForm onSearch={this.doSearch} />
        </SearchBar>
        <div>
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
  padding: 20px;
`;
const SearchBar= styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 102vw;
  height: 50px;
  padding: 4px;
  margin-left: -30px;
  margin-bottom: 40px;
  background-color: hsla(208, 100%, 85%, 1.0);
  @media (max-width: 460px) {
    width: 103vw;
  }

`;

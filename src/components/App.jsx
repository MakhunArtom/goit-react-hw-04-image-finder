import { Component } from 'react';
// import css from './APP.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    sourceName: '',
    page: null,
  };

  hendelFormSubmit = (sourceName, page) => {
    this.setState({ sourceName, page });
  };

  render() {
    const { sourceName, page } = this.state;

    return (
      <>
        <Searchbar hendelFormSubmit={this.hendelFormSubmit} />
        <ImageGallery sourceName={sourceName} page={page} />
        <Button />
      </>
    );
  }
}

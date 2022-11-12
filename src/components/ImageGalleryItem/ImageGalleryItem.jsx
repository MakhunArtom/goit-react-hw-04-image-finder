import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    imeges: null,
    error: null,
    status: 'idle',
  };

  componentDidMount() {
    this.getFetch();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sourceName, page } = this.props;

    if (prevProps.sourceName !== sourceName || prevProps.page !== page) {
      this.getFetch();
    }
  }

  getFetch = () => {
    const { page } = this.state;

    const basUrl = 'https://pixabay.com/api/';
    const apiOption =
      '?key=30147666-01af3a5d8270a6833dad9b4e7&q=cat&image_type=photo&orientation=horizontal&per_page=12';
    const apiPag = `&page=${page}`;

    this.setState({ status: 'pending' });

    fetch(basUrl + apiOption + apiPag)
      .then(res => res.json())
      .then(({ hits }) => this.setState({ imeges: hits, status: 'resolved' }))
      .catch(error => this.setState({ status: 'rejected' }));
  };

  renderImg = arr => {
    return arr.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <li key={id} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItemIimage}
            src={webformatURL}
            alt=""
          />
        </li>
      );
    });
  };

  render() {
    const { imeges, status, error } = this.state;

    if (status === 'pending') {
      return <div>Loading.....</div>;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return <>{this.renderImg(imeges)}</>;
    }
  }
}

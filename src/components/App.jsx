import css from './APP.module.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getFetch } from './API/API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    sourceName: '',
    imeges: [],
    page: 1,
    // error: null,
    status: 'idel',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sourceName !== this.state.sourceName ||
      prevState.page !== this.state.page
    ) {
      const { sourceName, page } = this.state;

      this.setState({ status: 'panding' });

      getFetch(sourceName, page)
        .then(({ hits }) => {
          if (hits.length === 0) {
            return Promise.reject(
              new Error(`Не коректний ввод ${this.state.sourceName}`)
            );
          }

          return (
            this.setState(prevState => {
              return { imeges: [...prevState.imeges, ...hits] };
            }),
            this.setState({ status: 'resolved' })
          );
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  hendelFormSubmit = (sourceName, page) => {
    this.setState({ sourceName, page });
  };

  incrimentpage = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { status, imeges } = this.state;

    return (
      <div className={css.App}>
        <Searchbar hendelFormSubmit={this.hendelFormSubmit} />

        {status === 'resolved' && (
          <ImageGallery imeges={imeges} incrimentpage={this.incrimentpage} />
        )}
        {status === 'panding' && <Loader />}
      </div>
    );
  }
}

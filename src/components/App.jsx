import css from './APP.module.css';
import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getFetch } from './API/API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [sourceName, setSourceName] = useState('');
  const [imeges, setImeges] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idel');

  useEffect(() => {
    if (sourceName === '') {
      return;
    }
    setStatus('panding');

    getFetch(sourceName, page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          return Promise.reject(new Error(`Не коректний ввод ${sourceName}`));
        }

        setImeges(state => [...state, ...hits]);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        alert('Чтото пощло не так');
      });
  }, [sourceName, page]);

  const hendelFormSubmit = sourceName => {
    setPage(1);
    setSourceName(sourceName);
    setImeges([]);
  };

  const incrimentpage = e => {
    setPage(state => state + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar hendelFormSubmit={hendelFormSubmit} />

      <ImageGallery
        status={status}
        imeges={imeges}
        incrimentpage={incrimentpage}
      />

      {status === 'panding' && <Loader />}
    </div>
  );
};

// export class oldApp extends Component {
//   // state = {
//   //   sourceName: '',
//   //   imeges: [],
//   //   page: 1,
//   //   status: 'idel',
//   // };

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (
//   //     prevState.sourceName !== this.state.sourceName ||
//   //     prevState.page !== this.state.page
//   //   ) {
//   //     const { sourceName, page } = this.state;

//   //     this.setState({ status: 'panding' });

//   //     getFetch(sourceName, page)
//   //       .then(({ hits }) => {
//   //         if (hits.length === 0) {
//   //           return Promise.reject(
//   //             new Error(`Не коректний ввод ${this.state.sourceName}`)
//   //           );
//   //         }

//   //         return (
//   //           this.setState(prevState => {
//   //             return { imeges: [...prevState.imeges, ...hits] };
//   //           }),
//   //           this.setState({ status: 'resolved' })
//   //         );
//   //       })
//   //       .catch(error => {
//   //         this.setState({ error, status: 'rejected' });
//   //         alert('Чтото пощло не так');
//   //       });
//   //   }
//   // }

//   // hendelFormSubmit = sourceName => {
//   //   this.setState({ sourceName, imeges: [], page: 1 });
//   // };

//   // incrimentpage = e => {
//   //   this.setState(prevState => ({
//   //     page: prevState.page + 1,
//   //   }));
//   // };

//   render() {
//     const { status, imeges } = this.state;

//     return (
//       <div className={css.App}>
//         <Searchbar hendelFormSubmit={this.hendelFormSubmit} />

//         <ImageGallery
//           status={status}
//           imeges={imeges}
//           incrimentpage={this.incrimentpage}
//         />

//         {status === 'panding' && <Loader />}
//       </div>
//     );
//   }
// }

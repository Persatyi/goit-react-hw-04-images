import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import api from 'components/Services/pictureApi';
import Loader from 'components/Loader/Loader';

class App extends Component {
  state = {
    value: '',
    page: 1,
    hits: [],
    isOpen: false,
    imageForModal: { src: '', alt: '' },
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.value !== this.state.value) {
      this.findPicture();
    }

    if (prevState.page < this.state.page) {
      this.findPicture();
    }
  }

  findPicture = async () => {
    const query = this.state.value;
    api.page = this.state.page;
    this.setState({
      loading: true,
    });
    await api.fetchPicturesBySearchQuery(query).then(res => {
      this.setState(prev => ({
        hits: [...prev.hits, ...res],
        loading: false,
      }));
      return res;
    });
  };

  onSubmit = param => {
    this.setState({
      value: param,
      page: 1,
      hits: [],
    });
  };

  openModal = (e, index) => {
    if (e) {
      this.setState({
        isOpen: true,
        imageForModal: { src: e.target.dataset.src, alt: e.target.alt },
      });
      return;
    }

    if (index || index === 0) {
      const object = this.state.hits[index];
      this.setState({
        imageForModal: { src: object.largeImageURL, alt: object.tags },
      });
      return;
    }
  };

  nextImage = () => {
    const elementIndex = this.state.hits.findIndex(
      el => el.largeImageURL === this.state.imageForModal.src
    );

    if (elementIndex !== this.state.hits.length - 1) {
      this.openModal(false, elementIndex + 1);
    } else {
      this.openModal(false, 0);
    }
  };

  prevImage = () => {
    const elementIndex = this.state.hits.findIndex(
      el => el.largeImageURL === this.state.imageForModal.src
    );

    if (elementIndex !== 0) {
      this.openModal(false, elementIndex - 1);
    } else {
      this.openModal(false, this.state.hits.length - 1);
    }
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  loadMore = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.hits} openModal={this.openModal} />
        {this.state.isOpen ? (
          <Modal
            image={this.state.imageForModal}
            closeModal={this.closeModal}
            nextImage={this.nextImage}
            prevImage={this.prevImage}
          />
        ) : null}
        {api.totalHits <= this.state.page * 12 ? null : (
          <Button onClick={this.loadMore} />
        )}
        {this.state.loading && <Loader />}
      </>
    );
  }
}

export default App;

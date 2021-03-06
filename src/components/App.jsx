import { useCallback, useEffect, useReducer } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import api from 'components/Services/pictureApi';
import Loader from 'components/Loader/Loader';
import { constantTypes, initialState, reducer } from 'components/db/appReducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const findPicture = useCallback(async () => {
    const query = state.value;
    api.page = state.page;
    dispatch({ type: constantTypes.loading, payload: true });

    const response = await api.fetchPicturesBySearchQuery(query).then(res => {
      return res;
    });

    dispatch({ type: constantTypes.hits, payload: response });
    dispatch({ type: constantTypes.loading, payload: false });
  }, [state.value, state.page]);

  useEffect(() => {
    findPicture();
  }, [findPicture]);

  const onSubmit = param => {
    dispatch({
      type: constantTypes.value,
      payload: param.value,
    });

    dispatch({
      type: constantTypes.page,
      payload: 1,
    });

    dispatch({
      type: constantTypes.hitsReset,
    });
  };

  const openModal = (e, index) => {
    if (e) {
      dispatch({ type: constantTypes.isOpen, payload: true });
      dispatch({
        type: constantTypes.imageForModal,
        payload: { src: e.target.dataset.src, alt: e.target.alt },
      });
      return;
    }

    if (index || index === 0) {
      const object = state.hits[index];
      dispatch({
        type: constantTypes.imageForModal,
        payload: { src: object.largeImageURL, alt: object.tags },
      });
      return;
    }
  };

  const nextImage = () => {
    const elementIndex = state.hits.findIndex(
      el => el.largeImageURL === state.imageForModal.src
    );

    if (elementIndex !== state.hits.length - 1) {
      openModal(false, elementIndex + 1);
    } else {
      openModal(false, 0);
    }
  };

  const prevImage = () => {
    const elementIndex = state.hits.findIndex(
      el => el.largeImageURL === state.imageForModal.src
    );

    if (elementIndex !== 0) {
      openModal(false, elementIndex - 1);
    } else {
      openModal(false, state.hits.length - 1);
    }
  };

  const closeModal = () => {
    dispatch({ type: constantTypes.isOpen, payload: false });
  };

  const loadMore = () => {
    dispatch({ type: constantTypes.page, payload: state.page + 1 });
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={state.hits} openModal={openModal} />
      {state.isOpen ? (
        <Modal
          image={state.imageForModal}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      ) : null}
      {api.totalHits <= state.page * 12 ? null : <Button onClick={loadMore} />}
      {state.loading && <Loader />}
    </>
  );
}

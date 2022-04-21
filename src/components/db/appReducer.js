const constantTypes = {
  value: 'VALUE',
  page: 'PAGE',
  hits: 'HITS',
  isOpen: 'ISOPEN',
  imageForModal: 'IMAGEFORMODAL',
  loading: 'LOADING',
  hitsReset: 'HITSRESET',
};

const initialState = {
  value: '',
  page: 1,
  hits: [],
  isOpen: false,
  imageForModal: { src: '', alt: '' },
  loading: false,
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case constantTypes.value:
      return { ...state, value: payload };
    case constantTypes.page:
      return { ...state, page: payload };
    case constantTypes.hitsReset:
      return { ...state, hits: [] };
    case constantTypes.hits:
      return { ...state, hits: [...state.hits, ...payload] };
    case constantTypes.isOpen:
      return { ...state, isOpen: payload };
    case constantTypes.imageForModal:
      return { ...state, imageForModal: payload };
    case constantTypes.loading:
      return { ...state, loading: payload };
    default:
      return state;
  }
}

export { constantTypes, initialState, reducer };

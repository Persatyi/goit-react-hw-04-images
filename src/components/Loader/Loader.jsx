import s from './Loader.module.css';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={s.loader}>
      <TailSpin color="#3f51b5" height={80} width={80} />
    </div>
  );
};

export default Loader;

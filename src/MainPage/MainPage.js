import { useSelector, useDispatch } from 'react-redux';

import { toggle } from '../shared/store/ui';

const MainPage = () => {
  const { history } = useSelector((state) => state.UIState);
  const dispatch = useDispatch();

  const handleHistoryClick = () => dispatch(toggle('history'));

  return (
    <div>
      Main Page
      <button
        className='bg-sky-500 hover:bg-sky-700'
        onClick={handleHistoryClick}
      >
        {history ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default MainPage;

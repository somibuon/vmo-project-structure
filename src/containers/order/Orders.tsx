import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/input/Input';
import { useMatchMedia } from '../../hooks/useMediaQuery';

const OrderDetail: FC = () => {
  const [name, setName] = useState('');
  const match = useMatchMedia('(max-width: 768px)');
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(name);
  }, [name]);
  return (
    <>
      <div>LIST ORDER SCREEN</div>
      <div>Match tablet and mobile screen: {String(match)}</div>
      <Link to="/order/123">Go to detail</Link>
      <Input value={name} onChange={handleInputChange} />
    </>
  );
};

export default OrderDetail;

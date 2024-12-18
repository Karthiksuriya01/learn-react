import { useCounter } from '../store';

const Increament = () => {
    const {updateCount} = useCounter()
  return (
    
    
      <button onClick={updateCount}>Increament</button>
    
  );
}

export default Increament

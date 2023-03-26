import { RootState } from '../../redux';
import { useSelector } from 'react-redux';

export function Home() {
    const config = useSelector((state: RootState) => state.config);
    console.log({ config });
    return <div style={{ height: 100, width: 100, backgroundColor: 'red' }}>{config.apiUrl}</div>;
}

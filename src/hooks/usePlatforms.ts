import useData from './useData';
import { Platform } from './useGenres';

const usePlatforms = () => useData<Platform>('/platforms/lists/parents', {}, []);

export default usePlatforms;

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';

configure({ adapter: new Adapter() });

// uses __mocks__/AudioSynth
jest.mock('AudioSynth');

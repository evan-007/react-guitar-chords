import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';

configure({ adapter: new Adapter() });

jest.mock('webAudioWrapper');

// noop console.log when WebAudioFont calls it because it's annoying
const originalLog = console.log

window.console.log = function(msg) {
  if (typeof(msg) === 'string' && msg.includes('WebAudioFont')) {
    return null;
  }
  return originalLog(msg);
}

import EquusFirstFeed from './feed';
import EquusFirstServices from './services';

import LazyLoad from 'vanilla-lazyload';

class Application {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      new LazyLoad({
        elements_selector: '.lazy'
      });

      new EquusFirstFeed();
      new EquusFirstServices();
    });
  }
}

new Application();
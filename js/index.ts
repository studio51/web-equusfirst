import EquusFirstFeed from './feed';
import EquusFirstServices from './services';

import LazyLoad from 'vanilla-lazyload';

document.addEventListener('load', (event: any) => {
  new EquusFirstFeed();
  new EquusFirstServices();

  new LazyLoad({
    elements_selector: '.lazy'
  });
});
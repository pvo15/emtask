import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.route('shops', { path: '/' });
  this.route('items', { path: '/:id/items' });
});

export default Router;

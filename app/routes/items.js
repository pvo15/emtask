import Route from '@ember/routing/route';
import { addObserver } from '@ember/object/observers';
import { action } from "@ember/object";


export default Route.extend({
  beforeModel(){
    console.log('before model');
  },
  async model(params) {
    this.set('query',params);
    const itembyshop = (await this.store.peekAll('shop-item')).filter((item) => item.shopId === params.id);

    this.set('items', itembyshop);

    return {
      items: this.get('items'),
    }
  },
  @action sessionChanged() {
      this.refresh();
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('query', this.get('query'));
    controller.set('items', this.get('items'));
  },

  resetController(controller, isExiting, transition) {
    this._super.apply(this, arguments);
    if (controller && controller.resetData) {
      controller.set('query', this.get('query'));
      controller.resetData();
    }
  }
});


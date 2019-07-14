import Service from '@ember/service';
import {inject } from '@ember/service'
import { computed } from '@ember/object';

export default Service.extend({
  store: inject(),
  shops: computed(function () {
    return this.store.peekAll('shop');
  }),

  init(){
    this._super(...arguments);
  },

  async addShop(name){
    const id = new Date().getMilliseconds();
    await this.store.createRecord('shop', {id, name })
  },

  async editShop(id, name){
    const shop = await this.store.findRecord('shop', id, { backgroundReload: false });
    shop.set('name', name);
  },

  async removeShop(id) {
    const record = await this.store.peekRecord('shop', id);
    if (record !== null) {
      record.destroyRecord();
    } else {
      this.store.findRecord('shop', id).then(function (record) {
        record.destroyRecord();
      })
    }
  }
});

import Service from '@ember/service';
import { inject } from '@ember/service'
import { computed } from '@ember/object';

export default Service.extend({
  store: inject(),
  items: computed( function() {
    return this.store.peekAll('shop-item');
  }),

  async init(){
    this._super(...arguments);
    await this.addItem({name: 'koshik', qty:2323,price:22222, shopId: '56b7ecbc1ef21172377d6159'})
  },

  async addItem(data){
    const id = new Date().getMilliseconds();
    const records = await this.store.createRecord('shop-item', {id, ...data })
    // records.save()
  },

  async editItem(id, data){
    const shop = await this.store.findRecord('shop-item', id, { backgroundReload: true });
    shop.set('name', data.name);
    shop.set('price', data.price);
    shop.set('qty', data.qty);
  },

  async removeItem(id) {
    const record = this.store.peekRecord('shop-item', id);
    if (record !== null) {
      record.destroyRecord();
    } else {
      this.store.findRecord('shop-item', id).then(function (record) {
        record.destroyRecord();
      })
    }
  }
});

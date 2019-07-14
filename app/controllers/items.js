import Controller from '@ember/controller';
import {inject } from '@ember/service';
import { action } from '@ember/object';
import { computed } from '@ember/object';
import { addObserver } from '@ember/object/observers';

export default Controller.extend({
  itemService: inject('item-service'),
  isShowingModal: false,
  name: '',
  qty: 0,
  price: 0,
  selectedId: '',

  init(){
    this._super(...arguments);
  },

  @action async addItem(name, qty, price){
    this.setData();
    this.set('tempPrice', !this.get('tempPrice'));
    await this.itemService.addItem({ name, qty, price, shopId: this.query.id});
  },

  @action async remove(id){
    this.setData();
    this.set('tempPrice', !this.get('tempPrice'));
    await this.itemService.removeItem(id);
    this.send("sessionChanged");

  },

  @action async editItem(id, name, qty, price){
    this.set('tempPrice', !this.get('tempPrice'));

    await this.itemService.editItem(id, { name, qty, price});
  },

  @action openModal(data,){
    this.set('isShowingModal', true);
    this.set('selectedId', data.id);
    this.set('tempPrice', !this.get('tempPrice'));

    this.setData(data.name, data.qty, data.price)
  },

  @action closeModal(){
    this.set('tempPrice', !this.get('tempPrice'));

    this.set('isShowingModal', false);
    this.set('selectedId', '');
    this.setData();
    this.send("sessionChanged");

  },

  setData(name = '', qty = 0, price = 0){
    this.set('name', name);
    this.set('qty', qty);
    this.set('price', price);
  },
});

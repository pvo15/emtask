import Controller from '@ember/controller';
import {inject } from '@ember/service';
import { action } from '@ember/object';


export default Controller.extend({
  shopService: inject(),
  isShowingModal: false,
  newShop: '',
  selectedId: '',
  @action async addShop(name){
    this.set('newShop', '')
    await this.shopService.addShop(name);
  },
  @action async editShop(name, id){
    this.set('newShop', '');
    await this.shopService.editShop(id, name)
  },
  @action async remove(id){
    this.set('newShop', '');
    await this.shopService.removeShop(id)
  },
  @action openModal(shopName = '', id = ''){
    this.set('isShowingModal', true);
    this.set('selectedId', id);
    this.set('newShop', shopName);
  },
  @action closeModal(){
    this.set('isShowingModal', false);
    this.set('selectedId', '');
    this.set('newShop', '');
  },

});

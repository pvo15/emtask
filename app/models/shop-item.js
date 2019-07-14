import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name: DS.attr('string'),
    shopId: DS.attr('string'),
    qty: DS.attr('number'),
    price: DS.attr('number'),
    shop: DS.hasMany('shop')

});

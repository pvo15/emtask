export default function() {

  this.namespace = 'api';

  const shopItem =[ {
    "id": "56b7ecbc1ef21172377d63159",
    "type": "shop-item",
    "attributes": {
      "name":"koshik11111",
      "qty": 1,
      "price":1,
    }
  }]

  this.get('/shops', () => {
    return {
      data: [ {
        "id": "56b7ecbc1ef21172377d6159",
        "type": "shop",
        "attributes": {
          "name":"Ray",
        }
    }
    ]}
  });

  this.delete('/shops/:id', () => {
    return {
      data: [ ]
    }
  });

  this.get('/shop-items', function() {
    return {
      data: shopItem
     }
  });

  this.post('/shop-items', function(s, req) {
    console.log('bulki', req);
    return {
      data: shopItem
    }
  });

  this.delete('/shops/:id/shop-items', () => {
    return {
      data: [ ]
    }
  });
}

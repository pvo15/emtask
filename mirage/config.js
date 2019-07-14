export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
     Shorthand cheatsheet:/!*
     this.get('/posts');
     this.post('/posts');
     this.get('/posts/:id');
     this.put('/posts/:id'); // or this.patch
     this.del('/posts/:id');

     http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
   */

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

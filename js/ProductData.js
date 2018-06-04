module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Cloak of Self-Esteem',
        image: 'CloakOfSelfEsteem.jpg',
        description: 'Confident garb for your uncertain adventurer! Protects you against being charmed or frigthened',
        variants: [
          {
            sku: '123123',
            type: 'Single!',
            price: 4.99,
            inventory: 1

          },
          {
            sku: '123124',
            type: 'Romantic 2-Pack!',
            price: 12.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '5-Pack for your whole party!',
            price: 19.99,
            inventory: 3
          }
        ]
      }
    ]));
  }

};


const db = require('./models');

const initialData = 
[
    {
        imgUrl: 'https://i.imgur.com/gOKqQd2.jpg',
        name: 'Sequined Surplice Gown',
        price: '$276',
        description: `Gorgeous evening gown in allover glittering sequins. Topped with an elegant, draped surplice neckline and crafted with a fitted skirt and showstopping side slit. 
            93% polyester, 7% spandex mesh
            Hand wash
            Imported
            Model is 5'11" and wears size Extra Small`
    },
    {
        imgUrl: 'https://i.imgur.com/r1AC6aI.jpg',
        name: 'Ruffle Skirt Evening Gown',
        price: '$468',
        description: `Breathtaking gown crafted with a plunging V-neck with mesh insert. Constructed with a sleek fitted waist and striking criss cross tiered ruffles over a sheer lace skirt. Designed with an A-line shape for a flattering silhouette. Make a bold statement at your next event. 
            Adjustable shoulder straps
            Partially lined
            100% polyester
            Hand wash
            Imported`
    },
    {
        imgUrl: 'https://i.imgur.com/giAsXy0.jpg',
        name: 'Harper One-Shoulder Ruffle Gown',
        price: '146.24',
        description: `Statement-making one shoulder-gown with a single dramatic ruffle. Complete with asymmetrical bodice and side slit.
            
            Concealed back zipper`
    },
    {
        imgUrl: 'https://i.imgur.com/23pyDwI.jpg',
        name: 'One-Shoulder Pleated Metallic Gown',
        price: '$398',
        description: `Breathtaking gown with a one-shoulder design and a fitted waist. Elegant pleated skirt adds lightweight flowy movement. Crafted with metallic fabric for just enough shine. 
            71% polyester, 29% metallic
            Hand wash
            Imported`
    },
    {
        imgUrl: 'https://i.imgur.com/1vn7HNZ.jpg',
        name: 'Cameo Wrap Dress',
        price: '$223.50',
        description: `Sweet and feminine dress with an elegant wrap silhouette that ties at the waist. Topped with puffed sleeves and a surplice V-neckline. 

            57% polyester, 41% rayon, 2% spandex
            Machine wash
            Imported
            Model is 5'10" and wears size Extra Small/2`
    },
    {
        imgUrl: 'https://i.imgur.com/1waahxa.jpg',
        name: 'Sophia Strapless Lace Evening Dress',
        price: '$209.24',
        description: `Elegant strapless evening dress with a sleek floor-length silhouette. Topped with a delicate lace overlay and asymmetrical gathering at the waist. Finished with a side slit.

            95% polyester, 5% spandex
            Dry clean
            Imported`
    },
];


db.Item.create(initialData, (err) => {
    if(err) return console.log(err);

    process.exit();
});
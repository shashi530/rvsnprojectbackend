const mongoose = require ('mongoose')

const cartSchema = new mongoose.Schema(
    {
        id: {type: String},
        brandname: {type: String},
        price: {type: String},
        color:{type: String},
        discount_price:{type: String},
        screensize:{type: String},
        hard_disk_size:{type: String},
        ram:{type: String},
        os:{type: String},
        card_description:{type: String},
        summary:{type: String},
        images:[{type: String}]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const cartProducts = mongoose.model("cart", cartSchema);

module.exports = cartProducts;

//      "id":"",
// 		"brandname":"",
// 		"price":"",
// 		"color":"",
// 		"discount_price":"",
// 		"screensize":"",
// 		"hard_disik_size":"",
// 		"ram":"",
// 		"os":"",
// 		"card_discription":"",
// 		"summary":"",
// 		"images":["","","",""]
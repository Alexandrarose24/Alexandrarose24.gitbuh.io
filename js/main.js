var app = new Vue({
    el: '.items, .item, .contactUs',
    data: {
        products:[
            {id:1, title:"Russet Potatoes", short_text:"medium to large, oblong, or slightly flattened oval, light to medium brown russet-brown", image:"russet.png", desc:"floury, dry; light and fluffy; hearty skin that is chewy when cooked"},
            {id:2, title:"Red Potatoes", short_text:"small to medium; round or slightly oblong; smooth, thin red skin; white flesh", image:"red_p.png", desc:"waxy, moist and smooth; creamy texture"},
            {id:3, title:"White Potatoes", short_text:"small to medium; round to long shape; white or tan skin; white flesh", image:"white.png", desc:"medium starch; slightly creamy, slightly dense; thin, delicate skin"},
            {id:4, title:"Yellow Potatoes", short_text:"marble to large size; round or oblong shape; light tan to golden skin; yellow to golden flesh", image:"yellow_p.png", desc:"slightly waxy, velvety, moist texture"},
            {id:5, title:"Purple Potatoes", short_text:"small to medium-size; oblong to fingerling; deep purple, blue or slightly red skin; blue, purple lavender, pink or white flesh", image:"purple-p.png", desc:"moist; firm flesh. Note–all blue and purple Peruvian varieties have higher starch content and a floury texture"},
            {id:6, title:"Fingerling Potatoes", short_text:"2-4 inches long; finger-shaped or oblong; red, orange, purple or white skin; red orange, purple, yellow or white flesh", image:"fingerling-potatoes_.png", desc:"waxy, firm texture"}
        ],
        product:[],
        cart:[],
        cartIds:[],
        contactFields:[],
        btnVisible: 0,
        orderVisible: 0
    },
    mounted:function() {
        this.getProducts();
        this.checkInCart();
        this.getCart();
        console.log(this.cartIds);
        console.log(this.contactFields);
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        },
        getProducts:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products) {
                   for(i in this.products) {
                       if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                   } 
                }
            }
        },
        addToCart:function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function() {
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) !=-1 ) this.btnVisible=1;
        },
        getCart:function() {
            for(i in localStorage.getItem('cart')) {
                for(p in this.products) {
                    if(this.products[p].id == localStorage.getItem('cart').split(',')[i]) {
                       this.cart.push(this.products[p]);
                       this.cartIds.push(this.products[p].id);
                    }
                }
            }
        },
        removeFromCart:function(id) {
            for(i in this.cart) {
                if(this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                    this.cartIds.splice(i, 1);
                    window.localStorage.setItem('cart', this.cartIds.join());
                }
            }
        },
        makeOrder:function() {
            this.orderVisible = 1;
            this.cart = [];
            this.cartIds = [];
            window.localStorage.removeItem('cart');
        }
    }
});

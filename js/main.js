var app = new Vue({
    el: '.items, .item, .contactUs',
    data: {
        products:[
            {id:1, title:"TAG 1000 (TAG 853)", short_text:"Tomato Determinate Red Standard Round", image:"tomato1.png", desc:"Resistance HR: ToMV:0-2; Fol: 1,2; Ve/Vd; IR: TYLCV "},
            {id:2, title:"TAG 1001 (TAG 855)", short_text:"Tomato Determinate Red Standard Round", image:"tomato3.png", desc:"Resistance HR: ToMV:0-2; Fol: 1,2; Ve/Vd; IR: TYLCV "},
            {id:3, title:"TAG 1002 (TAG 809)", short_text:"Tomato Determinate Red Standard Round", image:"tomato2.png", desc:"Resistance HR: ToMV:0-2; Fol: 1,2; Ve/Vd; IR: TYLCV "},
            {id:4, title:"TAG 1003 (TAG 834 )", short_text:"Tomato Determinate Red Standard Round", image:"tomato4.png", desc:"Resistance HR: ToMV:0-2; Fol: 1,2; Ve/Vd; IR: TYLCV ."},
            {id:5, title:"TAG 1004 (TAG 848)", short_text:"Tomato Determinate Red BEEF Round", image:"tomato5.png ", desc:"Resistance HR: ToMV:0-2; Fol: 1,2; Ve/Vd; IR: TYLCV "},
            {id:6, title:"TAG 1005 (TAG 800)", short_text:"Tomato Determinate Red Standard Round", image:"tomato6.png", desc:"Resistance HR: ToMV:0-2; Fol: 1,2; Ve/Vd; IR: TYLCV "},
            {id:6, title:"TAG 1006 (TAG 898)", short_text:"Tomato Determinate Red Elongated", image:"tomato7.png", desc:"Resistance HR: ToMV:0-2; Fol: 1,2; Ve/Vd; IR: TYLCV "},
            {id:7, title:"TAG 1007 (TAG 816)", short_text:"Tomato Determinate Red Elongated", image:"tomato3.png", desc:"Resistance HR: ToMV:0-2; Fol: 1,2; Ve/Vd; IR: TYLCV "}
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

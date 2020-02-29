
new Vue({
    el: "#root",
    data:{
        principal: " ",
        rate: " ",
        numberComp: 1, 
        time: " ",
        finalAmount: " "
    },

    methods: {
        calculate: function(){
            this.finalAmount = (this.principal* Math.pow((1 + (this.rate/(this.numberComp*100))), (this.numberComp*this.time)))
            this.finalAmount = this.finalAmount.toFixed(2)

        }
    }
});


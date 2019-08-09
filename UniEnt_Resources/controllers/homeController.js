const home = function(){
    const index = function(ctx){
        ctx.isSigned = !!storage.getData('authToken');
        this.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
            homepage: './views/home.hbs'
        }).then(function(){
            if(ctx.isSigned){
                furnitureModel.getAll().then((data) => {
                    ctx.furniture = data;
                    this.partial('./views/Home/home.hbs');
                })
            } else {
                ctx.furniture = {}
                this.partial('./views/Home/home.hbs');
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return {
        index
    };
}();

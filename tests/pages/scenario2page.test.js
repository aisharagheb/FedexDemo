module.exports = function() {

    //fields for log-in page/ log-in button
    this.usernameField = element(by.model('login.credentials.Username'));
    this.passwordField = element(by.model('login.credentials.Password'));
    this.btnLog = $('#submit_login');



    this.productCatalogbtn = $('a[href="#/products"]');
    this.createNewbtn = element(by.buttonText('Create New'));
    this.buyerCatalogbtn = $('a[href="#/catalog"]');
    this.printProductsbtn = $('a[href="#/catalog/category/POPPRINT"]');
    this.bizCardbtn = element(by.binding('product.Name'));
    this.createNewBizbtn = element(by.buttonText('Create New'));
    this.bizSavebtn = element(by.buttonText('Save'));

    //form fields for business cards
    this.bizName = element(by.model('formmodel.Specs.Name.Value'));
    this.bizTitle = element(by.model('formmodel.Specs.Title.Value'));
    this.bizEmail = element(by.model('formmodel.Specs.Email.Value'));
    this.bizWebsite = element(by.model('formmodel.Specs.Website.Value'));
    this.bizAddress = element(by.model('formmodel.Specs.Address.Value'));
    this.bizCity = element(by.model('formmodel.Specs.City.Value'));
    this.bizState = element(by.model('formmodel.Specs.State.Value'));

};
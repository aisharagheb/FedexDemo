var Scenario2DockPage = require('./pages/scenario2page.test.js');
var scen2 = new Scenario2DockPage();


describe('Buyer Scenario 2, creating a business card---', function(){
    it('should log me in', function(){
        browser.get('http://chilis.fedexofficestores.com/');

        scen2.usernameField.sendKeys('FedExFranchiseManager');
        scen2.passwordField.sendKeys('fails345');

        scen2.btnLog.click();
    });

    it('should click on navigate to print products area', function(){



    expect(scen2.buyerCatalogbtn.getText()).toMatch('CATALOG');

    scen2.buyerCatalogbtn.click();
    scen2.printProductsbtn.click();

    });

    it('should navigate me to the business card customization', function() {

        scen2.bizCardbtn.click();
        scen2.createNewBizbtn.click();
    });


    //browser.driver.manage().window().maximize();

    it('should fill in customizable fields for business card',function(){

    scen2.bizName.sendKeys('test');
    scen2.bizTitle.sendKeys('CEO');
    scen2.bizEmail.sendKeys('test@gmail.com');
    scen2.bizWebsite.sendKeys('www.test.com');
    scen2.bizAddress.sendKeys('400 N. 1st Ave');
    scen2.bizCity.sendKeys('Minneapolis');
    scen2.bizState.sendKeys('MN');
    });

    //scen2.bizSavebtn.click();
});


export default class SaleOrder {
    sId = "";
    sClient="";
    sName = "";
    sOrderDate="";
    sArticle="";
    sDescription="";
    sQuantity="";
    sPrice="";
    sSolicitedDate="";
    factStatus="";
    cxcStatus="";
    preciosStatus="";
    ingStatus="";
    planStatus="";

    constructor(sId, sClient,sName,sOrderDate, sArticle,sDescription, sQuantity, sPrice, sSolicitedDate, factStatus,cxcStatus,
    preciosStatus,ingStatus, planStatus)
    {
      this.sId = sId;
      this.sClient= sClient;
      this.sName=sName;
      this.sOrderDate=sOrderDate;
      this.sArticle=sArticle;
      this.sDescription=sDescription;
      this.sQuantity=sQuantity;
      this.sPrice= sPrice;
      this.sSolicitedDate= sSolicitedDate;
      this.factStatus= factStatus;
      this.cxcStatus= cxcStatus;
      this.preciosStatus=preciosStatus;
      this.ingStatus= ingStatus;
      this.planStatus= planStatus;
    }
    getId()
    {
      return this.sId;
    }

    getSaleClient(){
      return this.sClient;
    }

    getSaleName()
    {
      return this.sName;
    }

    getSaleOrderDate(){
      return this.sOrderDate;
    }

    getSaleArticle(){
      return this.sArticle;
    }

    getSaleDescription(){
      return this.sDescription;
    }
    getSaleQuantity(){
      return this.sQuantity;
    }
    getSalePrice(){
      return this.sPrice;
    }
    getSaleSolicitedDate(){
      return this.sSolicitedDate;
    }

    getFacturationStatus(){
      return this.factStatus;
    }

    getCxCStatus(){
      return this.cxcStatus;
    }

    getPricesStatus(){
      return this.preciosStatus;
    }

    getEngineeringStatus(){
      return this.ingStatus;
    }
    getPlanningStatus(){
      return this.planStatus;
    }


}

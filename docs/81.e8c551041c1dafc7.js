"use strict";(self.webpackChunkBenStockTracker=self.webpackChunkBenStockTracker||[]).push([[81],{5081:(ut,f,i)=>{i.r(f),i.d(f,{PortfolioModule:()=>gt});var d=i(9808),k=i(3075),w=i(6222),C=i(228),g=i(1083),t=i(5e3),p=i(3251),c=i(4999),v=i(9062),u=i(4847),r=i(1777),y=i(4195),S=i(2368),h=i(7322),T=i(7531),x=i(8743),Z=i(6047),b=i(7423),R=i(5245),P=i(1133),_=i(520),O=i(9646),D=i(5625),M=i(262),F=i(7261);let A=(()=>{class n{constructor(e,o){this.http=e,this.snackBar=o,this.backendServerUrl="http://127.0.0.1:5000",this.httpOptions={headers:(new _.WM).set("content-type","application/json").set("Access-Control-Allow-Origin","*")}}showSnackBar(e){this.snackBar.open(e,"Dismiss",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}error(e){let o=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`;return this.showSnackBar(o),(0,O.of)({data:[],message:o,status:500})}wrapHttpCall(e){return e.pipe((0,D.X)(2),(0,M.K)(this.error))}load(e){const o=this.http.get([this.backendServerUrl,"load",e].join("/"),this.httpOptions);return this.wrapHttpCall(o)}dump(e,o){const s=this.http.post([this.backendServerUrl,"dump",e].join("/"),o,this.httpOptions);return this.wrapHttpCall(s)}loadHoldings(){const e=this.http.get("assets/holdings.json");return this.wrapHttpCall(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(_.eN),t.LFG(F.ux))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var J=i(4834),Q=i(9950),$=i(1791),U=i(3788),N=i(4350),H=i(8894);let Y=(()=>{class n{constructor(e,o){this.stocksService=e,this.crudService=o,this.callCount=0}ngOnInit(){this.stocksService.loadStockResource(this.stockStats.symbol,"news").subscribe(e=>{this.stockNews=Object.values(e.data).sort((o,s)=>s.providerPublishTime-o.providerPublishTime)}),this.crudService.load("holdings").subscribe(e=>{200===e.status&&(this.holdings=e.data[this.stockStats.symbol])})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(P.T),t.Y36(A))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stocks-details"]],inputs:{stockStats:"stockStats"},decls:13,vars:6,consts:[["mat-align-tabs","center"],["label","Chart"],[3,"symbol"],["label","Stats"],[3,"stockStats"],["label","financials"],["label","News"],[3,"news"],["label","Company"],[3,"symbol","profile"]],template:function(e,o){1&e&&(t._UZ(0,"mat-divider"),t.TgZ(1,"mat-tab-group",0)(2,"mat-tab",1),t._UZ(3,"app-stock-chart-panel",2),t.qZA(),t._uU(4,"\xe5 "),t.TgZ(5,"mat-tab",3),t._UZ(6,"app-stock-stats-panel",4),t.qZA(),t.TgZ(7,"mat-tab",5),t._UZ(8,"app-symbol-financials-widget",2),t.qZA(),t.TgZ(9,"mat-tab",6),t._UZ(10,"app-stock-news-panel",7),t.qZA(),t.TgZ(11,"mat-tab",8),t._UZ(12,"app-stock-profile-panel",9),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("symbol",o.stockStats.symbol),t.xp6(3),t.Q6J("stockStats",o.stockStats),t.xp6(2),t.Q6J("symbol",o.stockStats.symbol),t.xp6(2),t.Q6J("news",o.stockNews),t.xp6(2),t.Q6J("symbol",o.stockStats.symbol)("profile",o.stockStats.summaryProfile))},directives:[J.d,p.SP,p.uX,Q.S,$.g,U.i,N.g,H.l],styles:["mat-tab-group[_ngcontent-%COMP%]{padding-bottom:20px}app-stock-financials-panel[_ngcontent-%COMP%]{width:100%;height:auto}"]}),n})();const I=["singleQuoteWidget"];function B(n,a){if(1&n&&(t.TgZ(0,"th",24),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.xp6(1),t.Oqu(o.headers[e])}}function E(n,a){if(1&n&&t._UZ(0,"app-single-quote-widget",33),2&n){const e=t.oxw(2).$implicit;t.s9C("symbol",e.symbol)}}function j(n,a){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e.symbol)}}function W(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw(2).expandRow(s)}),t.YNc(1,E,1,1,"app-single-quote-widget",32),t.YNc(2,j,2,1,"div",29),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.showTickerWidget),t.xp6(1),t.Q6J("ngIf",!e.showTickerWidget)}}function G(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",34),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw(2).expandRow(s)}),t._UZ(1,"app-price-slider",35),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("min",e.stats.summaryDetail.fiftyTwoWeekLow.toFixed(2))("max",e.stats.summaryDetail.fiftyTwoWeekHigh.toFixed(2))("currentPrice",e.stats.price.regularMarketOpen.toFixed(2))("costAverage",e.costAverage.toFixed(2))("sharesOwned",e.sharesOwned)}}const m=function(n){return{color:n}};function q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",34),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw(2).expandRow(s)}),t.TgZ(1,"div",36),t._uU(2),t.qZA(),t.TgZ(3,"div",36),t._uU(4),t.qZA()()}if(2&n){const e=t.oxw().$implicit,o=t.oxw().index,s=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(4,m,s.getColColor(e,o))),t.xp6(1),t.Oqu(s.cells[o](e)),t.xp6(1),t.Q6J("ngStyle",t.VKq(6,m,s.getColColor(e,o))),t.xp6(1),t.hij("",e.glPercent.toFixed(2),"%")}}function z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"button",37)(2,"mat-icon",38),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw(2).expandRow(s)}),t._uU(3),t.qZA()()()}if(2&n){const e=t.oxw(3);t.xp6(3),t.Oqu(e.expandedRow?"expand_less":"expand_more")}}function X(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"span",39),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit;return t.oxw(2).expandRow(s)}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw().index,s=t.oxw();t.Q6J("ngStyle",t.VKq(2,m,s.getColColor(e,o))),t.xp6(1),t.hij(" ",s.cells[o](e)," ")}}function V(n,a){if(1&n&&(t.TgZ(0,"td",25),t.YNc(1,W,3,2,"div",26),t.YNc(2,G,2,5,"div",27),t.YNc(3,q,5,8,"div",28),t.YNc(4,z,4,1,"div",29),t.YNc(5,X,2,4,"ng-template",null,30,t.W1O),t.qZA()),2&n){const e=t.MAs(6),o=t.oxw().index;t.xp6(1),t.Q6J("ngIf",0===o),t.xp6(1),t.Q6J("ngIf",1===o),t.xp6(1),t.Q6J("ngIf",3===o)("ngIfElse",e),t.xp6(1),t.Q6J("ngIf",11===o)}}function K(n,a){if(1&n&&(t.TgZ(0,"td",40),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.Q6J("ngStyle",t.VKq(2,m,"-"===o.footerRow[e]()[1]?"tomato":"forestgreen")),t.xp6(1),t.hij(" ",o.footerRow[e]()," ")}}function L(n,a){if(1&n&&(t.ynx(0,21),t.YNc(1,B,2,1,"th",22),t.YNc(2,V,7,5,"td",15),t.YNc(3,K,2,4,"td",23),t.BQk()),2&n){const o=a.index;t.Q6J("matColumnDef",a.$implicit)("sticky",0===o)}}function tt(n,a){if(1&n&&t._UZ(0,"app-stocks-details",43),2&n){const e=t.oxw().$implicit;t.Q6J("stockStats",e.stats)}}function et(n,a){if(1&n&&(t.TgZ(0,"td",25)(1,"div",41),t.YNc(2,tt,1,1,"app-stocks-details",42),t.qZA()()),2&n){const e=a.$implicit,o=t.oxw();t.uIk("colspan",o.columnDefs.length),t.xp6(1),t.Q6J("@detailExpand",e===o.expandedRow?"expanded":"collapsed"),t.xp6(1),t.Q6J("ngIf",o.expandedRow&&o.expandedRow.symbol===e.symbol)}}function ot(n,a){1&n&&t._UZ(0,"tr",44)}function nt(n,a){if(1&n&&t._UZ(0,"tr",45),2&n){const e=a.$implicit,o=t.oxw();t.ekj("example-expanded-row",o.expandedRow===e)}}function at(n,a){1&n&&t._UZ(0,"tr",46)}function st(n,a){1&n&&t._UZ(0,"tr",47)}function it(n,a){if(1&n&&(t.TgZ(0,"tr",48)(1,"td",49),t._uU(2),t.qZA()()),2&n){t.oxw();const e=t.MAs(14);t.xp6(2),t.hij(" Wow! No data matching the filter. ",e.value," ")}}const ct=function(){return["expandedRow"]};let lt=(()=>{class n{constructor(e){this.activatedRoute=e,this.today=new Date,this.holdings={},this.stocksData=[],this.dataSource=new c.by,this.columnDefs=["symbol","Cost Average & 52 Week Price Range","marketValue","gainLoss","yield","yieldPercent","yieldOnCost","payoutRatio","exDivDate","sector","analysis","actions"],this.headers=["Symbol","Cost Average & 52 Week Price Range","Market Value","Gain / Lost","Yield","Yield %","Yield on Cost","Payout Ratio","Ex-Div Date","Sector","Analysis",""],this.cells=[o=>"",o=>"",o=>`$${o.marketValue.toFixed(2)}`,o=>`$${o.gainLoss.toFixed(2)}`,o=>`$${o.yield.toFixed(2)}`,o=>`${o.yieldPercent.toFixed(2)}%`,o=>`${o.yieldOnCost.toFixed(2)}%`,o=>`${o.payoutRatio.toFixed(2)}%`,o=>`${o.exDivDate}`,o=>o.sector,o=>o.analysis.toUpperCase(),o=>""],this.footerRow=[()=>"",()=>`$${this.dataSource.data.map(o=>o.sharesOwned*o.costAverage).reduce((o,s)=>o+s,0).toFixed(2)}`,()=>`$${this.dataSource.data.map(o=>o.sharesOwned*o.marketPrice).reduce((o,s)=>o+s,0).toFixed(2)}`,()=>`$${this.dataSource.data.map(o=>(o.marketPrice-o.costAverage)*o.sharesOwned).reduce((o,s)=>o+s,0).toFixed(2)}`,()=>"",()=>`$${this.dataSource.data.map(o=>o.yield*o.sharesOwned).reduce((o,s)=>o+s,0).toFixed(2)}`,()=>"",()=>"",()=>"",()=>"",()=>"",()=>"",()=>""],this.showTickerWidget=!1}getColColor(e,o){switch(o){case 3:return"-"===this.cells[o](e)[1]?"tomato":"forestgreen";case 5:case 6:return"0.00%"!==this.cells[o](e)?"steelblue":"#191919";case 7:return e.payoutRatio>=50?"tomato":"#191919";case 10:return this.getAnalysisColor(e.analysis);default:return"#191919"}}getAnalysisColor(e){switch(e){case"strong buy":return"forestgreen";case"buy":return"limegreen";case"hold":return"steelblue";case"underperform":return"orange";case"sell":return"tomato";default:return"#191919"}}ngOnInit(){this.activatedRoute.data.subscribe(e=>{this.dataSource.data=Object.values(e.stocks.default)})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(e){this.dataSource.filter=e.target.value}expandRow(e){this.expandedRow=this.expandedRow===e?null:e}handleToggle(e){this.showTickerWidget=e.checked}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stocks"]],viewQuery:function(e,o){if(1&e&&(t.Gf(c.BZ,5),t.Gf(v.NW,5),t.Gf(u.YE,5),t.Gf(I,5)),2&e){let s;t.iGM(s=t.CRH())&&(o.table=s.first),t.iGM(s=t.CRH())&&(o.paginator=s.first),t.iGM(s=t.CRH())&&(o.sort=s.first),t.iGM(s=t.CRH())&&(o.singleQuoteWidget=s.first)}},decls:25,vars:14,consts:[[1,"container-header"],[1,"summary"],["icon","paid","subtitle","Market Value",3,"value"],["icon","paid","subtitle","Investment",3,"value"],["icon","paid","subtitle","Unrealized Profit",3,"value","color"],["icon","paid","subtitle","Dividend Income","color","steelblue",3,"value"],[1,"table-actions"],["color","primary","checked","false","labelPosition","before",1,"widget-toggle",3,"change"],["appearance","standard"],["matInput","",3,"keyup"],["input",""],[1,"table-container"],["mat-table","","matSort","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource"],[3,"matColumnDef","sticky",4,"ngFor","ngForOf"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","","class","table-header",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"example-expanded-row",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],["mat-footer-row","","class","table-footer",4,"matFooterRowDef","matFooterRowDefSticky"],["class","mat-row",4,"matNoDataRow"],[3,"matColumnDef","sticky"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-footer-cell","",3,"ngStyle",4,"matFooterCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"click",4,"ngIf","ngIfElse"],[4,"ngIf"],["elseBlock",""],[1,"table-col-0",3,"click"],["class","single-quote-widget",3,"symbol",4,"ngIf"],[1,"single-quote-widget",3,"symbol"],[3,"click"],[3,"min","max","currentPrice","costAverage","sharesOwned"],[3,"ngStyle"],["mat-button","","color","primary"],[1,"material-icons-round",3,"click"],[3,"ngStyle","click"],["mat-footer-cell","",3,"ngStyle"],[1,"expanded-stock-detail"],[3,"stockStats",4,"ngIf"],[3,"stockStats"],["mat-header-row","",1,"table-header"],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"],["mat-footer-row","",1,"table-footer"],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,o){1&e&&(t.ynx(0),t.TgZ(1,"div",0)(2,"header",1),t._UZ(3,"app-stat-card",2)(4,"app-stat-card",3)(5,"app-stat-card",4)(6,"app-stat-card",5),t.qZA(),t.TgZ(7,"div",6)(8,"mat-slide-toggle",7),t.NdJ("change",function(l){return o.handleToggle(l)}),t._uU(9,"Ticker Widgets"),t.qZA(),t.TgZ(10,"mat-form-field",8)(11,"mat-label"),t._uU(12,"Filter"),t.qZA(),t.TgZ(13,"input",9,10),t.NdJ("keyup",function(l){return o.applyFilter(l)}),t.qZA()()()(),t.TgZ(15,"div",11)(16,"table",12),t.YNc(17,L,4,2,"ng-container",13),t.ynx(18,14),t.YNc(19,et,3,3,"td",15),t.BQk(),t.YNc(20,ot,1,0,"tr",16),t.YNc(21,nt,1,2,"tr",17),t.YNc(22,at,1,0,"tr",18),t.YNc(23,st,1,0,"tr",19),t.YNc(24,it,3,1,"tr",20),t.qZA()(),t.BQk()),2&e&&(t.xp6(3),t.Q6J("value",o.footerRow[2]()),t.xp6(1),t.Q6J("value",o.footerRow[1]()),t.xp6(1),t.Q6J("value",o.footerRow[3]())("color","-"===o.footerRow[3]()[1]?"tomato":"forestgreen"),t.xp6(1),t.Q6J("value",o.footerRow[5]()),t.xp6(10),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngForOf",o.columnDefs),t.xp6(3),t.Q6J("matHeaderRowDef",o.columnDefs)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.columnDefs),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(13,ct)),t.xp6(1),t.Q6J("matFooterRowDef",o.columnDefs)("matFooterRowDefSticky",!0))},directives:[y.i,S.Rr,h.KE,h.hX,T.Nt,c.BZ,u.YE,d.sg,c.w1,c.fO,c.ge,u.nU,c.Dz,c.ev,d.O5,x.x,Z.d,d.PC,b.lW,R.Hw,c.mD,c.yh,Y,c.as,c.XQ,c.nj,c.Gk,c.Ke,c.Q2,c.Ee],styles:[".container-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.summary[_ngcontent-%COMP%]{display:flex;align-items:center}.table-actions[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center;margin-right:2%}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-top:10px}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.table-col-3[_ngcontent-%COMP%], .table-col-8[_ngcontent-%COMP%]{width:max-content;margin-right:5px}.expanded-stock-detail[_ngcontent-%COMP%]{overflow:hidden;align-items:center}.table-header[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#191919}.mat-cell[_ngcontent-%COMP%]{padding-right:20px}.table-col-0[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:30%}.mat-row[_ngcontent-%COMP%]:not(.expanded-stock-row):hover   .mat-cell[_ngcontent-%COMP%]{font-weight:700}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.single-quote-widget[_ngcontent-%COMP%]{height:90px}td.mat-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}mat-slide-toggle[_ngcontent-%COMP%]{margin-right:20px}"],data:{animation:[(0,r.X$)("detailExpand",[(0,r.SB)("collapsed",(0,r.oB)({height:"0px",minHeight:"0"})),(0,r.SB)("expanded",(0,r.oB)({height:"*"})),(0,r.eR)("expanded <=> collapsed",(0,r.jt)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),n})();function rt(n,a){1&n&&t._UZ(0,"app-single-quote-widget",2),2&n&&t.s9C("symbol",a.$implicit)}let dt=(()=>{class n{constructor(){this.holdings=[]}ngOnInit(){i.e(736).then(i.t.bind(i,8736,19)).then(e=>{this.holdings=Object.keys(e).slice(0,-1),console.log(this.holdings)})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-holdings"]],decls:2,vars:1,consts:[[1,"widget-container"],["class","single-quote-widget",3,"symbol",4,"ngFor","ngForOf"],[1,"single-quote-widget",3,"symbol"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,rt,1,1,"app-single-quote-widget",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.holdings))},directives:[d.sg,x.x],styles:[".widget-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}"]}),n})();const pt=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-portfolio"]],decls:5,vars:0,consts:[["mat-align-tabs","left"],["label","Portfolio"],["label","Holdings"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1),t._UZ(2,"app-stocks"),t.qZA(),t.TgZ(3,"mat-tab",2),t._UZ(4,"app-holdings"),t.qZA()())},directives:[p.SP,p.uX,lt,dt],styles:[""]}),n})()}];let mt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(pt)],g.Bz]}),n})(),gt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,k.UX,mt,w.i,C.q]]}),n})()}}]);
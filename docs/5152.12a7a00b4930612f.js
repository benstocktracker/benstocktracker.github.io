(self.webpackChunkBenStockTracker=self.webpackChunkBenStockTracker||[]).push([[5152],{5152:(v,h,s)=>{"use strict";s.r(h),s.d(h,{PortfolioModule:()=>At});var d=s(6895),g=s(4006),_=s(4863),f=s(228),p=s(3060),t=s(4650),u=s(3848),c=s(7155),w=s(7974),m=s(6308),r=s(7340),x=s(9549),T=s(4144),C=s(455),P=s(4195),k=s(8743),b=s(6369),O=s(4850),R=s(9950),S=s(4350),M=s(8894),D=s(1791),N=s(3788);let Z=(()=>{class n{constructor(){}ngOnInit(){s(8963)(`./${this.stockStats.symbol}-news.json`).then(e=>{this.stockNews=Object.values(e.default).sort((o,i)=>i.providerPublishTime-o.providerPublishTime)})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stocks-details"]],inputs:{stockStats:"stockStats"},decls:12,vars:6,consts:[["mat-align-tabs","center"],["label","Chart"],[3,"symbol"],["label","Stats"],[3,"stockStats"],["label","Financials"],["label","News"],[3,"news"],["label","Company"],[3,"symbol","profile"]],template:function(e,o){1&e&&(t._UZ(0,"mat-divider"),t.TgZ(1,"mat-tab-group",0)(2,"mat-tab",1),t._UZ(3,"app-stock-chart-panel",2),t.qZA(),t.TgZ(4,"mat-tab",3),t._UZ(5,"app-stock-stats-panel",4),t.qZA(),t.TgZ(6,"mat-tab",5),t._UZ(7,"app-symbol-financials-widget",2),t.qZA(),t.TgZ(8,"mat-tab",6),t._UZ(9,"app-stock-news-panel",7),t.qZA(),t.TgZ(10,"mat-tab",8),t._UZ(11,"app-stock-profile-panel",9),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("symbol",o.stockStats.symbol),t.xp6(2),t.Q6J("stockStats",o.stockStats),t.xp6(2),t.Q6J("symbol",o.stockStats.symbol),t.xp6(2),t.Q6J("news",o.stockNews),t.xp6(2),t.Q6J("symbol",o.stockStats.symbol)("profile",o.stockStats.summaryProfile))},dependencies:[u.SP,u.uX,O.d,R.S,S.g,M.l,D.g,N.i],styles:["mat-tab-group[_ngcontent-%COMP%]{padding-bottom:20px}app-stock-financials-panel[_ngcontent-%COMP%]{width:100%;height:auto}"]}),n})();const A=["singleQuoteWidget"];function J(n,a){if(1&n&&(t.TgZ(0,"th",25),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.xp6(1),t.Oqu(o.headers[e])}}function Q(n,a){if(1&n&&t._UZ(0,"app-single-quote-widget",35),2&n){const e=t.oxw(2).$implicit;t.s9C("symbol",e.symbol)}}function F(n,a){if(1&n&&t._UZ(0,"img",36),2&n){const e=t.oxw(2).$implicit,o=t.oxw(2);t.Q6J("src",o.getLogoURL(e),t.LSH)}}function j(n,a){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e.symbol)}}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t.YNc(1,Q,1,1,"app-single-quote-widget",32),t.YNc(2,F,1,1,"img",33),t.YNc(3,j,2,1,"div",34),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.showTickerWidget),t.xp6(1),t.Q6J("ngIf",!e.showTickerWidget),t.xp6(1),t.Q6J("ngIf",!e.showTickerWidget)}}function W(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",37),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._UZ(1,"app-price-range-slider",38),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("min",e.stats.summaryDetail.fiftyTwoWeekLow.toFixed(2))("max",e.stats.summaryDetail.fiftyTwoWeekHigh.toFixed(2))("currentPrice",e.stats.price.regularMarketPreviousClose.toFixed(2))("costAverage",e.costAverage.toFixed(2))("shares",e.shares)}}const y=function(n){return{color:n}};function U(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",37),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t.TgZ(1,"div",39),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit,o=t.oxw().index,i=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(2,y,i.getColColor(e,o))),t.xp6(1),t.hij("",e.profitPercent.toFixed(2),"%")}}function $(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",37),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t.TgZ(1,"div"),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.exDivDate)}}function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"span",40),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw().index,i=t.oxw();t.Q6J("ngStyle",t.VKq(2,y,i.getColColor(e,o))),t.xp6(1),t.hij(" ",i.cells[o](e)," ")}}function H(n,a){if(1&n&&(t.TgZ(0,"td",26),t.YNc(1,I,4,3,"div",27),t.YNc(2,W,2,5,"div",28),t.YNc(3,U,3,4,"div",28),t.YNc(4,$,3,1,"div",29),t.YNc(5,Y,2,4,"ng-template",null,30,t.W1O),t.qZA()),2&n){const e=t.MAs(6),o=t.oxw().index;t.xp6(1),t.Q6J("ngIf",0===o),t.xp6(1),t.Q6J("ngIf",1===o),t.xp6(1),t.Q6J("ngIf",3===o),t.xp6(1),t.Q6J("ngIf",8===o)("ngIfElse",e)}}function E(n,a){if(1&n&&(t.TgZ(0,"td",41),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.Q6J("ngStyle",t.VKq(2,y,"-"===o.footerRow[e]()[1]?"tomato":"forestgreen")),t.xp6(1),t.hij(" ",o.footerRow[e]()," ")}}function q(n,a){if(1&n&&(t.ynx(0,22),t.YNc(1,J,2,1,"th",23),t.YNc(2,H,7,5,"td",16),t.YNc(3,E,2,4,"td",24),t.BQk()),2&n){const o=a.index;t.Q6J("matColumnDef",a.$implicit)("sticky",0===o)}}function B(n,a){if(1&n&&t._UZ(0,"app-stocks-details",44),2&n){const e=t.oxw().$implicit;t.Q6J("stockStats",e.stats)}}function G(n,a){if(1&n&&(t.TgZ(0,"td",26)(1,"div",42),t.YNc(2,B,1,1,"app-stocks-details",43),t.qZA()()),2&n){const e=a.$implicit,o=t.oxw();t.uIk("colspan",o.columnDefs.length),t.xp6(1),t.Q6J("@detailExpand",e===o.expandedRow?"expanded":"collapsed"),t.xp6(1),t.Q6J("ngIf",o.expandedRow&&o.expandedRow.symbol===e.symbol)}}function z(n,a){1&n&&t._UZ(0,"tr",45)}function L(n,a){if(1&n&&t._UZ(0,"tr",46),2&n){const e=a.$implicit,o=t.oxw();t.ekj("example-expanded-row",o.expandedRow===e)}}function V(n,a){1&n&&t._UZ(0,"tr",47)}function K(n,a){1&n&&t._UZ(0,"tr",48)}function X(n,a){if(1&n&&(t.TgZ(0,"tr",49)(1,"td",50),t._uU(2),t.qZA()()),2&n){t.oxw();const e=t.MAs(15);t.xp6(2),t.hij(" Wow! No data matching the filter. ",e.value," ")}}const tt=function(){return[5,10,20,50]},et=function(){return["expandedRow"]};let nt=(()=>{class n{constructor(e){this.activatedRoute=e,this.today=new Date,this.holdings={},this.stocksData=[],this.dataSource=new c.by,this.columnDefs=["symbol","Cost Average & 52 Week Price Range","marketValue","profit","yieldPercent","dividendIncome","yieldOnCost","payoutRatio","exDivDate","sector","analysis"],this.headers=["Symbol","Cost Average & 52 Week Price Range","Market Value","Profit","Yield","Dividend Income","Yield on Cost","Payout Ratio","Ex-Div Date","Sector","Analysis"],this.cells=[o=>"",o=>"",o=>`$${o.marketValue.toFixed(2)}`,o=>`$${o.profit.toFixed(2)}`,o=>o.yield>0?`${o.yieldPercent.toFixed(2)}% ($${o.yield.toFixed(2)})`:"N/A",o=>o.yield>0?`$${o.dividendIncome.toFixed(2)}`:"N/A",o=>o.yield>0?`${o.yieldOnCost.toFixed(2)}%`:"N/A",o=>o.yield>0?`${o.payoutRatio.toFixed(2)}%`:"N/A",o=>"",o=>o.sector,o=>o.analysis.toUpperCase(),o=>""],this.footerRow=[()=>"",()=>`$${this.dataSource.data.map(o=>o.costBasis).reduce((o,i)=>o+i,0).toFixed(2)}`,()=>`$${this.dataSource.data.map(o=>o.marketValue).reduce((o,i)=>o+i,0).toFixed(2)}`,()=>`$${this.dataSource.data.map(o=>o.profit).reduce((o,i)=>o+i,0).toFixed(2)}`,()=>"",()=>`$${this.dataSource.data.map(o=>o.dividendIncome).reduce((o,i)=>o+i,0).toFixed(2)}`,()=>"",()=>"",()=>"",()=>"",()=>"",()=>"",()=>""],this.showTickerWidget=!1}getColColor(e,o){switch(o){case 3:return"-"===this.cells[o](e)[1]?"tomato":"forestgreen";case 6:return e.yield>0?"steelblue":"#191919";case 7:return e.payoutRatio>=50?"tomato":"#191919";case 10:return this.getAnalysisColor(e.analysis);default:return"#191919"}}getAnalysisColor(e){switch(e){case"strong buy":return"forestgreen";case"buy":return"limegreen";case"hold":return"steelblue";case"underperform":return"orange";case"sell":return"tomato";default:return"#191919"}}getLogoURL(e){return`https://logo.clearbit.com/${e.stats.summaryProfile?.website.split("www.")[1]||"clearbit.com"}?size=40&format=png`}ngOnInit(){this.activatedRoute.data.subscribe(e=>{this.dataSource.data=Object.values(e.stocks.default),console.log(this.dataSource.data)})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(e){this.dataSource.filter=e.target.value}expandRow(e){this.expandedRow=this.expandedRow===e?null:e}handleToggle(e){this.showTickerWidget=e.checked}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stocks"]],viewQuery:function(e,o){if(1&e&&(t.Gf(c.BZ,5),t.Gf(w.NW,5),t.Gf(m.YE,5),t.Gf(A,5)),2&e){let i;t.iGM(i=t.CRH())&&(o.table=i.first),t.iGM(i=t.CRH())&&(o.paginator=i.first),t.iGM(i=t.CRH())&&(o.sort=i.first),t.iGM(i=t.CRH())&&(o.singleQuoteWidget=i.first)}},decls:27,vars:18,consts:[[1,"container-header"],[1,"summary"],["icon","paid","subtitle","Market Value",3,"value"],["icon","paid","subtitle","Investment",3,"value"],["icon","paid","subtitle","Unrealized Profit",3,"value","color"],["icon","paid","subtitle","Dividend dividendIncome","color","steelblue",3,"value"],[1,"table-actions"],["color","primary","checked","false","labelPosition","before",1,"widget-toggle",3,"change"],["appearance","standard"],["matInput","",3,"keyup"],["input",""],["showFirstLastButtons","",3,"length","pageSizeOptions","pageSize"],[1,"table-container"],["mat-table","","matSort","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource"],[3,"matColumnDef","sticky",4,"ngFor","ngForOf"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"example-expanded-row",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],["class","mat-row",4,"matNoDataRow"],[3,"matColumnDef","sticky"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-footer-cell","",3,"ngStyle",4,"matFooterCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"click",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"table-col-0",3,"click"],["class","single-quote-widget",3,"symbol",4,"ngIf"],["alt","Logo","onerror","this.src='https://logo.clearbit.com/clearbit.com?size=40&format=png'",3,"src",4,"ngIf"],[4,"ngIf"],[1,"single-quote-widget",3,"symbol"],["alt","Logo","onerror","this.src='https://logo.clearbit.com/clearbit.com?size=40&format=png'",3,"src"],[3,"click"],[3,"min","max","currentPrice","costAverage","shares"],[3,"ngStyle"],[3,"ngStyle","click"],["mat-footer-cell","",3,"ngStyle"],[1,"expanded-stock-detail"],[3,"stockStats",4,"ngIf"],[3,"stockStats"],["mat-header-row",""],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"],["mat-footer-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,o){1&e&&(t.ynx(0),t.TgZ(1,"div",0)(2,"header",1),t._UZ(3,"app-stat-card",2)(4,"app-stat-card",3)(5,"app-stat-card",4)(6,"app-stat-card",5),t.qZA(),t.TgZ(7,"div",6)(8,"DIV")(9,"mat-slide-toggle",7),t.NdJ("change",function(l){return o.handleToggle(l)}),t._uU(10,"Ticker Widgets"),t.qZA(),t.TgZ(11,"mat-form-field",8)(12,"mat-label"),t._uU(13,"Filter"),t.qZA(),t.TgZ(14,"input",9,10),t.NdJ("keyup",function(l){return o.applyFilter(l)}),t.qZA()()(),t._UZ(16,"mat-paginator",11),t.qZA()(),t.TgZ(17,"div",12)(18,"table",13),t.YNc(19,q,4,2,"ng-container",14),t.ynx(20,15),t.YNc(21,G,3,3,"td",16),t.BQk(),t.YNc(22,z,1,0,"tr",17),t.YNc(23,L,1,2,"tr",18),t.YNc(24,V,1,0,"tr",19),t.YNc(25,K,1,0,"tr",20),t.YNc(26,X,3,1,"tr",21),t.qZA()(),t.BQk()),2&e&&(t.xp6(3),t.Q6J("value",o.footerRow[2]()),t.xp6(1),t.Q6J("value",o.footerRow[1]()),t.xp6(1),t.Q6J("value",o.footerRow[3]())("color","-"===o.footerRow[3]()[1]?"tomato":"forestgreen"),t.xp6(1),t.Q6J("value",o.footerRow[5]()),t.xp6(10),t.Q6J("length",o.dataSource.data.length)("pageSizeOptions",t.DdM(16,tt))("pageSize",50),t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngForOf",o.columnDefs),t.xp6(3),t.Q6J("matHeaderRowDef",o.columnDefs)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.columnDefs),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(17,et)),t.xp6(1),t.Q6J("matFooterRowDef",o.columnDefs)("matFooterRowDefSticky",!0))},dependencies:[d.sg,d.O5,d.PC,x.KE,x.hX,T.Nt,C.Rr,w.NW,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.mD,c.Ke,c.ge,c.ev,c.yh,c.XQ,c.Gk,c.Q2,c.Ee,m.YE,m.nU,P.i,k.x,b.h,Z],styles:[".container-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.summary[_ngcontent-%COMP%]{display:flex;align-items:center}.table-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:right}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-top:10px}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.table-col-3[_ngcontent-%COMP%], .table-col-8[_ngcontent-%COMP%]{width:max-content;margin-right:5px}.expanded-stock-detail[_ngcontent-%COMP%]{overflow:hidden;align-items:center}.mat-cell[_ngcontent-%COMP%]{padding-right:20px}.table-col-0[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:20px}.table-col-0[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin-left:20px;border-radius:50%}.mat-row[_ngcontent-%COMP%]:not(.expanded-stock-row):hover   .mat-cell[_ngcontent-%COMP%]{font-weight:700}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.single-quote-widget[_ngcontent-%COMP%]{height:90px}td.mat-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}mat-slide-toggle[_ngcontent-%COMP%]{margin-right:20px}td[_ngcontent-%COMP%]{cursor:pointer}.mat-button[_ngcontent-%COMP%]{min-width:20px;padding:0}"],data:{animation:[(0,r.X$)("detailExpand",[(0,r.SB)("collapsed",(0,r.oB)({height:"0px",minHeight:"0"})),(0,r.SB)("expanded",(0,r.oB)({height:"*"})),(0,r.eR)("expanded <=> collapsed",(0,r.jt)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),n})(),ot=(()=>{class n{constructor(){this.news=[]}ngOnInit(){s.e(8739).then(s.t.bind(s,8739,19)).then(e=>{this.news=Object.values(e.default).sort((o,i)=>i.providerPublishTime-o.providerPublishTime)})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-news"]],decls:1,vars:1,consts:[[3,"news"]],template:function(e,o){1&e&&t._UZ(0,"app-stock-news-panel",0),2&e&&t.Q6J("news",o.news)},dependencies:[S.g],styles:[".add-padding[_ngcontent-%COMP%]{padding:20px}.news-container[_ngcontent-%COMP%]{padding-bottom:5px}.news-item[_ngcontent-%COMP%]{display:flex;margin:0 0 3px;align-items:center}.news-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], span[_ngcontent-%COMP%], mat-icon[_ngcontent-%COMP%]{margin-right:10px}a[_ngcontent-%COMP%]{color:#4682b4}"]}),n})();var it=s(9197);function at(n,a){1&n&&t._UZ(0,"app-mini-chart-widget",6),2&n&&t.s9C("symbol",a.$implicit)}function st(n,a){if(1&n&&(t.TgZ(0,"div",1),t.YNc(1,at,1,1,"app-mini-chart-widget",5),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.holdings)}}function ct(n,a){1&n&&t._UZ(0,"app-single-quote-widget",8),2&n&&t.s9C("symbol",a.$implicit)}function lt(n,a){if(1&n&&t.YNc(0,ct,1,1,"app-single-quote-widget",7),2&n){const e=t.oxw();t.Q6J("ngForOf",e.holdings)}}let rt=(()=>{class n{constructor(){this.holdings=[],this.showMiniChartWidget=!1}ngOnInit(){s.e(8736).then(s.t.bind(s,8736,19)).then(e=>{this.holdings=Object.keys(e).slice(0,-1)})}handleToggle(e){this.showMiniChartWidget=e.checked}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-holdings"]],decls:6,vars:2,consts:[["color","primary","checked","false","labelPosition","before",1,"widget-toggle",3,"change"],[1,"widget-container"],["class","widget-container",4,"ngIf","ngIfElse"],["class","widget-container"],["showSingleQuoteWidget",""],["class","mini-chart-widget",3,"symbol",4,"ngFor","ngForOf"],[1,"mini-chart-widget",3,"symbol"],["class","single-quote-widget",3,"symbol",4,"ngFor","ngForOf"],[1,"single-quote-widget",3,"symbol"]],template:function(e,o){if(1&e&&(t.TgZ(0,"mat-slide-toggle",0),t.NdJ("change",function(l){return o.handleToggle(l)}),t._uU(1,"Show mini charts"),t.qZA(),t.TgZ(2,"div",1),t.YNc(3,st,2,1,"div",2),t.YNc(4,lt,1,1,"ng-template",3,4,t.W1O),t.qZA()),2&e){const i=t.MAs(5);t.xp6(3),t.Q6J("ngIf",o.showMiniChartWidget)("ngIfElse",i)}},dependencies:[d.sg,d.O5,C.Rr,k.x,it.L],styles:[".widget-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.mat-slide-toggle[_ngcontent-%COMP%]{padding:20px}"]}),n})();var dt=s(529);const pt=["singleQuoteWidget"];function mt(n,a){if(1&n&&(t.TgZ(0,"th",18),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.xp6(1),t.Oqu(o.headers[e])}}function gt(n,a){if(1&n&&t._UZ(0,"app-single-quote-widget",28),2&n){const e=t.oxw(2).$implicit;t.s9C("symbol",e.symbol)}}function _t(n,a){if(1&n&&t._UZ(0,"img",29),2&n){const e=t.oxw(2).$implicit,o=t.oxw(2);t.Q6J("src",o.getLogoURL(e),t.LSH)}}function ft(n,a){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e.symbol)}}function ut(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",24),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t.YNc(1,gt,1,1,"app-single-quote-widget",25),t.YNc(2,_t,1,1,"img",26),t.YNc(3,ft,2,1,"div",27),t.qZA()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.showTickerWidget),t.xp6(1),t.Q6J("ngIf",!e.showTickerWidget),t.xp6(1),t.Q6J("ngIf",!e.showTickerWidget)}}function wt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",30),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._UZ(1,"app-price-range-slider",31),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("min",e.stats.summaryDetail.fiftyTwoWeekLow.toFixed(2))("max",e.stats.summaryDetail.fiftyTwoWeekHigh.toFixed(2))("currentPrice",e.stats.price.regularMarketPreviousClose.toFixed(2))("costAverage",0)("shares",0)}}function xt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",30),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t.TgZ(1,"div"),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.exDivDate)}}const ht=function(n){return{color:n}};function Ct(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"span",32),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw().index,i=t.oxw();t.Q6J("ngStyle",t.VKq(2,ht,i.getColColor(e,o))),t.xp6(1),t.hij(" ",i.cells[o](e)," ")}}function kt(n,a){if(1&n&&(t.TgZ(0,"td",19),t.YNc(1,ut,4,3,"div",20),t.YNc(2,wt,2,5,"div",21),t.YNc(3,xt,3,1,"div",22),t.YNc(4,Ct,2,4,"ng-template",null,23,t.W1O),t.qZA()),2&n){const e=t.MAs(5),o=t.oxw().index;t.xp6(1),t.Q6J("ngIf",0===o),t.xp6(1),t.Q6J("ngIf",1===o),t.xp6(1),t.Q6J("ngIf",4===o)("ngIfElse",e)}}function yt(n,a){if(1&n&&(t.ynx(0,16),t.YNc(1,mt,2,1,"th",17),t.YNc(2,kt,6,4,"td",11),t.BQk()),2&n){const o=a.index;t.Q6J("matColumnDef",a.$implicit)("sticky",0===o)}}function vt(n,a){if(1&n&&t._UZ(0,"app-stocks-details",35),2&n){const e=t.oxw().$implicit;t.Q6J("stockStats",e.stats)}}function Tt(n,a){if(1&n&&(t.TgZ(0,"td",19)(1,"div",33),t.YNc(2,vt,1,1,"app-stocks-details",34),t.qZA()()),2&n){const e=a.$implicit,o=t.oxw();t.uIk("colspan",o.columnDefs.length),t.xp6(1),t.Q6J("@detailExpand",e===o.expandedRow?"expanded":"collapsed"),t.xp6(1),t.Q6J("ngIf",o.expandedRow&&o.expandedRow.symbol===e.symbol)}}function bt(n,a){1&n&&t._UZ(0,"tr",36)}function St(n,a){if(1&n&&t._UZ(0,"tr",37),2&n){const e=a.$implicit,o=t.oxw();t.ekj("example-expanded-row",o.expandedRow===e)}}function Zt(n,a){1&n&&t._UZ(0,"tr",38)}function Pt(n,a){if(1&n&&(t.TgZ(0,"tr",39)(1,"td",40),t._uU(2),t.qZA()()),2&n){t.oxw();const e=t.MAs(10);t.xp6(2),t.hij(" Wow! No data matching the filter. ",e.value," ")}}const Ot=function(){return[5,10,20,50]},Rt=function(){return["expandedRow"]};let Mt=(()=>{class n{constructor(e,o){this.activatedRoute=e,this.http=o,this.today=new Date,this.holdings={},this.stocksData=[],this.dataSource=new c.by,this.columnDefs=["symbol","52 Week Price Range","yieldPercent","payoutRatio","exDivDate","sector","analysis"],this.headers=["Symbol","52 Week Price Range","Yield","Payout Ratio","Ex-Div Date","Sector","Analysis"],this.cells=[i=>"",i=>"",i=>i.yield>0?`${i.yieldPercent.toFixed(2)}% ($${i.yield})`:"N/A",i=>i.yield>0?`${i.payoutRatio.toFixed(2)}%`:"N/A",i=>"",i=>i.sector,i=>i.analysis.toUpperCase(),i=>""],this.showTickerWidget=!1}getColColor(e,o){switch(o){case 3:return e.payoutRatio>=50?"tomato":"#191919";case 6:return this.getAnalysisColor(e.analysis);default:return"#191919"}}getAnalysisColor(e){switch(e){case"strong buy":return"forestgreen";case"buy":return"limegreen";case"hold":return"steelblue";case"underperform":return"orange";case"sell":return"tomato";default:return"#191919"}}getLogoURL(e){return`https://logo.clearbit.com/${e.stats.summaryProfile?.website.split("www.")[1]||"clearbit.com"}?size=40&format=png`}ngOnInit(){this.http.get("../../../../assets/watchlist-rows.json").subscribe(e=>{this.dataSource.data=Object.values(e),console.table(Object.values(e))})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(e){this.dataSource.filter=e.target.value}expandRow(e){this.expandedRow=this.expandedRow===e?null:e}handleToggle(e){this.showTickerWidget=e.checked}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz),t.Y36(dt.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-watchlist"]],viewQuery:function(e,o){if(1&e&&(t.Gf(c.BZ,5),t.Gf(w.NW,5),t.Gf(m.YE,5),t.Gf(pt,5)),2&e){let i;t.iGM(i=t.CRH())&&(o.table=i.first),t.iGM(i=t.CRH())&&(o.paginator=i.first),t.iGM(i=t.CRH())&&(o.sort=i.first),t.iGM(i=t.CRH())&&(o.singleQuoteWidget=i.first)}},decls:21,vars:11,consts:[[1,"container-header"],[1,"table-actions"],["color","primary","checked","false","labelPosition","before",1,"widget-toggle",3,"change"],["appearance","standard"],["matInput","",3,"keyup"],["input",""],["showFirstLastButtons","",3,"length","pageSizeOptions","pageSize"],[1,"table-container"],["mat-table","","matSort","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource"],[3,"matColumnDef","sticky",4,"ngFor","ngForOf"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"example-expanded-row",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[3,"matColumnDef","sticky"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"click",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"table-col-0",3,"click"],["class","single-quote-widget",3,"symbol",4,"ngIf"],["alt","Logo","onerror","this.src='https://logo.clearbit.com/clearbit.com?size=40&format=png'",3,"src",4,"ngIf"],[4,"ngIf"],[1,"single-quote-widget",3,"symbol"],["alt","Logo","onerror","this.src='https://logo.clearbit.com/clearbit.com?size=40&format=png'",3,"src"],[3,"click"],[3,"min","max","currentPrice","costAverage","shares"],[3,"ngStyle","click"],[1,"expanded-stock-detail"],[3,"stockStats",4,"ngIf"],[3,"stockStats"],["mat-header-row",""],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,o){1&e&&(t.ynx(0),t.TgZ(1,"div",0)(2,"div",1)(3,"div")(4,"mat-slide-toggle",2),t.NdJ("change",function(l){return o.handleToggle(l)}),t._uU(5,"Ticker Widgets"),t.qZA(),t.TgZ(6,"mat-form-field",3)(7,"mat-label"),t._uU(8,"Filter"),t.qZA(),t.TgZ(9,"input",4,5),t.NdJ("keyup",function(l){return o.applyFilter(l)}),t.qZA()()(),t._UZ(11,"mat-paginator",6),t.qZA()(),t.TgZ(12,"div",7)(13,"table",8),t.YNc(14,yt,3,2,"ng-container",9),t.ynx(15,10),t.YNc(16,Tt,3,3,"td",11),t.BQk(),t.YNc(17,bt,1,0,"tr",12),t.YNc(18,St,1,2,"tr",13),t.YNc(19,Zt,1,0,"tr",14),t.YNc(20,Pt,3,1,"tr",15),t.qZA()(),t.BQk()),2&e&&(t.xp6(11),t.Q6J("length",o.dataSource.data.length)("pageSizeOptions",t.DdM(9,Ot))("pageSize",50),t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngForOf",o.columnDefs),t.xp6(3),t.Q6J("matHeaderRowDef",o.columnDefs)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.columnDefs),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(10,Rt)))},dependencies:[d.sg,d.O5,d.PC,x.KE,x.hX,T.Nt,C.Rr,w.NW,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,c.Ee,m.YE,m.nU,k.x,b.h,Z],styles:[".container-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.summary[_ngcontent-%COMP%]{display:flex;align-items:center}.table-actions[_ngcontent-%COMP%]{display:flex;justify-content:right}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-top:10px}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.table-col-3[_ngcontent-%COMP%], .table-col-8[_ngcontent-%COMP%]{width:max-content;margin-right:5px}.expanded-stock-detail[_ngcontent-%COMP%]{overflow:hidden;align-items:center}.mat-cell[_ngcontent-%COMP%]{padding-right:20px}.table-col-0[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:20px}.table-col-0[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin-left:20px;border-radius:50%}.mat-row[_ngcontent-%COMP%]:not(.expanded-stock-row):hover   .mat-cell[_ngcontent-%COMP%]{font-weight:700}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.single-quote-widget[_ngcontent-%COMP%]{height:90px}td.mat-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}mat-slide-toggle[_ngcontent-%COMP%]{margin-right:20px}td[_ngcontent-%COMP%]{cursor:pointer}.mat-button[_ngcontent-%COMP%]{min-width:20px;padding:0}"],data:{animation:[(0,r.X$)("detailExpand",[(0,r.SB)("collapsed",(0,r.oB)({height:"0px",minHeight:"0"})),(0,r.SB)("expanded",(0,r.oB)({height:"*"})),(0,r.eR)("expanded <=> collapsed",(0,r.jt)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),n})();const Dt=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-portfolio"]],decls:9,vars:0,consts:[["mat-align-tabs","left"],["label","Portfolio"],["label","Holdings"],["label","News"],["label","Watchlist"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1),t._UZ(2,"app-stocks"),t.qZA(),t.TgZ(3,"mat-tab",2),t._UZ(4,"app-holdings"),t.qZA(),t.TgZ(5,"mat-tab",3),t._UZ(6,"app-news"),t.qZA(),t.TgZ(7,"mat-tab",4),t._UZ(8,"app-watchlist"),t.qZA()())},dependencies:[u.SP,u.uX,nt,ot,rt,Mt]}),n})()}];let Nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(Dt),p.Bz]}),n})(),At=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,g.UX,Nt,_.i,f.q]}),n})()},8963:(v,h,s)=>{var d={"./AAPL-news.json":[4109,4109],"./ABBV-news.json":[1745,1745],"./ARCC-news.json":[7437,1791],"./BAC-news.json":[1695,1695],"./BEN-news.json":[3496,3496],"./CHTR-news.json":[1120,1120],"./DIDI-news.json":[870,870],"./DIS-news.json":[7055,7055],"./DOCN-news.json":[9103,9103],"./ENB-news.json":[7137,7137],"./ET-news.json":[1026,1026],"./FRT-news.json":[3456,3456],"./GILD-news.json":[5676,5676],"./HD-news.json":[8183,8183],"./JMIA-news.json":[5012,5012],"./JNJ-news.json":[4458,4458],"./KMI-news.json":[9921,9921],"./KO-news.json":[7824,7824],"./MMM-news.json":[890,890],"./MSFT-news.json":[1857,1857],"./NIO-news.json":[5123,5123],"./NVAX-news.json":[7042,7042],"./O-news.json":[5501,5501],"./ONL-news.json":[8779,8779],"./PFE-news.json":[207,207],"./PG-news.json":[2735,2735],"./QYLD-news.json":[7965,7965],"./RTL-news.json":[1787,1787],"./SBUX-news.json":[9371,9371],"./SPG-news.json":[6337,6337],"./STOR-news.json":[3080,3080],"./T-news.json":[7784,2416],"./TPVG-news.json":[5830,5830],"./TSM-news.json":[2937,2937],"./UL-news.json":[5786,5786],"./VICI-news.json":[1015,1015],"./VTRS-news.json":[2627,2627],"./VZ-news.json":[5549,5549],"./XPEV-news.json":[255,255],"./wbd-news.json":[3843,3843]};function g(_){if(!s.o(d,_))return Promise.resolve().then(()=>{var t=new Error("Cannot find module '"+_+"'");throw t.code="MODULE_NOT_FOUND",t});var f=d[_],p=f[0];return s.e(f[1]).then(()=>s.t(p,19))}g.keys=()=>Object.keys(d),g.id=8963,v.exports=g}}]);
(self.webpackChunkBenStockTracker=self.webpackChunkBenStockTracker||[]).push([[5152],{5152:(h,x,a)=>{"use strict";a.r(x),a.d(x,{PortfolioModule:()=>Ct});var d=a(6895),g=a(4006),_=a(4863),f=a(228),p=a(3060),t=a(4650),u=a(3848),c=a(7155),C=a(7974),m=a(6308),r=a(7340),y=a(9549),S=a(4144),M=a(4195),k=a(8743),v=a(6369),b=a(4850),R=a(9950),T=a(4350),Z=a(8894),D=a(3788);let P=(()=>{class n{constructor(){}ngOnInit(){a(8963)(`./${this.stockStats.symbol}-news.json`).then(e=>{this.stockNews=Object.values(e.default).sort((o,i)=>i.providerPublishTime-o.providerPublishTime)})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stocks-details"]],inputs:{stockStats:"stockStats"},decls:10,vars:5,consts:[["mat-align-tabs","center"],["label","Chart"],[3,"symbol"],["label","Financials"],["label","News"],[3,"news"],["label","Company"],[3,"symbol","profile"]],template:function(e,o){1&e&&(t._UZ(0,"mat-divider"),t.TgZ(1,"mat-tab-group",0)(2,"mat-tab",1),t._UZ(3,"app-stock-chart-panel",2),t.qZA(),t.TgZ(4,"mat-tab",3),t._UZ(5,"app-symbol-financials-widget",2),t.qZA(),t.TgZ(6,"mat-tab",4),t._UZ(7,"app-stock-news-panel",5),t.qZA(),t.TgZ(8,"mat-tab",6),t._UZ(9,"app-stock-profile-panel",7),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("symbol",o.stockStats.symbol),t.xp6(2),t.Q6J("symbol",o.stockStats.symbol),t.xp6(2),t.Q6J("news",o.stockNews),t.xp6(2),t.Q6J("symbol",o.stockStats.symbol)("profile",o.stockStats.summaryProfile))},dependencies:[u.SP,u.uX,b.d,R.S,T.g,Z.l,D.i],styles:["mat-tab-group[_ngcontent-%COMP%]{padding-bottom:20px}app-stock-financials-panel[_ngcontent-%COMP%]{width:100%;height:auto}"]}),n})();const O=["singleQuoteWidget"];function j(n,s){if(1&n&&(t.TgZ(0,"th",23),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.xp6(1),t.hij(" ",o.headers[e]," ")}}function N(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",29),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._UZ(1,"app-single-quote-widget",30),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.s9C("symbol",e.symbol)}}function A(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._UZ(1,"app-price-range-slider",32),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("min",e.stats.summaryDetail.fiftyTwoWeekLow.toFixed(2))("max",e.stats.summaryDetail.fiftyTwoWeekHigh.toFixed(2))("currentPrice",e.stats.price.regularMarketPreviousClose.toFixed(2))("costAverage",e.costAverage.toFixed(2))("shares",e.shares)}}const w=function(n){return{color:n}};function F(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t.TgZ(1,"div",33),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit,o=t.oxw().index,i=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(2,w,i.getColColor(e,o))),t.xp6(1),t.hij(" ",e.profitPercent.toFixed(2),"% ")}}function Q(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t.TgZ(1,"div"),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.exDivDate)}}function J(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",34),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw().index,i=t.oxw();t.Q6J("ngStyle",t.VKq(2,w,i.getColColor(e,o))),t.xp6(1),t.hij(" ",i.cells[o](e)," ")}}function $(n,s){if(1&n&&(t.TgZ(0,"td",24),t.YNc(1,N,2,1,"div",25),t.YNc(2,A,2,5,"div",26),t.YNc(3,F,3,4,"div",26),t.YNc(4,Q,3,1,"div",27),t.YNc(5,J,2,4,"ng-template",null,28,t.W1O),t.qZA()),2&n){const e=t.MAs(6),o=t.oxw().index;t.xp6(1),t.Q6J("ngIf",0===o),t.xp6(1),t.Q6J("ngIf",1===o),t.xp6(1),t.Q6J("ngIf",3===o),t.xp6(1),t.Q6J("ngIf",8===o)("ngIfElse",e)}}function I(n,s){if(1&n&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.Q6J("ngStyle",t.VKq(2,w,"-"===o.footerRow[e]()[1]?"tomato":"forestgreen")),t.xp6(1),t.hij(" ",o.footerRow[e]()," ")}}function U(n,s){if(1&n&&(t.ynx(0,20),t.YNc(1,j,2,1,"th",21),t.YNc(2,$,7,5,"td",14),t.YNc(3,I,2,4,"td",22),t.BQk()),2&n){const o=s.index;t.Q6J("matColumnDef",s.$implicit)("sticky",0===o)}}function W(n,s){if(1&n&&t._UZ(0,"app-stocks-details",38),2&n){const e=t.oxw().$implicit;t.Q6J("stockStats",e.stats)}}function H(n,s){if(1&n&&(t.TgZ(0,"td",24)(1,"div",36),t.YNc(2,W,1,1,"app-stocks-details",37),t.qZA()()),2&n){const e=s.$implicit,o=t.oxw();t.uIk("colspan",o.columnDefs.length),t.xp6(1),t.Q6J("@detailExpand",e===o.expandedRow?"expanded":"collapsed"),t.xp6(1),t.Q6J("ngIf",o.expandedRow&&o.expandedRow.symbol===e.symbol)}}function Y(n,s){1&n&&t._UZ(0,"tr",39)}function B(n,s){if(1&n&&t._UZ(0,"tr",40),2&n){const e=s.$implicit,o=t.oxw();t.ekj("example-expanded-row",o.expandedRow===e)}}function G(n,s){1&n&&t._UZ(0,"tr",41)}function E(n,s){1&n&&t._UZ(0,"tr",42)}function V(n,s){if(1&n&&(t.TgZ(0,"tr",43)(1,"td",44),t._uU(2),t.qZA()()),2&n){t.oxw();const e=t.MAs(12);t.xp6(2),t.hij(" Wow! No data matching the filter. ",e.value," ")}}const K=function(){return["expandedRow"]};let X=(()=>{class n{constructor(e){this.activatedRoute=e,this.today=new Date,this.holdings={},this.stocksData=[],this.dataSource=new c.by,this.columnDefs=["symbol","holding & 52 Week Price Range","marketValue","profit","yieldPercent","dividendIncome","yieldOnCost","payoutRatio","exDivDate","sector","analysis","portfolio %"],this.headers=["Symbol","Holding & 52 Week Price Range","Market Value","Profit","Yield","Dividend Income","Yield on Cost","Payout Ratio","Ex-Div Date","Sector","Analysis","Portfolio %"],this.costBasis=0,this.marketValue=0,this.unrealizedGain=0,this.dividendIncome=0,this.cells=[o=>"",o=>"",o=>`$${o.marketValue.toFixed(2)}`,o=>`$${o.profit.toFixed(2)}`,o=>o.yield>0?`${o.yieldPercent.toFixed(2)}% ($${o.yield.toFixed(2)})`:"N/A",o=>o.yield>0?`$${o.dividendIncome.toFixed(2)}`:"N/A",o=>o.yield>0?`${o.yieldOnCost.toFixed(2)}%`:"N/A",o=>o.yield>0?`${o.payoutRatio.toFixed(2)}%`:"N/A",o=>"",o=>o.sector,o=>o.analysis.toUpperCase(),o=>`${(o.marketValue/this.marketValue*100).toFixed(2)}%`],this.footerRow=[()=>"",()=>`$${this.costBasis.toFixed(2)}`,()=>`$${this.marketValue.toFixed(2)}`,()=>`$${this.unrealizedGain.toFixed(2)}`,()=>"",()=>`$${this.dividendIncome.toFixed(2)}`,()=>"",()=>"",()=>"",()=>"",()=>"",()=>"",()=>""]}getColColor(e,o){switch(o){case 3:return"-"===this.cells[o](e)[1]?"tomato":"forestgreen";case 6:return e.yield>0?"steelblue":"#191919";case 7:return e.payoutRatio>=50?"tomato":"#191919";case 10:return this.getAnalysisColor(e.analysis);default:return"#191919"}}getAnalysisColor(e){switch(e){case"strong buy":return"forestgreen";case"buy":return"limegreen";case"hold":return"steelblue";case"underperform":return"orange";case"sell":return"tomato";default:return"#191919"}}ngOnInit(){this.activatedRoute.data.subscribe(e=>{this.dataSource.data=Object.values(e.stocks.default)}),this.costBasis=this.dataSource.data.map(e=>e.costBasis).reduce((e,o)=>e+o,0),this.marketValue=this.dataSource.data.map(e=>e.marketValue).reduce((e,o)=>e+o,0),this.unrealizedGain=this.dataSource.data.map(e=>e.profit).reduce((e,o)=>e+o,0),this.dividendIncome=this.dataSource.data.map(e=>e.dividendIncome).reduce((e,o)=>e+o,0)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(e){this.dataSource.filter=e.target.value}expandRow(e){this.expandedRow=this.expandedRow===e?null:e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stocks"]],viewQuery:function(e,o){if(1&e&&(t.Gf(c.BZ,5),t.Gf(C.NW,5),t.Gf(m.YE,5),t.Gf(O,5)),2&e){let i;t.iGM(i=t.CRH())&&(o.table=i.first),t.iGM(i=t.CRH())&&(o.paginator=i.first),t.iGM(i=t.CRH())&&(o.sort=i.first),t.iGM(i=t.CRH())&&(o.singleQuoteWidget=i.first)}},decls:23,vars:14,consts:[[1,"container-header"],[1,"summary"],["icon","paid","subtitle","Market Value",3,"value"],["icon","paid","subtitle","Investment",3,"value"],["icon","paid","subtitle","Unrealized Profit",3,"value","color"],["icon","paid","subtitle","Dividend dividendIncome","color","steelblue",3,"value"],[1,"table-actions"],["appearance","standard"],["matInput","",3,"keyup"],["input",""],[1,"table-container"],["mat-table","","matSort","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource"],[3,"matColumnDef","sticky",4,"ngFor","ngForOf"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"example-expanded-row",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],["class","mat-row",4,"matNoDataRow"],[3,"matColumnDef","sticky"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-footer-cell","",3,"ngStyle",4,"matFooterCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"click",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"table-col-0",3,"click"],[1,"single-quote-widget",3,"symbol"],[3,"click"],[3,"min","max","currentPrice","costAverage","shares"],[3,"ngStyle"],[3,"ngStyle","click"],["mat-footer-cell","",3,"ngStyle"],[1,"expanded-stock-detail"],[3,"stockStats",4,"ngIf"],[3,"stockStats"],["mat-header-row",""],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"],["mat-footer-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,o){1&e&&(t.ynx(0),t.TgZ(1,"div",0)(2,"header",1),t._UZ(3,"app-stat-card",2)(4,"app-stat-card",3)(5,"app-stat-card",4)(6,"app-stat-card",5),t.qZA(),t.TgZ(7,"div",6)(8,"mat-form-field",7)(9,"mat-label"),t._uU(10,"Filter"),t.qZA(),t.TgZ(11,"input",8,9),t.NdJ("keyup",function(l){return o.applyFilter(l)}),t.qZA()()()(),t.TgZ(13,"div",10)(14,"table",11),t.YNc(15,U,4,2,"ng-container",12),t.ynx(16,13),t.YNc(17,H,3,3,"td",14),t.BQk(),t.YNc(18,Y,1,0,"tr",15),t.YNc(19,B,1,2,"tr",16),t.YNc(20,G,1,0,"tr",17),t.YNc(21,E,1,0,"tr",18),t.YNc(22,V,3,1,"tr",19),t.qZA()(),t.BQk()),2&e&&(t.xp6(3),t.Q6J("value",o.footerRow[2]()),t.xp6(1),t.Q6J("value",o.footerRow[1]()),t.xp6(1),t.Q6J("value",o.footerRow[3]())("color","-"===o.footerRow[3]()[1]?"tomato":"forestgreen"),t.xp6(1),t.Q6J("value",o.footerRow[5]()),t.xp6(8),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngForOf",o.columnDefs),t.xp6(3),t.Q6J("matHeaderRowDef",o.columnDefs)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.columnDefs),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(13,K)),t.xp6(1),t.Q6J("matFooterRowDef",o.columnDefs)("matFooterRowDefSticky",!0))},dependencies:[d.sg,d.O5,d.PC,y.KE,y.hX,S.Nt,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.mD,c.Ke,c.ge,c.ev,c.yh,c.XQ,c.Gk,c.Q2,c.Ee,m.YE,m.nU,M.i,k.x,v.h,P],styles:[".container-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.summary[_ngcontent-%COMP%]{display:flex;align-items:center}.table-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:right}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-top:10px}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.table-col-3[_ngcontent-%COMP%], .table-col-8[_ngcontent-%COMP%]{width:max-content;margin-right:5px}.expanded-stock-detail[_ngcontent-%COMP%]{overflow:hidden;align-items:center}.mat-cell[_ngcontent-%COMP%]{padding-right:20px}.table-col-0[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:20px}.table-col-0[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin-left:20px;border-radius:50%}.mat-row[_ngcontent-%COMP%]:not(.expanded-stock-row):hover   .mat-cell[_ngcontent-%COMP%]{font-weight:700}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.single-quote-widget[_ngcontent-%COMP%]{height:90px}td.mat-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}mat-slide-toggle[_ngcontent-%COMP%]{margin-right:20px}td[_ngcontent-%COMP%]{cursor:pointer}.mat-button[_ngcontent-%COMP%]{min-width:20px;padding:0}"],data:{animation:[(0,r.X$)("detailExpand",[(0,r.SB)("collapsed",(0,r.oB)({height:"0px",minHeight:"0"})),(0,r.SB)("expanded",(0,r.oB)({height:"*"})),(0,r.eR)("expanded <=> collapsed",(0,r.jt)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),n})(),z=(()=>{class n{constructor(){this.news=[]}ngOnInit(){a.e(8739).then(a.t.bind(a,8739,19)).then(e=>{this.news=Object.values(e.default).sort((o,i)=>i.providerPublishTime-o.providerPublishTime)})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-news"]],decls:1,vars:1,consts:[[3,"news"]],template:function(e,o){1&e&&t._UZ(0,"app-stock-news-panel",0),2&e&&t.Q6J("news",o.news)},dependencies:[T.g],styles:[".add-padding[_ngcontent-%COMP%]{padding:20px}.news-container[_ngcontent-%COMP%]{padding-bottom:5px}.news-item[_ngcontent-%COMP%]{display:flex;margin:0 0 3px;align-items:center}.news-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], span[_ngcontent-%COMP%], mat-icon[_ngcontent-%COMP%]{margin-right:10px}a[_ngcontent-%COMP%]{color:#4682b4}"]}),n})();var L=a(9197);function q(n,s){1&n&&t._UZ(0,"app-mini-chart-widget",2),2&n&&t.s9C("symbol",s.$implicit)}let tt=(()=>{class n{constructor(){this.holdings=[],this.showMiniChartWidget=!1}ngOnInit(){a.e(8736).then(a.t.bind(a,8736,19)).then(e=>{this.holdings=Object.keys(e).slice(0,-1)})}handleToggle(e){this.showMiniChartWidget=e.checked}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-holdings"]],decls:2,vars:1,consts:[[1,"widget-container"],["class","mini-chart-widget",3,"symbol",4,"ngFor","ngForOf"],[1,"mini-chart-widget",3,"symbol"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,q,1,1,"app-mini-chart-widget",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.holdings))},dependencies:[d.sg,L.L],styles:[".widget-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.mat-slide-toggle[_ngcontent-%COMP%]{padding:20px}"]}),n})();var et=a(529);const nt=["singleQuoteWidget"];function ot(n,s){if(1&n&&(t.TgZ(0,"th",10),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.xp6(1),t.hij(" ",o.headers[e]," ")}}function it(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",16),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._UZ(1,"app-single-quote-widget",17),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.s9C("symbol",e.symbol)}}function st(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._UZ(1,"app-price-range-slider",19),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("min",e.stats.summaryDetail.fiftyTwoWeekLow.toFixed(2))("max",e.stats.summaryDetail.fiftyTwoWeekHigh.toFixed(2))("currentPrice",e.stats.price.regularMarketPreviousClose.toFixed(2))("costAverage",0)("shares",0)("showHolding",!1)}}function at(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t.TgZ(1,"div"),t._uU(2),t.qZA()()}if(2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.exDivDate)}}const ct=function(n){return{color:n}};function lt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",20),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.expandRow(i))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw().index,i=t.oxw();t.Q6J("ngStyle",t.VKq(2,ct,i.getColColor(e,o))),t.xp6(1),t.hij(" ",i.cells[o](e)," ")}}function rt(n,s){if(1&n&&(t.TgZ(0,"td",11),t.YNc(1,it,2,1,"div",12),t.YNc(2,st,2,6,"div",13),t.YNc(3,at,3,1,"div",14),t.YNc(4,lt,2,4,"ng-template",null,15,t.W1O),t.qZA()),2&n){const e=t.MAs(5),o=t.oxw().index;t.xp6(1),t.Q6J("ngIf",0===o),t.xp6(1),t.Q6J("ngIf",1===o),t.xp6(1),t.Q6J("ngIf",4===o)("ngIfElse",e)}}function dt(n,s){if(1&n&&(t.ynx(0,8),t.YNc(1,ot,2,1,"th",9),t.YNc(2,rt,6,4,"td",4),t.BQk()),2&n){const o=s.index;t.Q6J("matColumnDef",s.$implicit)("sticky",0===o)}}function pt(n,s){if(1&n&&t._UZ(0,"app-stocks-details",23),2&n){const e=t.oxw().$implicit;t.Q6J("stockStats",e.stats)}}function mt(n,s){if(1&n&&(t.TgZ(0,"td",11)(1,"div",21),t.YNc(2,pt,1,1,"app-stocks-details",22),t.qZA()()),2&n){const e=s.$implicit,o=t.oxw();t.uIk("colspan",o.columnDefs.length),t.xp6(1),t.Q6J("@detailExpand",e===o.expandedRow?"expanded":"collapsed"),t.xp6(1),t.Q6J("ngIf",o.expandedRow&&o.expandedRow.symbol===e.symbol)}}function gt(n,s){1&n&&t._UZ(0,"tr",24)}function _t(n,s){if(1&n&&t._UZ(0,"tr",25),2&n){const e=s.$implicit,o=t.oxw();t.ekj("example-expanded-row",o.expandedRow===e)}}function ft(n,s){1&n&&t._UZ(0,"tr",26)}const ut=function(){return["expandedRow"]};let xt=(()=>{class n{constructor(e,o){this.activatedRoute=e,this.http=o,this.today=new Date,this.holdings={},this.stocksData=[],this.dataSource=new c.by,this.columnDefs=["symbol","52 Week Price Range","yieldPercent","payoutRatio","exDivDate","sector","analysis"],this.headers=["Symbol","52 Week Price Range","Yield","Payout Ratio","Ex-Div Date","Sector","Analysis"],this.cells=[i=>"",i=>"",i=>i.yield>0?`${i.yieldPercent.toFixed(2)}% ($${i.yield})`:"N/A",i=>i.yield>0?`${i.payoutRatio.toFixed(2)}%`:"N/A",i=>"",i=>i.sector,i=>i.analysis.toUpperCase(),i=>""],this.showTickerWidget=!1}getColColor(e,o){switch(o){case 3:return e.payoutRatio>=50?"tomato":"#191919";case 6:return this.getAnalysisColor(e.analysis);default:return"#191919"}}getAnalysisColor(e){switch(e){case"strong buy":return"forestgreen";case"buy":return"limegreen";case"hold":return"steelblue";case"underperform":return"orange";case"sell":return"tomato";default:return"#191919"}}getLogoURL(e){return`https://logo.clearbit.com/${e.stats.summaryProfile?.website.split("www.")[1]||"clearbit.com"}?size=40&format=png`}ngOnInit(){this.http.get("../../../../assets/watchlist-rows.json").subscribe(e=>{this.dataSource.data=Object.values(e)})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(e){this.dataSource.filter=e.target.value}expandRow(e){this.expandedRow=this.expandedRow===e?null:e}handleToggle(e){this.showTickerWidget=e.checked}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.gz),t.Y36(et.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-watchlist"]],viewQuery:function(e,o){if(1&e&&(t.Gf(c.BZ,5),t.Gf(C.NW,5),t.Gf(m.YE,5),t.Gf(nt,5)),2&e){let i;t.iGM(i=t.CRH())&&(o.table=i.first),t.iGM(i=t.CRH())&&(o.paginator=i.first),t.iGM(i=t.CRH())&&(o.sort=i.first),t.iGM(i=t.CRH())&&(o.singleQuoteWidget=i.first)}},decls:9,vars:7,consts:[[1,"table-container"],["mat-table","","matSort","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource"],[3,"matColumnDef","sticky",4,"ngFor","ngForOf"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"example-expanded-row",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef","sticky"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"click",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"table-col-0",3,"click"],[1,"single-quote-widget",3,"symbol"],[3,"click"],[3,"min","max","currentPrice","costAverage","shares","showHolding"],[3,"ngStyle","click"],[1,"expanded-stock-detail"],[3,"stockStats",4,"ngIf"],[3,"stockStats"],["mat-header-row",""],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"]],template:function(e,o){1&e&&(t.ynx(0),t.TgZ(1,"div",0)(2,"table",1),t.YNc(3,dt,3,2,"ng-container",2),t.ynx(4,3),t.YNc(5,mt,3,3,"td",4),t.BQk(),t.YNc(6,gt,1,0,"tr",5),t.YNc(7,_t,1,2,"tr",6),t.YNc(8,ft,1,0,"tr",7),t.qZA()(),t.BQk()),2&e&&(t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngForOf",o.columnDefs),t.xp6(3),t.Q6J("matHeaderRowDef",o.columnDefs)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.columnDefs),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(6,ut)))},dependencies:[d.sg,d.O5,d.PC,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,m.YE,m.nU,k.x,v.h,P],styles:[".container-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.summary[_ngcontent-%COMP%]{display:flex;align-items:center}.table-actions[_ngcontent-%COMP%]{display:flex;justify-content:right}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-top:10px}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.table-col-3[_ngcontent-%COMP%], .table-col-8[_ngcontent-%COMP%]{width:max-content;margin-right:5px}.expanded-stock-detail[_ngcontent-%COMP%]{overflow:hidden;align-items:center}.mat-cell[_ngcontent-%COMP%]{padding-right:20px}.table-col-0[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-left:20px}.table-col-0[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{margin-left:20px;border-radius:50%}.mat-row[_ngcontent-%COMP%]:not(.expanded-stock-row):hover   .mat-cell[_ngcontent-%COMP%]{font-weight:700}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.single-quote-widget[_ngcontent-%COMP%]{height:90px}td.mat-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}mat-slide-toggle[_ngcontent-%COMP%]{margin-right:20px}td[_ngcontent-%COMP%]{cursor:pointer}.mat-button[_ngcontent-%COMP%]{min-width:20px;padding:0}"],data:{animation:[(0,r.X$)("detailExpand",[(0,r.SB)("collapsed",(0,r.oB)({height:"0px",minHeight:"0"})),(0,r.SB)("expanded",(0,r.oB)({height:"*"})),(0,r.eR)("expanded <=> collapsed",(0,r.jt)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),n})();const wt=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-portfolio"]],decls:9,vars:0,consts:[["mat-align-tabs","left"],["label","Portfolio"],["label","Holdings"],["label","News"],["label","Watchlist"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1),t._UZ(2,"app-stocks"),t.qZA(),t.TgZ(3,"mat-tab",2),t._UZ(4,"app-holdings"),t.qZA(),t.TgZ(5,"mat-tab",3),t._UZ(6,"app-news"),t.qZA(),t.TgZ(7,"mat-tab",4),t._UZ(8,"app-watchlist"),t.qZA()())},dependencies:[u.SP,u.uX,X,z,tt,xt]}),n})()}];let ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(wt),p.Bz]}),n})(),Ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,g.UX,ht,_.i,f.q]}),n})()},8963:(h,x,a)=>{var d={"./AAPL-news.json":[4109,4109],"./ABBV-news.json":[1745,1745],"./AMZN-news.json":[2334,2334],"./ARCC-news.json":[7437,1791],"./BAC-news.json":[1695,1695],"./BEN-news.json":[3496,3496],"./CHTR-news.json":[1120,1120],"./DIDI-news.json":[870,870],"./DIDIY-news.json":[5917,5917],"./DIS-news.json":[7055,7055],"./DOCN-news.json":[9103,9103],"./ENB-news.json":[7137,7137],"./ET-news.json":[1026,1026],"./FRT-news.json":[3456,3456],"./GILD-news.json":[5676,5676],"./HD-news.json":[8183,8183],"./JMIA-news.json":[5012,5012],"./JNJ-news.json":[4458,4458],"./JPM-news.json":[4691,4691],"./KMI-news.json":[9921,9921],"./KO-news.json":[7824,7824],"./MMM-news.json":[890,890],"./MO-news.json":[6616,6616],"./MSFT-news.json":[1857,1857],"./NIO-news.json":[5123,5123],"./NVAX-news.json":[7042,7042],"./O-news.json":[5501,5501],"./ONL-news.json":[8779,8779],"./PFE-news.json":[207,207],"./PG-news.json":[2735,2735],"./QYLD-news.json":[7965,7965],"./RTL-news.json":[1787,1787],"./SBUX-news.json":[9371,9371],"./SPG-news.json":[6337,6337],"./STOR-news.json":[3080,3080],"./T-news.json":[7784,2416],"./TPVG-news.json":[5830,5830],"./TSM-news.json":[2937,2937],"./UL-news.json":[5786,5786],"./VICI-news.json":[1015,1015],"./VTRS-news.json":[2627,2627],"./VZ-news.json":[5549,5549],"./XPEV-news.json":[255,255],"./wbd-news.json":[3843,3843]};function g(_){if(!a.o(d,_))return Promise.resolve().then(()=>{var t=new Error("Cannot find module '"+_+"'");throw t.code="MODULE_NOT_FOUND",t});var f=d[_],p=f[0];return a.e(f[1]).then(()=>a.t(p,19))}g.keys=()=>Object.keys(d),g.id=8963,h.exports=g}}]);
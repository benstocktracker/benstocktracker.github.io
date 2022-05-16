(self.webpackChunkBenStockTracker=self.webpackChunkBenStockTracker||[]).push([[889],{889:(S,w,i)=>{"use strict";i.r(w),i.d(w,{PortfolioModule:()=>pt});var m=i(9808),f=i(3075),g=i(6552),y=i(4620),h=i(1083),t=i(5e3),v=i(3251);function k(n,s,e,o,a,c,r){try{var u=n[c](r),d=u.value}catch(x){return void e(x)}u.done?s(d):Promise.resolve(d).then(o,a)}var l=i(4999),O=i(9062),C=i(4847),p=i(1777),D=i(7261),R=i(4195),_=i(7322),Z=i(7531),A=i(7423),j=i(5245),M=i(1133),P=i(520),F=i(9646),N=i(5625),$=i(262);let Q=(()=>{class n{constructor(e,o){this.http=e,this.snackBar=o,this.backendServerUrl="http://127.0.0.1:5000",this.httpOptions={headers:(new P.WM).set("content-type","application/json").set("Access-Control-Allow-Origin","*")}}showSnackBar(e){this.snackBar.open(e,"Dismiss",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}error(e){let o=e.error instanceof ErrorEvent?e.error.message:`Error Code: ${e.status}\nMessage: ${e.message}`;return this.showSnackBar(o),(0,F.of)({data:[],message:o,status:500})}wrapHttpCall(e){return e.pipe((0,N.X)(2),(0,$.K)(this.error))}load(e){const o=this.http.get([this.backendServerUrl,"load",e].join("/"),this.httpOptions);return this.wrapHttpCall(o)}dump(e,o){const a=this.http.post([this.backendServerUrl,"dump",e].join("/"),o,this.httpOptions);return this.wrapHttpCall(a)}loadHoldings(){const e=this.http.get("assets/holdings.json");return this.wrapHttpCall(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(P.eN),t.LFG(D.ux))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var B=i(4834),U=i(9950),J=i(1791),Y=i(1948),I=i(4350),E=i(8894);function H(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"h3"),t._uU(2),t.ALo(3,"currency"),t.ALo(4,"currency"),t.qZA(),t.BQk()),2&n){const e=s.$implicit;t.xp6(2),t.HOy(" The ",e.account," account holds ",e.sharesOwned," shares, bought for ",t.lcZ(3,4,e.costAverage)," per share. Total cost was ",t.lcZ(4,6,e.costBasis),". ")}}let G=(()=>{class n{constructor(e,o){this.stocksService=e,this.crudService=o,this.callCount=0}ngOnInit(){this.stocksService.loadStockResource(this.stockStats.symbol,"news").subscribe(e=>{this.stockNews=Object.values(e.data).sort((o,a)=>a.providerPublishTime-o.providerPublishTime)}),this.crudService.load("holdings").subscribe(e=>{200===e.status&&(this.holdings=e.data[this.stockStats.symbol])})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(M.T),t.Y36(Q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stocks-details"]],inputs:{stockStats:"stockStats"},decls:14,vars:7,consts:[["mat-align-tabs","center"],["label","Chart"],[3,"symbol"],["label","Stats"],[3,"stockStats"],["label","financials"],["label","News"],[3,"news"],["label","Company"],[3,"symbol","profile"],["label","Holdings"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t._UZ(0,"mat-divider"),t.TgZ(1,"mat-tab-group",0)(2,"mat-tab",1),t._UZ(3,"app-stock-chart-panel",2),t.qZA(),t.TgZ(4,"mat-tab",3),t._UZ(5,"app-stock-stats-panel",4),t.qZA(),t.TgZ(6,"mat-tab",5),t._UZ(7,"app-stock-financials-panel",2),t.qZA(),t.TgZ(8,"mat-tab",6),t._UZ(9,"app-stock-news-panel",7),t.qZA(),t.TgZ(10,"mat-tab",8),t._UZ(11,"app-stock-profile-panel",9),t.qZA(),t.TgZ(12,"mat-tab",10),t.YNc(13,H,5,8,"ng-container",11),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("symbol",o.stockStats.symbol),t.xp6(2),t.Q6J("stockStats",o.stockStats),t.xp6(2),t.Q6J("symbol",o.stockStats.symbol),t.xp6(2),t.Q6J("news",o.stockNews),t.xp6(2),t.Q6J("symbol",o.stockStats.symbol)("profile",o.stockStats.summaryProfile),t.xp6(2),t.Q6J("ngForOf",o.holdings))},directives:[B.d,v.SP,v.uX,U.S,J.g,Y.M,I.g,E.l,m.sg],pipes:[m.H9],styles:["mat-tab-group[_ngcontent-%COMP%]{padding-bottom:20px}"]}),n})();const L=["singleQuoteWidget"];function V(n,s){if(1&n&&(t.TgZ(0,"th",23),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.xp6(1),t.Oqu(o.headers[e])}}function z(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",28),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2).expandRow(a)}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.symbol," ")}}function X(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"button",29)(2,"mat-icon",30),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2).expandRow(a)}),t._uU(3),t.qZA()()()}if(2&n){const e=t.oxw(3);t.xp6(3),t.Oqu(e.expandedRow?"expand_less":"expand_more")}}const b=function(n){return{color:n}};function W(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"span",31),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2).expandRow(a)}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit,o=t.oxw().index,a=t.oxw();t.Q6J("ngStyle",t.VKq(2,b,a.getColColor(e,o))),t.xp6(1),t.hij(" ",a.cells[o](e)," ")}}function K(n,s){if(1&n&&(t.TgZ(0,"td",24),t.YNc(1,z,2,1,"div",25),t.YNc(2,X,4,1,"div",26),t.YNc(3,W,2,4,"ng-template",null,27,t.W1O),t.qZA()),2&n){const e=t.MAs(4),o=t.oxw().index;t.xp6(1),t.Q6J("ngIf",0===o)("ngIfElse",e),t.xp6(1),t.Q6J("ngIf",14===o)}}function q(n,s){if(1&n&&(t.TgZ(0,"td",32),t._uU(1),t.qZA()),2&n){const e=t.oxw().index,o=t.oxw();t.Q6J("ngStyle",t.VKq(2,b,"-"===o.footerRow[e]()[1]?"tomato":"forestgreen")),t.xp6(1),t.hij(" ",o.footerRow[e]()," ")}}function tt(n,s){if(1&n&&(t.ynx(0,20),t.YNc(1,V,2,1,"th",21),t.YNc(2,K,5,3,"td",14),t.YNc(3,q,2,4,"td",22),t.BQk()),2&n){const o=s.index;t.Q6J("matColumnDef",s.$implicit)("sticky",0===o)}}function et(n,s){if(1&n&&t._UZ(0,"app-stocks-details",35),2&n){const e=t.oxw().$implicit;t.Q6J("stockStats",e.stats)}}function ot(n,s){if(1&n&&(t.TgZ(0,"td",24)(1,"div",33),t.YNc(2,et,1,1,"app-stocks-details",34),t.qZA()()),2&n){const e=s.$implicit,o=t.oxw();t.uIk("colspan",o.columnDefs.length),t.xp6(1),t.Q6J("@detailExpand",e===o.expandedRow?"expanded":"collapsed"),t.xp6(1),t.Q6J("ngIf",o.expandedRow&&o.expandedRow.symbol===e.symbol)}}function nt(n,s){1&n&&t._UZ(0,"tr",36)}function at(n,s){if(1&n&&t._UZ(0,"tr",37),2&n){const e=s.$implicit,o=t.oxw();t.ekj("example-expanded-row",o.expandedRow===e)}}function st(n,s){1&n&&t._UZ(0,"tr",38)}function it(n,s){1&n&&t._UZ(0,"tr",39)}function rt(n,s){if(1&n&&(t.TgZ(0,"tr",40)(1,"td",41),t._uU(2),t.qZA()()),2&n){t.oxw();const e=t.MAs(12);t.xp6(2),t.hij(" Wow! No data matching the filter. ",e.value," ")}}const ct=function(){return["expandedRow"]};let lt=(()=>{class n{constructor(e,o){this.activatedRoute=e,this.snackBar=o,this.today=new Date,this.holdings={},this.stocksData=[],this.dataSource=new l.by,this.columnDefs=["symbol","sharesOwned","costAverage","costBasis","marketValue","gainLoss","glPercent","yield","yieldPercent","yieldOnCost","payoutRatio","exDivDate","sector","analysis","actions"],this.headers=["Symbol","Shares Owned","Cost Average","Cost Basis","Market Value","Gain","Gain %","Yield","Yield %","Yield on Cost","Payout Ratio","Ex-Div Date","Sector","Analysis",""],this.cells=[a=>a.symbol,a=>a.sharesOwned,a=>`$${a.costAverage}`,a=>`$${a.costBasis}`,a=>`$${a.marketValue}`,a=>`$${a.gainLoss}`,a=>`${a.glPercent}%`,a=>`$${a.yield}`,a=>`${a.yieldPercent}%`,a=>`${a.yieldOnCost}%`,a=>`${a.payoutRatio}%`,a=>`${a.exDivDate}`,a=>a.sector,a=>a.analysis.toUpperCase(),a=>""],this.footerRow=[()=>"",()=>"",()=>"",()=>`$${this.dataSource.data.map(a=>a.sharesOwned*a.costAverage).reduce((a,c)=>a+c,0).toFixed(2)}`,()=>`$${this.dataSource.data.map(a=>a.sharesOwned*a.marketPrice).reduce((a,c)=>a+c,0).toFixed(2)}`,()=>`$${this.dataSource.data.map(a=>(a.marketPrice-a.costAverage)*a.sharesOwned).reduce((a,c)=>a+c,0).toFixed(2)}`,()=>"",()=>`$${this.dataSource.data.map(a=>a.yield*a.sharesOwned).reduce((a,c)=>a+c,0).toFixed(2)}`,()=>"",()=>"",()=>"",()=>"",()=>"",()=>"",()=>""]}getColColor(e,o){switch(o){case 5:return"-"===this.cells[o](e)[1]?"tomato":"forestgreen";case 6:return"-"===this.cells[o](e)[0]?"tomato":"forestgreen";case 7:case 8:return"0%"!==this.cells[o](e)?"steelblue":"#191919";case 10:return e.payoutRatio>=50?"tomato":"#191919";case 13:return this.getAnalysisColor(e.analysis);default:return"#191919"}}getAnalysisColor(e){switch(e){case"strong buy":return"forestgreen";case"buy":return"limegreen";case"hold":return"steelblue";case"underperform":return"orange";case"sell":return"tomato";default:return"#191919"}}ngOnInit(){var e=this;return function T(n){return function(){var s=this,e=arguments;return new Promise(function(o,a){var c=n.apply(s,e);function r(d){k(c,o,a,r,u,"next",d)}function u(d){k(c,o,a,r,u,"throw",d)}r(void 0)})}}(function*(){e.activatedRoute.data.subscribe(o=>{e.holdings=o.stocks}),Object.keys(e.holdings).forEach(o=>{i(271)(`./${o}-stats.json`).then(a=>{e.stocksData.push(Object.assign(Object.assign({},a),{holdings:e.holdings[o]})),e.dataSource.data=e.calculateStockData(e.stocksData)})})})()}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}showSnackBar(e,o="Dismiss"){return this.snackBar.open(e,o,{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}applyFilter(e){this.dataSource.filter=e.target.value}expandRow(e){this.expandedRow=this.expandedRow===e?null:e}calculateStockData(e){return e.map(o=>{const a=o.holdings.map(d=>d.sharesOwned).reduce((d,x)=>d+x,0),c=o.holdings.map(d=>d.costAverage*d.sharesOwned).reduce((d,x)=>d+x,0).toFixed(2),r={symbol:o.symbol,sharesOwned:a,costAverage:+(c/a).toFixed(2),marketPrice:o.price.regularMarketPrice,costBasis:c,marketValue:+(o.price.regularMarketPrice*a).toFixed(2),payoutRatio:+(100*o.summaryDetail.payoutRatio).toFixed(2),exDivDate:new Date(1e3*o.summaryDetail.exDividendDate).toLocaleDateString("en-US")};"EQUITY"===o.quoteType.quoteType?(r.yield=o.summaryDetail.dividendRate||0,r.yieldPercent=+(100*o.summaryDetail.dividendYield).toFixed(2)||0,r.sector=o.summaryProfile.sector,r.analysis=o.financialData.recommendationKey.split("_").join(" ")):(r.yield=o.summaryDetail.yield?+(o.summaryDetail.yield*r.marketPrice).toFixed(2):0,r.yieldPercent=+(100*o.summaryDetail.yield).toFixed(2)||0,r.sector="N/A",r.analysis="None"),r.gainLoss=+((r.marketPrice-r.costAverage)*r.sharesOwned).toFixed(2),r.glPercent=+((r.marketPrice-r.costAverage)/r.costAverage*100).toFixed(2),r.glPercent=isFinite(r.glPercent)?r.glPercent:100,r.yieldOnCost=+(r.yield/r.costAverage*100).toFixed(2)||0;const u=(new Date).getFullYear();return r.exDivDate=r.exDivDate.endsWith(u)?r.exDivDate:"",r.stats=o,r})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.gz),t.Y36(D.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stocks"]],viewQuery:function(e,o){if(1&e&&(t.Gf(l.BZ,5),t.Gf(O.NW,5),t.Gf(C.YE,5),t.Gf(L,5)),2&e){let a;t.iGM(a=t.CRH())&&(o.table=a.first),t.iGM(a=t.CRH())&&(o.paginator=a.first),t.iGM(a=t.CRH())&&(o.sort=a.first),t.iGM(a=t.CRH())&&(o.singleQuoteWidget=a.first)}},decls:23,vars:14,consts:[[1,"container-header"],[1,"summary"],["icon","paid","subtitle","Market Value",3,"value"],["icon","paid","subtitle","Investment",3,"value"],["icon","paid","subtitle","Unrealized Gain/Lost",3,"value","color"],["icon","paid","subtitle","Dividend Income","color","steelblue",3,"value"],[1,"table-actions"],["appearance","standard"],["matInput","",3,"keyup"],["input",""],[1,"table-container"],["mat-table","","matSort","","multiTemplateDataRows","",1,"mat-elevation-z8",3,"dataSource"],[3,"matColumnDef","sticky",4,"ngFor","ngForOf"],["matColumnDef","expandedRow"],["mat-cell","",4,"matCellDef"],["mat-header-row","","class","table-header",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","stock-row",3,"example-expanded-row",4,"matRowDef","matRowDefColumns"],["mat-row","","class","expanded-stock-row",4,"matRowDef","matRowDefColumns"],["mat-footer-row","","class","table-footer",4,"matFooterRowDef","matFooterRowDefSticky"],["class","mat-row",4,"matNoDataRow"],[3,"matColumnDef","sticky"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-footer-cell","",3,"ngStyle",4,"matFooterCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["class","table-col-0",3,"click",4,"ngIf","ngIfElse"],[4,"ngIf"],["elseBlock",""],[1,"table-col-0",3,"click"],["mat-button","","color","primary"],[1,"material-icons-round",3,"click"],[3,"ngStyle","click"],["mat-footer-cell","",3,"ngStyle"],[1,"expanded-stock-detail"],[3,"stockStats",4,"ngIf"],[3,"stockStats"],["mat-header-row","",1,"table-header"],["mat-row","",1,"stock-row"],["mat-row","",1,"expanded-stock-row"],["mat-footer-row","",1,"table-footer"],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(e,o){1&e&&(t.ynx(0),t.TgZ(1,"div",0)(2,"header",1),t._UZ(3,"app-stat-card",2)(4,"app-stat-card",3)(5,"app-stat-card",4)(6,"app-stat-card",5),t.qZA(),t.TgZ(7,"div",6)(8,"mat-form-field",7)(9,"mat-label"),t._uU(10,"Filter"),t.qZA(),t.TgZ(11,"input",8,9),t.NdJ("keyup",function(c){return o.applyFilter(c)}),t.qZA()()()(),t.TgZ(13,"div",10)(14,"table",11),t.YNc(15,tt,4,2,"ng-container",12),t.ynx(16,13),t.YNc(17,ot,3,3,"td",14),t.BQk(),t.YNc(18,nt,1,0,"tr",15),t.YNc(19,at,1,2,"tr",16),t.YNc(20,st,1,0,"tr",17),t.YNc(21,it,1,0,"tr",18),t.YNc(22,rt,3,1,"tr",19),t.qZA()(),t.BQk()),2&e&&(t.xp6(3),t.Q6J("value",o.footerRow[4]()),t.xp6(1),t.Q6J("value",o.footerRow[3]()),t.xp6(1),t.Q6J("value",o.footerRow[5]())("color","-"===o.footerRow[6]()[1]?"tomato":"forestgreen"),t.xp6(1),t.Q6J("value",o.footerRow[7]()),t.xp6(8),t.Q6J("dataSource",o.dataSource),t.xp6(1),t.Q6J("ngForOf",o.columnDefs),t.xp6(3),t.Q6J("matHeaderRowDef",o.columnDefs)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.columnDefs),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(13,ct)),t.xp6(1),t.Q6J("matFooterRowDef",o.columnDefs)("matFooterRowDefSticky",!0))},directives:[R.i,_.KE,_.hX,Z.Nt,l.BZ,C.YE,m.sg,l.w1,l.fO,l.ge,C.nU,l.Dz,l.ev,m.O5,A.lW,j.Hw,m.PC,l.mD,l.yh,G,l.as,l.XQ,l.nj,l.Gk,l.Ke,l.Q2,l.Ee],styles:[".container-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.summary[_ngcontent-%COMP%]{display:flex;align-items:center}.table-actions[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center;margin-right:2%}.table-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-top:10px}.table-col-0[_ngcontent-%COMP%]{display:flex;align-items:center;align-content:center;margin:0;padding:0}.table-col-3[_ngcontent-%COMP%], .table-col-8[_ngcontent-%COMP%]{width:max-content;margin-right:5px}.expanded-stock-detail[_ngcontent-%COMP%]{overflow:hidden;align-items:center}.table-header[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#191919}.mat-cell[_ngcontent-%COMP%]{padding-right:20px}.mat-row[_ngcontent-%COMP%]:not(.expanded-stock-row):hover   .mat-cell[_ngcontent-%COMP%]{font-weight:700}tr.expanded-stock-row[_ngcontent-%COMP%]{height:0}.single-quote-widget[_ngcontent-%COMP%]{height:90px;margin-right:10px}"],data:{animation:[(0,p.X$)("detailExpand",[(0,p.SB)("collapsed",(0,p.oB)({height:"0px",minHeight:"0"})),(0,p.SB)("expanded",(0,p.oB)({height:"*"})),(0,p.eR)("expanded <=> collapsed",(0,p.jt)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),n})();const dt=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-portfolio"]],decls:3,vars:0,consts:[["mat-align-tabs","left"],["label","Portfolio"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1),t._UZ(2,"app-stocks"),t.qZA()())},directives:[v.SP,v.uX,lt],styles:[""]}),n})()}];let mt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.Bz.forChild(dt)],h.Bz]}),n})(),pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,f.UX,mt,g.i,y.q]]}),n})()},271:(S,w,i)=>{var m={"./AAPL-stats.json":[4221,221],"./ABBV-stats.json":[3626,626],"./ARCC-stats.json":[4411,411],"./BEN-stats.json":[4656,656],"./DIDI-stats.json":[5682,682],"./DIS-stats.json":[9809,809],"./DOCN-stats.json":[1941,941],"./ENB-stats.json":[8811,811],"./ET-stats.json":[6895,895],"./FRT-stats.json":[8580,580],"./GILD-stats.json":[9254,254],"./JMIA-stats.json":[130,130],"./KMI-stats.json":[2964,964],"./MARA-stats.json":[368,368],"./MSFT-stats.json":[4,4],"./NIO-stats.json":[4543,543],"./NVAX-stats.json":[9855,855],"./O-stats.json":[3049,49],"./ONL-stats.json":[5780,780],"./PFE-stats.json":[8728,728],"./QYLD-stats.json":[6440,440],"./RTL-stats.json":[2423,423],"./SPG-stats.json":[1422,422],"./STOR-stats.json":[3155,155],"./T-stats.json":[5717,717],"./TPVG-stats.json":[1754,754],"./TSM-stats.json":[7940,940],"./UL-stats.json":[6656,209],"./VICI-stats.json":[3508,508],"./VTRS-stats.json":[86,86],"./VZ-stats.json":[3289,289],"./XPEV-stats.json":[9849,849]};function f(g){if(!i.o(m,g))return Promise.resolve().then(()=>{var t=new Error("Cannot find module '"+g+"'");throw t.code="MODULE_NOT_FOUND",t});var y=m[g],h=y[0];return i.e(y[1]).then(()=>i.t(h,19))}f.keys=()=>Object.keys(m),f.id=271,S.exports=f}}]);
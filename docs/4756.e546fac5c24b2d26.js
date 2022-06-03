"use strict";(self.webpackChunkBenStockTracker=self.webpackChunkBenStockTracker||[]).push([[4756],{4756:(K,f,o)=>{o.r(f),o.d(f,{StockResearchModule:()=>H});var u=o(6895),a=o(4006),F=o(1391),J=o(228),g=o(3060),t=o(4650),v=o(529),b=o(9646),I=o(4482),y=o(5403),M=o(4671),N=o(5963),Q=o(8421),Z=o(262),S=o(7009);let B=(()=>{class e{constructor(n,s){this.http=n,this.snackBar=s,this.httpOptions={headers:(new v.WM).set("content-type","application/json").set("Access-Control-Allow-Origin","*")}}error(n){let s=n.error instanceof ErrorEvent?n.error.message:`Error Code: ${n.status}\nMessage: ${n.message}`;return console.log("backend service error:",s),this.snackBar.open(s,"Dismiss",{duration:3e3,horizontalPosition:"right",verticalPosition:"top"}),(0,b.of)({data:[],message:s,status:500})}wrapHttpCall(n){return n.pipe(function T(e=1/0){let r;r=e&&"object"==typeof e?e:{count:e};const{count:n=1/0,delay:s,resetOnSuccess:l=!1}=r;return n<=0?M.y:(0,I.e)((p,i)=>{let c,h=0;const d=()=>{let x=!1;c=p.subscribe((0,y.x)(i,m=>{l&&(h=0),i.next(m)},void 0,m=>{if(h++<n){const C=()=>{c?(c.unsubscribe(),c=null,d()):x=!0};if(null!=s){const L="number"==typeof s?(0,N.H)(s):(0,Q.Xf)(s(m,h)),R=(0,y.x)(i,()=>{R.unsubscribe(),C()},()=>{i.complete()});L.subscribe(R)}else C()}else i.error(m)})),x&&(c.unsubscribe(),c=null,d())};d()})}(2),(0,Z.K)(this.error))}loadHoldings(){const n=this.http.get("assets/holdings.json");return this.wrapHttpCall(n)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(v.eN),t.LFG(S.ux))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=o(9549),E=o(4144),U=o(4850),A=o(9950),O=o(4350),P=o(1791),X=o(412),Y=o(3788);function j(e,r){1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-stock-chart-panel",5)(2,"app-stock-chart-panel",5)(3,"app-stock-chart-panel",5),t.qZA()),2&e&&(t.xp6(1),t.Q6J("symbol","INDEX:GSPC")("width","33%"),t.xp6(1),t.Q6J("symbol","INDEX:DJI")("width","33%"),t.xp6(1),t.Q6J("symbol","INDEX:IXIC")("width","33%"))}function w(e,r){if(1&e&&(t.ynx(0),t._UZ(1,"app-stock-news-panel",9),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("news",n.stockNews)}}function z(e,r){if(1&e&&(t.ynx(0),t._UZ(1,"app-stock-chart-panel",6)(2,"mat-divider")(3,"app-stock-stats-panel",7)(4,"mat-divider")(5,"app-symbol-financials-widget",6)(6,"mat-divider"),t.TgZ(7,"h1"),t._uU(8,"News"),t.qZA(),t.YNc(9,w,2,1,"ng-container",4),t._UZ(10,"mat-divider")(11,"app-symbol-profile-widget",6)(12,"div",8),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("symbol",n.stockStats.symbol),t.xp6(2),t.Q6J("stockStats",n.stockStats),t.xp6(2),t.s9C("symbol",n.stockStats.symbol),t.xp6(4),t.Q6J("ngIf",n.stockNews),t.xp6(2),t.s9C("symbol",n.stockStats.symbol)}}const D=[{path:"",component:(()=>{class e{constructor(n,s,l){this.stocksService=n,this.fb=s,this.snackBar=l,this.searchForm=new a.nJ({}),this.earningsDate="",this.earningsEstimateValue="",this.earningsEstimateSubtitle="",this.statCardFontSize="1.5rem"}get searchField(){return this.searchForm.controls.searchField}ngOnInit(){this.searchForm=this.fb.group({searchField:[""]})}searchTicker(n){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(B),t.Y36(a.QS),t.Y36(S.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-research"]],decls:8,vars:3,consts:[[1,"research-header"],[1,"search-form",3,"formGroup"],[1,"search-field",3,"keyup.enter"],["matInput","","type","text","formControlName","searchField","placeholder","ticker"],[4,"ngIf"],[3,"symbol","width"],[3,"symbol"],[3,"stockStats"],[1,"bottom"],[3,"news"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"mat-form-field",2),t.NdJ("keyup.enter",function(p){return s.searchTicker(p)}),t.TgZ(3,"mat-label"),t._uU(4,"Search Stock"),t.qZA(),t._UZ(5,"input",3),t.qZA()()(),t.YNc(6,j,4,6,"div",4),t.YNc(7,z,13,5,"ng-container",4)),2&n&&(t.xp6(1),t.Q6J("formGroup",s.searchForm),t.xp6(5),t.Q6J("ngIf",!s.stockStats),t.xp6(1),t.Q6J("ngIf",s.stockStats))},dependencies:[u.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,k.KE,k.hX,E.Nt,U.d,A.S,O.g,P.g,X.S,Y.i],styles:[".research-header[_ngcontent-%COMP%]{display:flex;justify-content:center}.search-field[_ngcontent-%COMP%]{width:50vw}mat-divider[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}h1[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:0}.bottom[_ngcontent-%COMP%]{margin-bottom:20px}"]}),e})()}];let G=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(D),g.Bz]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,a.UX,F.i,J.q,G]}),e})()}}]);
var KLineSocket,StockSocket,ReqStockInfoOpt=function(t){var e=t.ExchangeID?t.ExchangeID:"101",n=t.InstrumentID?t.InstrumentID:"1",s=t.wsUrl?t.wsUrl:"ws://172.17.20.203:7681",l=t.stockXMlUrl?t.stockXMlUrl:"http://172.17.20.203:6789/101";this.defaults={wsUrl:s,stockXMlUrl:l,KKZQAll:{InstrumentID:n,ExchangeID:e,MsgType:"S101",DesscriptionType:"3",Instrumenttype:"2"},QPK:{InstrumentID:n,ExchangeID:e,MsgType:"S101",DesscriptionType:"3",Instrumenttype:"3"},QZBCJ:{InstrumentID:n,ExchangeID:e,MsgType:"S101",DesscriptionType:"3",Instrumenttype:"1"}},this.options=$.extend({},this.defaults,t),this.FieldInfo={Name:null,Decimal:null,PrePrice:null,Code:null}};
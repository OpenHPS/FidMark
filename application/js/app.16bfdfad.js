(()=>{var t={1993:t=>{function webpackEmptyAsyncContext(t){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=1993,t.exports=webpackEmptyAsyncContext},7461:(t,e,r)=>{"use strict";var a=r(9963),i=r(6252);function render(t,e,r,a,o,s){const p=(0,i.up)("ion-router-outlet"),d=(0,i.up)("ion-app");return(0,i.wg)(),(0,i.j4)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p)])),_:1})}var o=r(7327),s=r(7582),p=r(2634),d=r(1124),n=r(4105),g=r(543),f=r(1725);let h=class App extends d.w3{constructor(...t){super(...t),(0,o.Z)(this,"markerStore",(0,f.X)())}async beforeMount(){await(0,n.loadWASM)("/application/js/vendor/onigasm/onigasm.wasm")}mounted(){g.RDFSerializer.initialize("video"),this.markerStore.initialize()}};h=(0,s.gn)([(0,d.Ei)({components:{IonApp:p.dr,IonRouterOutlet:p.jP}})],h);const l=h;var _=r(3744);const c=(0,_.Z)(l,[["render",render]]),u=c;var m=r(4297),w=r(2262),I=r(8903);const k=(0,i.aZ)({__name:"TabsPage",setup(t){return(t,e)=>((0,i.wg)(),(0,i.j4)((0,w.SU)(p._i),null,{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.UN),null,{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.jP)),(0,i.Wm)((0,w.SU)(p.yq),{slot:"bottom"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.ZU),{tab:"camera",href:"/tabs/camera"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.gu),{"aria-hidden":"true",icon:(0,w.SU)(I.cameraOutline)},null,8,["icon"]),(0,i.Wm)((0,w.SU)(p.Q$),null,{default:(0,i.w5)((()=>[(0,i.Uk)("AR")])),_:1})])),_:1}),(0,i.Wm)((0,w.SU)(p.ZU),{tab:"editor",href:"/tabs/editor"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.gu),{"aria-hidden":"true",icon:(0,w.SU)(I.code)},null,8,["icon"]),(0,i.Wm)((0,w.SU)(p.Q$),null,{default:(0,i.w5)((()=>[(0,i.Uk)("text/turtle")])),_:1})])),_:1}),(0,i.Wm)((0,w.SU)(p.ZU),{tab:"objects",href:"/tabs/objects"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.gu),{"aria-hidden":"true",icon:(0,w.SU)(I.cubeOutline)},null,8,["icon"]),(0,i.Wm)((0,w.SU)(p.Q$),null,{default:(0,i.w5)((()=>[(0,i.Uk)("Objects")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}))}}),v=k,b=v,y=[{path:"/",redirect:"/tabs/"},{path:"/tabs/",component:b,children:[{path:"",redirect:"/tabs/camera"},{path:"camera",component:()=>r.e(320).then(r.bind(r,4320))},{path:"editor",component:()=>r.e(159).then(r.bind(r,8159))},{path:"objects",component:()=>r.e(109).then(r.bind(r,5109))}]}],T=(0,m.p7)({history:(0,m.r5)("/application/"),routes:y}),S=T;var C=r(9876),D=r(9534);r(8851),r(1292),r(1633),r(1045),r(6187),r(2299),r(3423),r(4687),r(9147),r(6250);const R=(0,a.ri)(u).use(p.oX).use(S).use((0,C.WB)());S.isReady().then((()=>{(0,D.a)({...I}),R.mount("#app")}))},2072:(t,e,r)=>{"use strict";r.d(e,{x:()=>p});var a,i=r(7582),o=r(336),s=r(6551);let p=a=class MarkerOrigin{static fromURI(t){const e=new a;return e.rdf={uri:t},e}};p=a=(0,i.gn)([(0,s.SerializableObject)({rdf:{type:o.NQ.MarkerOrigin}})],p)},4283:(t,e,r)=>{"use strict";r.d(e,{n3:()=>I,hx:()=>w,ZX:()=>v,Vz:()=>n,nd:()=>y});r(8520);var a,i=r(543),o=r(7327),s=r(7582),p=r(336),d=r(6551);let n=a=class MarkerDictionary{constructor(){(0,o.Z)(this,"size",void 0),(0,o.Z)(this,"hammingSize",void 0)}static fromURI(t){const e=new a;return e.rdf={uri:t},e}};var g,f,h;(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.dictionarySize}}),(0,s.w6)("design:type",Number)],n.prototype,"size",void 0),(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.hammingDistance}}),(0,s.w6)("design:type",Number)],n.prototype,"hammingSize",void 0),n=a=(0,s.gn)([(0,d.SerializableObject)({rdf:{type:p.NQ.MarkerDictionary}})],n);let l=class ImageDescriptor{constructor(){(0,o.Z)(this,"image",void 0),(0,o.Z)(this,"nft",void 0),(0,o.Z)(this,"pattern",void 0)}};(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.asImage,datatype:i.xsd.anyURI}}),(0,s.w6)("design:type","function"===typeof(g="undefined"!==typeof i.IriString&&i.IriString)?g:Object)],l.prototype,"image",void 0),(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.asNFT,datatype:i.xsd.anyURI}}),(0,s.w6)("design:type","function"===typeof(f="undefined"!==typeof i.IriString&&i.IriString)?f:Object)],l.prototype,"nft",void 0),(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.asPATT,datatype:i.xsd.anyURI}}),(0,s.w6)("design:type","function"===typeof(h="undefined"!==typeof i.IriString&&i.IriString)?h:Object)],l.prototype,"pattern",void 0),l=(0,s.gn)([(0,d.SerializableObject)({rdf:{type:p.NQ.ImageDescriptor}})],l);var _,c,u,m=r(2072);let w=class FiducialMarker extends d.ReferenceSpace{constructor(...t){super(...t),(0,o.Z)(this,"data",void 0),(0,o.Z)(this,"identifier",void 0),(0,o.Z)(this,"dictionary",void 0),(0,o.Z)(this,"origin",void 0),(0,o.Z)(this,"height",void 0),(0,o.Z)(this,"width",void 0),(0,o.Z)(this,"imageDescriptor",void 0)}};(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.markerData,datatype:i.xsd.string}}),(0,s.w6)("design:type",String)],w.prototype,"data",void 0),(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.markerIdentifier,datatype:i.xsd.integer},numberType:d.NumberType.INTEGER}),(0,s.w6)("design:type",Number)],w.prototype,"identifier",void 0),(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.hasDictionary}}),(0,s.w6)("design:type","function"===typeof(_="undefined"!==typeof n&&n)?_:Object)],w.prototype,"dictionary",void 0),(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.hasOrigin}}),(0,s.w6)("design:type","function"===typeof(c="undefined"!==typeof m.x&&m.x)?c:Object)],w.prototype,"origin",void 0),(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:[p.NQ.hasHeight],serializer:t=>i.RDFBuilder.blankNode().add(i.rdf.type,i.qudt.QuantityValue).add(i.qudt.unit,d.LengthUnit.MILLIMETER).add(i.qudt.numericValue,t,i.xsd.double).build(),deserializer:t=>{const e=i.RDFSerializer.deserialize(t.predicates[i.qudt.unit][0],d.LengthUnit);return e.convert(parseFloat(t.predicates[i.qudt.numericValue][0].value),d.LengthUnit.MILLIMETER)}}}),(0,s.w6)("design:type",Number)],w.prototype,"height",void 0),(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:[p.NQ.hasWidth],serializer:t=>i.RDFBuilder.blankNode().add(i.rdf.type,i.qudt.QuantityValue).add(i.qudt.unit,d.LengthUnit.MILLIMETER).add(i.qudt.numericValue,t,i.xsd.double).build(),deserializer:t=>{const e=i.RDFSerializer.deserialize(t.predicates[i.qudt.unit][0],d.LengthUnit);return e.convert(parseFloat(t.predicates[i.qudt.numericValue][0].value),d.LengthUnit.MILLIMETER)}}}),(0,s.w6)("design:type",Number)],w.prototype,"width",void 0),(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NQ.hasImageDesciptor}}),(0,s.w6)("design:type","function"===typeof(u="undefined"!==typeof l&&l)?u:Object)],w.prototype,"imageDescriptor",void 0),w=(0,s.gn)([(0,d.SerializableObject)({rdf:{type:p.NQ.FiducialMarker}})],w);let I=class ArUcoMarker extends w{};I=(0,s.gn)([(0,d.SerializableObject)({rdf:{type:p.NQ.ArUco}})],I);var k=r(7836);let v=class Geometry{constructor(){(0,o.Z)(this,"asGltf",void 0),(0,o.Z)(this,"_gltf",void 0)}get gltf(){return this._gltf}load(){return new Promise(((t,e)=>{const r=new k.E;r.load(this.asGltf,(e=>{this._gltf=e,t(this._gltf)}),void 0,e)}))}};var b;(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.NI.asGltf,datatype:i.xsd.anyURI}}),(0,s.w6)("design:type",String)],v.prototype,"asGltf",void 0),v=(0,s.gn)([(0,d.SerializableObject)({rdf:{type:p.Af.Geometry}})],v);let y=class VirtualObject extends d.DataObject{constructor(...t){super(...t),(0,o.Z)(this,"geometry",void 0)}};(0,s.gn)([(0,d.SerializableMember)({rdf:{predicate:p.Af.hasGeometry}}),(0,s.w6)("design:type","function"===typeof(b="undefined"!==typeof v&&v)?b:Object)],y.prototype,"geometry",void 0),y=(0,s.gn)([(0,d.SerializableObject)({rdf:{type:i.sosa.FeatureOfInterest}})],y);let T=class ARTagMarker extends w{};T=(0,s.gn)([(0,d.SerializableObject)({rdf:{type:p.NQ.ARTag}})],T)},336:(t,e,r)=>{"use strict";r.d(e,{NQ:()=>ga,NI:()=>ha,Af:()=>fa});var a={};r.r(a),r.d(a,{AP3PPoseComputation:()=>g,ARPlatform:()=>h,ARTag:()=>l,ARToolKit:()=>c,ActiveMarker:()=>m,AprilTag:()=>w,ArUco:()=>I,Barcode:()=>u,Barcode1D:()=>v,Barcode2D:()=>_,BinaryID:()=>b,BullsEye:()=>y,CALTag:()=>T,CCC:()=>S,CCTag:()=>C,Chilitags:()=>D,ChromaTag:()=>R,CircularBarcode:()=>n,Cybercode:()=>O,DICT_4X4_100:()=>Dt,DICT_4X4_1000:()=>Rt,DICT_4X4_250:()=>Ot,DICT_4X4_50:()=>xt,DICT_5X5_100:()=>Pt,DICT_5X5_1000:()=>At,DICT_5X5_250:()=>Gt,DICT_5X5_50:()=>jt,DICT_6X6_100:()=>Et,DICT_6X6_1000:()=>Mt,DICT_6X6_250:()=>Nt,DICT_6X6_50:()=>Ut,DICT_7X7_100:()=>qt,DICT_7X7_1000:()=>zt,DICT_7X7_250:()=>Xt,DICT_7X7_50:()=>Ft,DICT_APRILTAG_16h5:()=>Lt,DICT_APRILTAG_25h9:()=>Qt,DICT_APRILTAG_36h10:()=>Bt,DICT_APRILTAG_36h11:()=>Zt,DICT_ARTAG:()=>Wt,DICT_ARUCO_ORIGINAL:()=>Vt,DICT_CHILLITAGS:()=>Ht,DICT_MIP_36h12:()=>Kt,DICT_REACTIVISION_AMOEBA:()=>$t,DICT_REACTIVISION_YAMAARASHI:()=>Yt,DICT_TOPOTAG_3X3:()=>Jt,DICT_TOPOTAG_4X4:()=>te,DICT_TOPOTAG_5X5:()=>ee,EPnPPoseComputation:()=>x,FiducialMarker:()=>s,FourierTag:()=>P,IPPEPoseComputation:()=>A,ImageDescriptor:()=>d,InterSense:()=>G,MarkerDetection:()=>j,MarkerDictionary:()=>p,MarkerOrigin:()=>E,MarkerPoseEstimation:()=>M,MarkerlessPoseEstimation:()=>N,MaxiCode:()=>U,MultiRing:()=>q,OriginBottomLeft:()=>re,OriginBottomRight:()=>ae,OriginCenter:()=>ie,OriginTopLeft:()=>oe,OriginTopRight:()=>se,P3PPoseComputation:()=>z,PassiveMarker:()=>k,PiTag:()=>X,PnPPoseComputation:()=>f,PoseOutput:()=>F,QRCode:()=>L,RuneTag:()=>Q,SIFT:()=>B,STag:()=>Z,TRIP:()=>W,TopoTag:()=>V,VisualCode:()=>H,WhyCode:()=>K,WhyCon:()=>$,_BASE:()=>pe,_PREFIX:()=>de,asImage:()=>dt,asNFT:()=>nt,asPATT:()=>gt,asZFT:()=>ft,codes:()=>J,color:()=>bt,crc:()=>ht,crowns:()=>lt,dictionarySize:()=>_t,encoding:()=>yt,hammingDistance:()=>ut,hasDictionary:()=>tt,hasHeight:()=>et,hasImageDesciptor:()=>rt,hasMarker:()=>at,hasOrigin:()=>it,hasWidth:()=>ot,isImageDescriptorOf:()=>st,markerBits:()=>mt,markerCode:()=>wt,markerData:()=>It,markerIdentifier:()=>kt,maxIdentifiers:()=>ct,opencvName:()=>Tt,partOf:()=>pt,reacTIVision:()=>Y,shape:()=>St,supportedMarker:()=>Ct,version:()=>vt});var i={};r.r(i),r.d(i,{CurrentGeometryState:()=>ne,Geometry:()=>fe,GeometryContext:()=>he,GeometryState:()=>ge,_BASE:()=>Oe,_PREFIX:()=>xe,complementsGeometry:()=>le,containsGeometryObject:()=>_e,containsPropertyState:()=>ce,hasComplexGeometryDescription:()=>ue,hasGeometry:()=>me,hasGeometryContext:()=>we,hasGeometryState:()=>Ie,hasInferredPropertyState:()=>ke,hasReferencedGeometryId:()=>De,hasSimpleGeometryDescription:()=>Re,isDerivedFromGeometry:()=>be,isDerivedFromGeometryState:()=>ye,isExplicitlyDerivedFrom:()=>ve,isImplicitlyDerivedFrom:()=>Te,isPartOfGeometry:()=>Se,transformsGeometry:()=>Ce});var o={};r.r(o),r.d(o,{ReferencedContent:()=>Pe,_BASE:()=>da,_PREFIX:()=>na,as3dmo:()=>Ae,asCollada:()=>Qe,asDwg:()=>Be,asDwg_v2010:()=>Ze,asDwg_v2013:()=>We,asDwg_v2018:()=>Ve,asE57:()=>He,asGeojson:()=>Ke,asGeojson_ld:()=>Ge,asGeojson_v2008:()=>$e,asGeojson_v2016:()=>Ye,asGeomOntology:()=>je,asGltf:()=>Je,asGml:()=>tr,asIfc:()=>er,asIfc_v2x3:()=>rr,asIfc_v2x3_ifc:()=>ar,asIfc_v2x3_ifcxml:()=>ir,asIfc_v2x3tc1:()=>or,asIfc_v2x3tc1_ifc:()=>sr,asIfc_v2x3tc1_ifcxml:()=>pr,asIfc_v2x4:()=>dr,asIfc_v2x4_ifc:()=>nr,asIfc_v2x4_ifcxml:()=>gr,asIfc_v2x4add1:()=>fr,asIfc_v2x4add1_ifc:()=>hr,asIfc_v2x4add1_ifcxml:()=>lr,asIfc_v2x4add2:()=>_r,asIfc_v2x4add2_ifc:()=>cr,asIfc_v2x4add2_ifcxml:()=>ur,asIfcowl:()=>Ee,asIfcowl_v2x3final:()=>Me,asIfcowl_v2x3tc1:()=>Ne,asIfcowl_v2x4add1:()=>Ue,asIfcowl_v2x4add2:()=>qe,asIfcowl_v2x4final:()=>ze,asIges:()=>mr,asLas:()=>wr,asNexus:()=>Ir,asObj:()=>kr,asOntobrepOntology:()=>Xe,asOntostepOntology:()=>Fe,asPcd:()=>vr,asPly:()=>br,asRevit:()=>yr,asRevit_v2017:()=>Tr,asRevit_v2018:()=>Sr,asRevit_v2019:()=>Cr,asRevit_v2020:()=>Dr,asRhino:()=>Rr,asRhino_v5:()=>Or,asRhino_v6:()=>xr,asSfa:()=>Pr,asSfa_v1:()=>Ar,asSfa_v1_wkt:()=>Gr,asSfa_v2:()=>jr,asSfa_v2_wkb:()=>Er,asSfa_v2_wkt:()=>Mr,asShapefile:()=>Nr,asShapefile_dbf:()=>Ur,asShapefile_prj:()=>qr,asShapefile_shp:()=>zr,asShapefile_shx:()=>Xr,asSketchUp:()=>Fr,asSketchUp_v2017:()=>Lr,asSketchUp_v2018:()=>Qr,asSketchUp_v2019:()=>Br,asStep:()=>Zr,asStep_ap214:()=>Wr,asStep_ap242:()=>Vr,asStl:()=>Hr,asSvg:()=>Kr,asX3d:()=>$r,hasIfcId:()=>Yr,hasIfcId_guid:()=>Jr,hasObjId:()=>ta,hasObjId_group:()=>ea,hasObjId_object:()=>ra,hasReferencedContent:()=>Le,hasRevitId:()=>aa,hasRevitId_element:()=>ia,hasRevitId_uniqueId:()=>oa,hasRhinoId:()=>sa,hasRhinoId_object:()=>pa});const s="http://purl.org/fidmark/FiducialMarker",p="http://purl.org/fidmark/MarkerDictionary",d="http://purl.org/fidmark/ImageDescriptor",n="http://purl.org/fidmark/CircularBarcode",g="http://purl.org/fidmark/AP3PPoseComputation",f="http://purl.org/fidmark/PnPPoseComputation",h="http://purl.org/fidmark/ARPlatform",l="http://purl.org/fidmark/ARTag",_="http://purl.org/fidmark/Barcode2D",c="http://purl.org/fidmark/ARToolKit",u="http://purl.org/fidmark/Barcode",m="http://purl.org/fidmark/ActiveMarker",w="http://purl.org/fidmark/AprilTag",I="http://purl.org/fidmark/ArUco",k="http://purl.org/fidmark/PassiveMarker",v="http://purl.org/fidmark/Barcode1D",b="http://purl.org/fidmark/BinaryID",y="http://purl.org/fidmark/BullsEye",T="http://purl.org/fidmark/CALTag",S="http://purl.org/fidmark/CCC",C="http://purl.org/fidmark/CCTag",D="http://purl.org/fidmark/Chilitags",R="http://purl.org/fidmark/ChromaTag",O="http://purl.org/fidmark/Cybercode",x="http://purl.org/fidmark/EPnPPoseComputation",P="http://purl.org/fidmark/FourierTag",A="http://purl.org/fidmark/IPPEPoseComputation",G="http://purl.org/fidmark/InterSense",j="http://purl.org/fidmark/MarkerDetection",E="http://purl.org/fidmark/MarkerOrigin",M="http://purl.org/fidmark/MarkerPoseEstimation",N="http://purl.org/fidmark/MarkerlessPoseEstimation",U="http://purl.org/fidmark/MaxiCode",q="http://purl.org/fidmark/MultiRing",z="http://purl.org/fidmark/P3PPoseComputation",X="http://purl.org/fidmark/PiTag",F="http://purl.org/fidmark/PoseOutput",L="http://purl.org/fidmark/QRCode",Q="http://purl.org/fidmark/RuneTag",B="http://purl.org/fidmark/SIFT",Z="http://purl.org/fidmark/STag",W="http://purl.org/fidmark/TRIP",V="http://purl.org/fidmark/TopoTag",H="http://purl.org/fidmark/VisualCode",K="http://purl.org/fidmark/WhyCode",$="http://purl.org/fidmark/WhyCon",Y="http://purl.org/fidmark/reacTIVision",J="http://purl.org/fidmark/codes",tt="http://purl.org/fidmark/hasDictionary",et="http://purl.org/fidmark/hasHeight",rt="http://purl.org/fidmark/hasImageDesciptor",at="http://purl.org/fidmark/hasMarker",it="http://purl.org/fidmark/hasOrigin",ot="http://purl.org/fidmark/hasWidth",st="http://purl.org/fidmark/isImageDescriptorOf",pt="http://purl.org/fidmark/partOf",dt="http://purl.org/fidmark/asImage",nt="http://purl.org/fidmark/asNFT",gt="http://purl.org/fidmark/asPATT",ft="http://purl.org/fidmark/asZFT",ht="http://purl.org/fidmark/crc",lt="http://purl.org/fidmark/crowns",_t="http://purl.org/fidmark/dictionarySize",ct="http://purl.org/fidmark/maxIdentifiers",ut="http://purl.org/fidmark/hammingDistance",mt="http://purl.org/fidmark/markerBits",wt="http://purl.org/fidmark/markerCode",It="http://purl.org/fidmark/markerData",kt="http://purl.org/fidmark/markerIdentifier",vt="http://purl.org/fidmark/version",bt="http://purl.org/fidmark/color",yt="http://purl.org/fidmark/encoding",Tt="http://purl.org/fidmark/opencvName",St="http://purl.org/fidmark/shape",Ct="http://purl.org/fidmark/supportedMarker",Dt="http://purl.org/fidmark/DICT_4X4_100",Rt="http://purl.org/fidmark/DICT_4X4_1000",Ot="http://purl.org/fidmark/DICT_4X4_250",xt="http://purl.org/fidmark/DICT_4X4_50",Pt="http://purl.org/fidmark/DICT_5X5_100",At="http://purl.org/fidmark/DICT_5X5_1000",Gt="http://purl.org/fidmark/DICT_5X5_250",jt="http://purl.org/fidmark/DICT_5X5_50",Et="http://purl.org/fidmark/DICT_6X6_100",Mt="http://purl.org/fidmark/DICT_6X6_1000",Nt="http://purl.org/fidmark/DICT_6X6_250",Ut="http://purl.org/fidmark/DICT_6X6_50",qt="http://purl.org/fidmark/DICT_7X7_100",zt="http://purl.org/fidmark/DICT_7X7_1000",Xt="http://purl.org/fidmark/DICT_7X7_250",Ft="http://purl.org/fidmark/DICT_7X7_50",Lt="http://purl.org/fidmark/DICT_APRILTAG_16h5",Qt="http://purl.org/fidmark/DICT_APRILTAG_25h9",Bt="http://purl.org/fidmark/DICT_APRILTAG_36h10",Zt="http://purl.org/fidmark/DICT_APRILTAG_36h11",Wt="http://purl.org/fidmark/DICT_ARTAG",Vt="http://purl.org/fidmark/DICT_ARUCO_ORIGINAL",Ht="http://purl.org/fidmark/DICT_CHILLITAGS",Kt="http://purl.org/fidmark/DICT_MIP_36h12",$t="http://purl.org/fidmark/DICT_REACTIVISION_AMOEBA",Yt="http://purl.org/fidmark/DICT_REACTIVISION_YAMAARASHI",Jt="http://purl.org/fidmark/DICT_TOPOTAG_3X3",te="http://purl.org/fidmark/DICT_TOPOTAG_4X4",ee="http://purl.org/fidmark/DICT_TOPOTAG_5X5",re="http://purl.org/fidmark/OriginBottomLeft",ae="http://purl.org/fidmark/OriginBottomRight",ie="http://purl.org/fidmark/OriginCenter",oe="http://purl.org/fidmark/OriginTopLeft",se="http://purl.org/fidmark/OriginTopRight",pe="http://purl.org/fidmark/",de="fidmark",ne="https://w3id.org/omg#CurrentGeometryState",ge="https://w3id.org/omg#GeometryState",fe="https://w3id.org/omg#Geometry",he="https://w3id.org/omg#GeometryContext",le="https://w3id.org/omg#complementsGeometry",_e="https://w3id.org/omg#containsGeometryObject",ce="https://w3id.org/omg#containsPropertyState",ue="https://w3id.org/omg#hasComplexGeometryDescription",me="https://w3id.org/omg#hasGeometry",we="https://w3id.org/omg#hasGeometryContext",Ie="https://w3id.org/omg#hasGeometryState",ke="https://w3id.org/omg#hasInferredPropertyState",ve="https://w3id.org/omg#isExplicitlyDerivedFrom",be="https://w3id.org/omg#isDerivedFromGeometry",ye="https://w3id.org/omg#isDerivedFromGeometryState",Te="https://w3id.org/omg#isImplicitlyDerivedFrom",Se="https://w3id.org/omg#isPartOfGeometry",Ce="https://w3id.org/omg#transformsGeometry",De="https://w3id.org/omg#hasReferencedGeometryId",Re="https://w3id.org/omg#hasSimpleGeometryDescription",Oe="https://w3id.org/omg#",xe="omg",Pe="https://w3id.org/fog#ReferencedContent",Ae="https://w3id.org/fog#as3dmo",Ge="https://w3id.org/fog#asGeojson-ld",je="https://w3id.org/fog#asGeomOntology",Ee="https://w3id.org/fog#asIfcowl",Me="https://w3id.org/fog#asIfcowl_v2x3final",Ne="https://w3id.org/fog#asIfcowl_v2x3tc1",Ue="https://w3id.org/fog#asIfcowl_v2x4add1",qe="https://w3id.org/fog#asIfcowl_v2x4add2",ze="https://w3id.org/fog#asIfcowl_v2x4final",Xe="https://w3id.org/fog#asOntobrepOntology",Fe="https://w3id.org/fog#asOntostepOntology",Le="https://w3id.org/fog#hasReferencedContent",Qe="https://w3id.org/fog#asCollada",Be="https://w3id.org/fog#asDwg",Ze="https://w3id.org/fog#asDwg_v2010",We="https://w3id.org/fog#asDwg_v2013",Ve="https://w3id.org/fog#asDwg_v2018",He="https://w3id.org/fog#asE57",Ke="https://w3id.org/fog#asGeojson",$e="https://w3id.org/fog#asGeojson_v2008",Ye="https://w3id.org/fog#asGeojson_v2016",Je="https://w3id.org/fog#asGltf",tr="https://w3id.org/fog#asGml",er="https://w3id.org/fog#asIfc",rr="https://w3id.org/fog#asIfc_v2x3",ar="https://w3id.org/fog#asIfc_v2x3-ifc",ir="https://w3id.org/fog#asIfc_v2x3-ifcxml",or="https://w3id.org/fog#asIfc_v2x3tc1",sr="https://w3id.org/fog#asIfc_v2x3tc1-ifc",pr="https://w3id.org/fog#asIfc_v2x3tc1-ifcxml",dr="https://w3id.org/fog#asIfc_v2x4",nr="https://w3id.org/fog#asIfc_v2x4-ifc",gr="https://w3id.org/fog#asIfc_v2x4-ifcxml",fr="https://w3id.org/fog#asIfc_v2x4add1",hr="https://w3id.org/fog#asIfc_v2x4add1-ifc",lr="https://w3id.org/fog#asIfc_v2x4add1-ifcxml",_r="https://w3id.org/fog#asIfc_v2x4add2",cr="https://w3id.org/fog#asIfc_v2x4add2-ifc",ur="https://w3id.org/fog#asIfc_v2x4add2-ifcxml",mr="https://w3id.org/fog#asIges",wr="https://w3id.org/fog#asLas",Ir="https://w3id.org/fog#asNexus",kr="https://w3id.org/fog#asObj",vr="https://w3id.org/fog#asPcd",br="https://w3id.org/fog#asPly",yr="https://w3id.org/fog#asRevit",Tr="https://w3id.org/fog#asRevit_v2017",Sr="https://w3id.org/fog#asRevit_v2018",Cr="https://w3id.org/fog#asRevit_v2019",Dr="https://w3id.org/fog#asRevit_v2020",Rr="https://w3id.org/fog#asRhino",Or="https://w3id.org/fog#asRhino_v5",xr="https://w3id.org/fog#asRhino_v6",Pr="https://w3id.org/fog#asSfa",Ar="https://w3id.org/fog#asSfa_v1",Gr="https://w3id.org/fog#asSfa_v1-wkt",jr="https://w3id.org/fog#asSfa_v2",Er="https://w3id.org/fog#asSfa_v2-wkb",Mr="https://w3id.org/fog#asSfa_v2-wkt",Nr="https://w3id.org/fog#asShapefile",Ur="https://w3id.org/fog#asShapefile-dbf",qr="https://w3id.org/fog#asShapefile-prj",zr="https://w3id.org/fog#asShapefile-shp",Xr="https://w3id.org/fog#asShapefile-shx",Fr="https://w3id.org/fog#asSketchUp",Lr="https://w3id.org/fog#asSketchUp_v2017",Qr="https://w3id.org/fog#asSketchUp_v2018",Br="https://w3id.org/fog#asSketchUp_v2019",Zr="https://w3id.org/fog#asStep",Wr="https://w3id.org/fog#asStep_ap214",Vr="https://w3id.org/fog#asStep_ap242",Hr="https://w3id.org/fog#asStl",Kr="https://w3id.org/fog#asSvg",$r="https://w3id.org/fog#asX3d",Yr="https://w3id.org/fog#hasIfcId",Jr="https://w3id.org/fog#hasIfcId-guid",ta="https://w3id.org/fog#hasObjId",ea="https://w3id.org/fog#hasObjId-group",ra="https://w3id.org/fog#hasObjId-object",aa="https://w3id.org/fog#hasRevitId",ia="https://w3id.org/fog#hasRevitId-element",oa="https://w3id.org/fog#hasRevitId-uniqueId",sa="https://w3id.org/fog#hasRhinoId",pa="https://w3id.org/fog#hasRhinoId-object",da="https://w3id.org/fog#",na="fog",ga=a,fa=i,ha=o},1725:(t,e,r)=>{"use strict";r.d(e,{X:()=>n});r(560);var a=r(4283),i=r(2072),o=r(336),s=r(6551),p=r(543),d=r(9876);const n=(0,d.Q_)("marker",{state:()=>({rdf:void 0,markers:[],objects:[]}),getters:{},actions:{initialize(){return new Promise(((t,e)=>{const r="http://example.org/",d=new a.n3;d.uid="marker-1",d.dictionary=a.Vz.fromURI(o.NQ.DICT_MIP_36h12),d.identifier=10,d.origin=i.x.fromURI(o.NQ.OriginCenter),d.height=150,d.width=150;const n=new a.n3;n.uid="marker-2",n.dictionary=a.Vz.fromURI(o.NQ.DICT_ARUCO_ORIGINAL),n.identifier=94,n.origin=i.x.fromURI(o.NQ.OriginCenter),n.height=100,n.width=100;const g=new a.nd("earth");g.addRelativePosition(new s.Relative3DPosition(d.uid,0,0,100,s.LengthUnit.MILLIMETER)),g.geometry=new a.ZX,g.geometry.asGltf="https://raw.githubusercontent.com/microsoft/mixed-reality-extension-sdk-samples/master/samples/solar-system/public/assets/earth.gltf";const f=new a.nd("jupiter");f.addRelativePosition(new s.Relative3DPosition(n.uid,0,0,.5,s.LengthUnit.METER)),f.geometry=new a.ZX,f.geometry.asGltf="https://raw.githubusercontent.com/microsoft/mixed-reality-extension-sdk-samples/master/samples/solar-system/public/assets/jupiter.gltf";const h=new p.Store;h.addQuads(p.RDFSerializer.serializeToQuads(d,r)),h.addQuads(p.RDFSerializer.serializeToQuads(g,r)),h.addQuads(p.RDFSerializer.serializeToQuads(n,r)),h.addQuads(p.RDFSerializer.serializeToQuads(f,r)),p.RDFSerializer.stringify(h,{prettyPrint:!0,baseUri:"http://example.org/",prefixes:{fidmark:"http://purl.org/fidmark/",example:"http://example.org/",[o.Af._PREFIX]:o.Af._BASE,[o.NI._PREFIX]:o.NI._BASE}}).then((t=>(this.rdf=t,this.fromRDF(this.rdf)))).then((()=>{t()})).catch(e)}))},fromRDF(t){return new Promise(((e,r)=>{const i=new p.Parser,o=i.parse(t),d=new p.Store(o),n=new p.SPARQLDataDriver(s.DataObject,{sources:[d],engine:p.DefaultEngine}),g="\n          PREFIX fidmark: <http://purl.org/fidmark/>\n          PREFIX ssn: <http://www.w3.org/ns/ssn/>\n          PREFIX sosa: <http://www.w3.org/ns/sosa/>\n          PREFIX omg: <https://w3id.org/omg#>\n\n          SELECT ?object {\n              { ?object a fidmark:ArUco }\n              UNION\n              { \n                ?object a sosa:FeatureOfInterest .\n                ?object omg:hasGeometry ?geometry .\n              }\n          }";n.queryBindings(g).then((t=>{this.markers=[],this.objects=[],t.forEach((t=>{const e=t.get("object").id,r=p.RDFSerializer.deserializeFromStore(p.DataFactory.namedNode(e),d);r instanceof a.hx?this.markers.push(r):r instanceof a.nd&&(r.geometry.load(),this.objects.push(r))})),console.log("Virtual objects",this.objects),e()})).catch(r)}))}}})},6551:t=>{"use strict";t.exports=OpenHPS.core},543:t=>{"use strict";t.exports=OpenHPS.rdf},6177:t=>{"use strict";t.exports=OpenHPS.video},3340:t=>{"use strict";t.exports=OpenHPS.webrtc},2904:t=>{"use strict";t.exports=void 0}},e={};function __webpack_require__(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,__webpack_require__),i.exports}__webpack_require__.m=t,(()=>{var t=[];__webpack_require__.O=(e,r,a,i)=>{if(!r){var o=1/0;for(n=0;n<t.length;n++){for(var[r,a,i]=t[n],s=!0,p=0;p<r.length;p++)(!1&i||o>=i)&&Object.keys(__webpack_require__.O).every((t=>__webpack_require__.O[t](r[p])))?r.splice(p--,1):(s=!1,i<o&&(o=i));if(s){t.splice(n--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var n=t.length;n>0&&t[n-1][2]>i;n--)t[n]=t[n-1];t[n]=[r,a,i]}})(),(()=>{__webpack_require__.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return __webpack_require__.d(e,{a:e}),e}})(),(()=>{__webpack_require__.d=(t,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),(()=>{__webpack_require__.f={},__webpack_require__.e=t=>Promise.all(Object.keys(__webpack_require__.f).reduce(((e,r)=>(__webpack_require__.f[r](t,e),e)),[]))})(),(()=>{__webpack_require__.u=t=>"js/"+t+"."+{74:"8b7ce425",78:"36a921d5",109:"34280411",158:"2ef25567",159:"284e735a",320:"6f7b66dc",338:"697adcc2",544:"0b13aa14",576:"fcb4289a",753:"7d6aa6c2",775:"5aa9e00f",789:"efd2adbb",980:"d6174174"}[t]+".js"})(),(()=>{__webpack_require__.miniCssF=t=>"css/"+t+"."+{159:"00add67b",320:"d8c23228"}[t]+".css"})(),(()=>{__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{__webpack_require__.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="eswc2024:";__webpack_require__.l=(r,a,i,o)=>{if(t[r])t[r].push(a);else{var s,p;if(void 0!==i)for(var d=document.getElementsByTagName("script"),n=0;n<d.length;n++){var g=d[n];if(g.getAttribute("src")==r||g.getAttribute("data-webpack")==e+i){s=g;break}}s||(p=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,__webpack_require__.nc&&s.setAttribute("nonce",__webpack_require__.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[a];var onScriptComplete=(e,a)=>{s.onerror=s.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((t=>t(a))),e)return e(a)},f=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=onScriptComplete.bind(null,s.onerror),s.onload=onScriptComplete.bind(null,s.onload),p&&document.head.appendChild(s)}}})(),(()=>{__webpack_require__.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{__webpack_require__.p="/application/"})(),(()=>{if("undefined"!==typeof document){var createStylesheet=(t,e,r,a,i)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var onLinkComplete=r=>{if(o.onerror=o.onload=null,"load"===r.type)a();else{var s=r&&("load"===r.type?"missing":r.type),p=r&&r.target&&r.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+p+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=p,o.parentNode&&o.parentNode.removeChild(o),i(d)}};return o.onerror=o.onload=onLinkComplete,o.href=e,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},findStylesheet=(t,e)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var i=r[a],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){i=s[a],o=i.getAttribute("data-href");if(o===t||o===e)return i}},loadStylesheet=t=>new Promise(((e,r)=>{var a=__webpack_require__.miniCssF(t),i=__webpack_require__.p+a;if(findStylesheet(a,i))return e();createStylesheet(t,i,null,e,r)})),t={143:0};__webpack_require__.f.miniCss=(e,r)=>{var a={159:1,320:1};t[e]?r.push(t[e]):0!==t[e]&&a[e]&&r.push(t[e]=loadStylesheet(e).then((()=>{t[e]=0}),(r=>{throw delete t[e],r})))}}})(),(()=>{var t={143:0};__webpack_require__.f.j=(e,r)=>{var a=__webpack_require__.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise(((r,i)=>a=t[e]=[r,i]));r.push(a[2]=i);var o=__webpack_require__.p+__webpack_require__.u(e),s=new Error,loadingEnded=r=>{if(__webpack_require__.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}};__webpack_require__.l(o,loadingEnded,"chunk-"+e,e)}},__webpack_require__.O.j=e=>0===t[e];var webpackJsonpCallback=(e,r)=>{var a,i,[o,s,p]=r,d=0;if(o.some((e=>0!==t[e]))){for(a in s)__webpack_require__.o(s,a)&&(__webpack_require__.m[a]=s[a]);if(p)var n=p(__webpack_require__)}for(e&&e(r);d<o.length;d++)i=o[d],__webpack_require__.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return __webpack_require__.O(n)},e=globalThis["webpackChunkeswc2024"]=globalThis["webpackChunkeswc2024"]||[];e.forEach(webpackJsonpCallback.bind(null,0)),e.push=webpackJsonpCallback.bind(null,e.push.bind(e))})();var r=__webpack_require__.O(void 0,[998],(()=>__webpack_require__(7461)));r=__webpack_require__.O(r)})();
//# sourceMappingURL=app.16bfdfad.js.map
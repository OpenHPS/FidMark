(()=>{var t={1993:t=>{function r(t){return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}))}r.keys=()=>[],r.resolve=r,r.id=1993,t.exports=r},7461:(t,r,e)=>{"use strict";var o=e(9963),i=e(6252);function a(t,r,e,o,a,s){const d=(0,i.up)("ion-router-outlet"),p=(0,i.up)("ion-app");return(0,i.wg)(),(0,i.j4)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(d)])),_:1})}var s=e(7327),d=e(7582),p=e(847),n=e(1124),g=e(4105),f=e(543),h=e(8494);let l=class extends n.w3{constructor(...t){super(...t),(0,s.Z)(this,"markerStore",(0,h.X)())}async beforeMount(){await(0,g.loadWASM)("/w/FidMark-website/application/js/vendor/onigasm/onigasm.wasm")}mounted(){f.RDFSerializer.initialize("video"),this.markerStore.initialize()}};l=(0,d.gn)([(0,n.Ei)({components:{IonApp:p.dr,IonRouterOutlet:p.jP}})],l);const m=l;var c=e(3744);const u=(0,c.Z)(m,[["render",a]]),_=u;var I=e(4297),w=e(2262),v=e(8903);const k=(0,i.aZ)({__name:"TabsPage",setup(t){return(t,r)=>((0,i.wg)(),(0,i.j4)((0,w.SU)(p._i),null,{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.UN),null,{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.jP)),(0,i.Wm)((0,w.SU)(p.yq),{slot:"bottom"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.ZU),{tab:"camera",href:"/tabs/camera"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.gu),{"aria-hidden":"true",icon:(0,w.SU)(v.cameraOutline)},null,8,["icon"]),(0,i.Wm)((0,w.SU)(p.Q$),null,{default:(0,i.w5)((()=>[(0,i.Uk)("AR")])),_:1})])),_:1}),(0,i.Wm)((0,w.SU)(p.ZU),{tab:"editor",href:"/tabs/editor"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.gu),{"aria-hidden":"true",icon:(0,w.SU)(v.code)},null,8,["icon"]),(0,i.Wm)((0,w.SU)(p.Q$),null,{default:(0,i.w5)((()=>[(0,i.Uk)("text/turtle")])),_:1})])),_:1}),(0,i.Wm)((0,w.SU)(p.ZU),{tab:"objects",href:"/tabs/objects"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,w.SU)(p.gu),{"aria-hidden":"true",icon:(0,w.SU)(v.cubeOutline)},null,8,["icon"]),(0,i.Wm)((0,w.SU)(p.Q$),null,{default:(0,i.w5)((()=>[(0,i.Uk)("Objects")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}))}}),y=k,b=y,T=[{path:"/",redirect:"/tabs/"},{path:"/tabs/",component:b,children:[{path:"",redirect:"/tabs/camera"},{path:"camera",component:()=>e.e(491).then(e.bind(e,1491))},{path:"editor",component:()=>e.e(159).then(e.bind(e,8159))},{path:"objects",component:()=>e.e(786).then(e.bind(e,3786))}]}],S=(0,I.p7)({history:(0,I.r5)("/w/FidMark-website/application/"),routes:T}),C=S;var D=e(6086),R=e(7647);e(8851),e(1292),e(1633),e(1045),e(6187),e(2299),e(3423),e(4687),e(9147),e(6250);const O=(0,o.ri)(_).use(p.oX).use(C).use((0,D.WB)());C.isReady().then((()=>{(0,R.a)({...v}),O.mount("#app")}))},4283:(t,r,e)=>{"use strict";e.d(r,{n3:()=>_,hx:()=>u,ZX:()=>w,Vz:()=>n,nd:()=>k});e(8660);var o,i=e(543),a=e(7327),s=e(7582),d=e(336),p=e(6551);let n=o=class{constructor(){(0,a.Z)(this,"size",void 0),(0,a.Z)(this,"hammingSize",void 0)}static fromURI(t){const r=new o;return r.rdf={uri:t},r}};var g,f,h;(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NQ.dictionarySize}}),(0,s.w6)("design:type",Number)],n.prototype,"size",void 0),(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NQ.hammingDistance}}),(0,s.w6)("design:type",Number)],n.prototype,"hammingSize",void 0),n=o=(0,s.gn)([(0,p.SerializableObject)({rdf:{type:d.NQ.MarkerDictionary}})],n);let l=class{constructor(){(0,a.Z)(this,"image",void 0),(0,a.Z)(this,"nft",void 0),(0,a.Z)(this,"pattern",void 0)}};var m,c;(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NQ.asImage,datatype:i.xsd.anyURI}}),(0,s.w6)("design:type","function"===typeof(g="undefined"!==typeof i.IriString&&i.IriString)?g:Object)],l.prototype,"image",void 0),(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NQ.asNFT,datatype:i.xsd.anyURI}}),(0,s.w6)("design:type","function"===typeof(f="undefined"!==typeof i.IriString&&i.IriString)?f:Object)],l.prototype,"nft",void 0),(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NQ.asPATT,datatype:i.xsd.anyURI}}),(0,s.w6)("design:type","function"===typeof(h="undefined"!==typeof i.IriString&&i.IriString)?h:Object)],l.prototype,"pattern",void 0),l=(0,s.gn)([(0,p.SerializableObject)({rdf:{type:d.NQ.ImageDescriptor}})],l);let u=class extends p.ReferenceSpace{constructor(...t){super(...t),(0,a.Z)(this,"data",void 0),(0,a.Z)(this,"identifier",void 0),(0,a.Z)(this,"dictionary",void 0),(0,a.Z)(this,"origin",void 0),(0,a.Z)(this,"height",void 0),(0,a.Z)(this,"width",void 0),(0,a.Z)(this,"imageDescriptor",void 0)}};(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NQ.markerData,datatype:i.xsd.string}}),(0,s.w6)("design:type",String)],u.prototype,"data",void 0),(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NQ.markerIdentifier,datatype:i.xsd.integer},numberType:p.NumberType.INTEGER}),(0,s.w6)("design:type",Number)],u.prototype,"identifier",void 0),(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NQ.hasDictionary}}),(0,s.w6)("design:type","function"===typeof(m="undefined"!==typeof n&&n)?m:Object)],u.prototype,"dictionary",void 0),(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:[d.NQ.hasHeight],serializer:t=>i.RDFBuilder.blankNode().add(i.rdf.type,i.qudt.QuantityValue).add(i.qudt.unit,p.LengthUnit.MILLIMETER).add(i.qudt.numericValue,t,i.xsd.double).build(),deserializer:t=>{const r=i.RDFSerializer.deserialize(t.predicates[i.qudt.unit][0],p.LengthUnit);return r.convert(parseFloat(t.predicates[i.qudt.numericValue][0].value),p.LengthUnit.MILLIMETER)}}}),(0,s.w6)("design:type",Number)],u.prototype,"height",void 0),(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:[d.NQ.hasWidth],serializer:t=>i.RDFBuilder.blankNode().add(i.rdf.type,i.qudt.QuantityValue).add(i.qudt.unit,p.LengthUnit.MILLIMETER).add(i.qudt.numericValue,t,i.xsd.double).build(),deserializer:t=>{const r=i.RDFSerializer.deserialize(t.predicates[i.qudt.unit][0],p.LengthUnit);return r.convert(parseFloat(t.predicates[i.qudt.numericValue][0].value),p.LengthUnit.MILLIMETER)}}}),(0,s.w6)("design:type",Number)],u.prototype,"width",void 0),(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NQ.hasImageDesciptor}}),(0,s.w6)("design:type","function"===typeof(c="undefined"!==typeof l&&l)?c:Object)],u.prototype,"imageDescriptor",void 0),u=(0,s.gn)([(0,p.SerializableObject)({rdf:{type:d.NQ.FiducialMarker}})],u);let _=class extends u{};_=(0,s.gn)([(0,p.SerializableObject)({rdf:{type:d.NQ.ArUco}})],_);var I=e(7836);let w=class{constructor(){(0,a.Z)(this,"asGltf",void 0),(0,a.Z)(this,"_gltf",void 0)}get gltf(){return this._gltf}load(){return new Promise(((t,r)=>{const e=new I.E;e.load(this.asGltf,(r=>{this._gltf=r,t(this._gltf)}),void 0,r)}))}};var v;(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.NI.asGltf,datatype:i.xsd.anyURI}}),(0,s.w6)("design:type",String)],w.prototype,"asGltf",void 0),w=(0,s.gn)([(0,p.SerializableObject)({rdf:{type:d.Af.Geometry}})],w);let k=class extends p.DataObject{constructor(...t){super(...t),(0,a.Z)(this,"geometry",void 0)}};(0,s.gn)([(0,p.SerializableMember)({rdf:{predicate:d.Af.hasGeometry}}),(0,s.w6)("design:type","function"===typeof(v="undefined"!==typeof w&&w)?v:Object)],k.prototype,"geometry",void 0),k=(0,s.gn)([(0,p.SerializableObject)({rdf:{type:i.sosa.FeatureOfInterest}})],k);let y=class extends u{};y=(0,s.gn)([(0,p.SerializableObject)({rdf:{type:d.NQ.ARTag}})],y)},336:(t,r,e)=>{"use strict";e.d(r,{NQ:()=>po,NI:()=>go,Af:()=>no});var o={};e.r(o),e.d(o,{AP3PPoseComputation:()=>g,ARPlatform:()=>h,ARTag:()=>l,ARToolKit:()=>c,ActiveMarker:()=>_,AprilTag:()=>I,ArUco:()=>w,Barcode:()=>u,Barcode1D:()=>k,Barcode2D:()=>m,BinaryID:()=>y,BullsEye:()=>b,CALTag:()=>T,CCC:()=>S,CCTag:()=>C,Chilitags:()=>D,ChromaTag:()=>R,CircularBarcode:()=>n,Cybercode:()=>O,DICT_4X4_100:()=>Ct,DICT_4X4_1000:()=>Dt,DICT_4X4_50:()=>Rt,DICT_5X5_100:()=>Ot,DICT_5X5_1000:()=>Pt,DICT_5X5_250:()=>xt,DICT_5X5_50:()=>At,DICT_6X6_100:()=>Gt,DICT_6X6_1000:()=>jt,DICT_6X6_250:()=>Et,DICT_6X6_50:()=>Mt,DICT_7X7_100:()=>Nt,DICT_7X7_1000:()=>Ut,DICT_7X7_250:()=>Ft,DICT_7X7_50:()=>zt,DICT_APRILTAG_16h5:()=>Xt,DICT_APRILTAG_25h9:()=>Lt,DICT_APRILTAG_36h10:()=>Qt,DICT_APRILTAG_36h11:()=>Bt,DICT_ARUCO_ORIGINAL:()=>Zt,DICT_CHILLITAGS:()=>Wt,DICT_MIP_36h12:()=>Vt,DICT_REACTIVISION_AMOEBA:()=>qt,DICT_REACTIVISION_YAMAARASHI:()=>Ht,DICT_TOPOTAG_3X3:()=>Kt,DICT_TOPOTAG_4X4:()=>$t,DICT_TOPOTAG_5X5:()=>Yt,EPnPPoseComputation:()=>P,FiducialMarker:()=>s,FourierTag:()=>x,IPPEPoseComputation:()=>A,ImageDescriptor:()=>p,InterSense:()=>G,MarkerDetection:()=>j,MarkerDictionary:()=>d,MarkerOrigin:()=>E,MarkerPoseEstimation:()=>M,MarkerlessPoseEstimation:()=>N,MaxiCode:()=>U,MultiRing:()=>F,OriginBottomLeft:()=>Jt,OriginBottomRight:()=>tr,OriginCenter:()=>rr,OriginTopLeft:()=>er,OriginTopRight:()=>or,P3PPoseComputation:()=>z,PassiveMarker:()=>v,PiTag:()=>X,PnPPoseComputation:()=>f,PoseOutput:()=>L,QRCode:()=>Q,RuneTag:()=>B,SIFT:()=>Z,STag:()=>W,TRIP:()=>V,TopoTag:()=>q,VisualCode:()=>H,WhyCode:()=>K,WhyCon:()=>$,_BASE:()=>ir,_PREFIX:()=>ar,asImage:()=>dt,asNFT:()=>pt,asPATT:()=>nt,asZFT:()=>gt,color:()=>kt,crc:()=>ft,crowns:()=>ht,dictionarySize:()=>lt,encoding:()=>yt,hammingDistance:()=>ct,hasDictionary:()=>J,hasHeight:()=>tt,hasImageDesciptor:()=>rt,hasMarker:()=>et,hasOrigin:()=>ot,hasWidth:()=>it,isImageDescriptorOf:()=>at,markerBits:()=>ut,markerCode:()=>_t,markerData:()=>It,markerIdentifier:()=>wt,maxIdentifiers:()=>mt,opencvName:()=>bt,partOf:()=>st,reacTIVision:()=>Y,shape:()=>Tt,supportedMarker:()=>St,version:()=>vt});var i={};e.r(i),e.d(i,{CurrentGeometryState:()=>sr,Geometry:()=>pr,GeometryContext:()=>nr,GeometryState:()=>dr,_BASE:()=>Cr,_PREFIX:()=>Dr,complementsGeometry:()=>gr,containsGeometryObject:()=>fr,containsPropertyState:()=>hr,hasComplexGeometryDescription:()=>lr,hasGeometry:()=>mr,hasGeometryContext:()=>cr,hasGeometryState:()=>ur,hasInferredPropertyState:()=>_r,hasReferencedGeometryId:()=>Tr,hasSimpleGeometryDescription:()=>Sr,isDerivedFromGeometry:()=>wr,isDerivedFromGeometryState:()=>vr,isExplicitlyDerivedFrom:()=>Ir,isImplicitlyDerivedFrom:()=>kr,isPartOfGeometry:()=>yr,transformsGeometry:()=>br});var a={};e.r(a),e.d(a,{ReferencedContent:()=>Rr,_BASE:()=>ao,_PREFIX:()=>so,as3dmo:()=>Or,asCollada:()=>Xr,asDwg:()=>Lr,asDwg_v2010:()=>Qr,asDwg_v2013:()=>Br,asDwg_v2018:()=>Zr,asE57:()=>Wr,asGeojson:()=>Vr,asGeojson_ld:()=>Pr,asGeojson_v2008:()=>qr,asGeojson_v2016:()=>Hr,asGeomOntology:()=>xr,asGltf:()=>Kr,asGml:()=>$r,asIfc:()=>Yr,asIfc_v2x3:()=>Jr,asIfc_v2x3_ifc:()=>te,asIfc_v2x3_ifcxml:()=>re,asIfc_v2x3tc1:()=>ee,asIfc_v2x3tc1_ifc:()=>oe,asIfc_v2x3tc1_ifcxml:()=>ie,asIfc_v2x4:()=>ae,asIfc_v2x4_ifc:()=>se,asIfc_v2x4_ifcxml:()=>de,asIfc_v2x4add1:()=>pe,asIfc_v2x4add1_ifc:()=>ne,asIfc_v2x4add1_ifcxml:()=>ge,asIfc_v2x4add2:()=>fe,asIfc_v2x4add2_ifc:()=>he,asIfc_v2x4add2_ifcxml:()=>le,asIfcowl:()=>Ar,asIfcowl_v2x3final:()=>Gr,asIfcowl_v2x3tc1:()=>jr,asIfcowl_v2x4add1:()=>Er,asIfcowl_v2x4add2:()=>Mr,asIfcowl_v2x4final:()=>Nr,asIges:()=>me,asLas:()=>ce,asNexus:()=>ue,asObj:()=>_e,asOntobrepOntology:()=>Ur,asOntostepOntology:()=>Fr,asPcd:()=>Ie,asPly:()=>we,asRevit:()=>ve,asRevit_v2017:()=>ke,asRevit_v2018:()=>ye,asRevit_v2019:()=>be,asRevit_v2020:()=>Te,asRhino:()=>Se,asRhino_v5:()=>Ce,asRhino_v6:()=>De,asSfa:()=>Re,asSfa_v1:()=>Oe,asSfa_v1_wkt:()=>Pe,asSfa_v2:()=>xe,asSfa_v2_wkb:()=>Ae,asSfa_v2_wkt:()=>Ge,asShapefile:()=>je,asShapefile_dbf:()=>Ee,asShapefile_prj:()=>Me,asShapefile_shp:()=>Ne,asShapefile_shx:()=>Ue,asSketchUp:()=>Fe,asSketchUp_v2017:()=>ze,asSketchUp_v2018:()=>Xe,asSketchUp_v2019:()=>Le,asStep:()=>Qe,asStep_ap214:()=>Be,asStep_ap242:()=>Ze,asStl:()=>We,asSvg:()=>Ve,asX3d:()=>qe,hasIfcId:()=>He,hasIfcId_guid:()=>Ke,hasObjId:()=>$e,hasObjId_group:()=>Ye,hasObjId_object:()=>Je,hasReferencedContent:()=>zr,hasRevitId:()=>to,hasRevitId_element:()=>ro,hasRevitId_uniqueId:()=>eo,hasRhinoId:()=>oo,hasRhinoId_object:()=>io});const s="http://purl.org/fidmark/FiducialMarker",d="http://purl.org/fidmark/MarkerDictionary",p="http://purl.org/fidmark/ImageDescriptor",n="http://purl.org/fidmark/CircularBarcode",g="http://purl.org/fidmark/AP3PPoseComputation",f="http://purl.org/fidmark/PnPPoseComputation",h="http://purl.org/fidmark/ARPlatform",l="http://purl.org/fidmark/ARTag",m="http://purl.org/fidmark/Barcode2D",c="http://purl.org/fidmark/ARToolKit",u="http://purl.org/fidmark/Barcode",_="http://purl.org/fidmark/ActiveMarker",I="http://purl.org/fidmark/AprilTag",w="http://purl.org/fidmark/ArUco",v="http://purl.org/fidmark/PassiveMarker",k="http://purl.org/fidmark/Barcode1D",y="http://purl.org/fidmark/BinaryID",b="http://purl.org/fidmark/BullsEye",T="http://purl.org/fidmark/CALTag",S="http://purl.org/fidmark/CCC",C="http://purl.org/fidmark/CCTag",D="http://purl.org/fidmark/Chilitags",R="http://purl.org/fidmark/ChromaTag",O="http://purl.org/fidmark/Cybercode",P="http://purl.org/fidmark/EPnPPoseComputation",x="http://purl.org/fidmark/FourierTag",A="http://purl.org/fidmark/IPPEPoseComputation",G="http://purl.org/fidmark/InterSense",j="http://purl.org/fidmark/MarkerDetection",E="http://purl.org/fidmark/MarkerOrigin",M="http://purl.org/fidmark/MarkerPoseEstimation",N="http://purl.org/fidmark/MarkerlessPoseEstimation",U="http://purl.org/fidmark/MaxiCode",F="http://purl.org/fidmark/MultiRing",z="http://purl.org/fidmark/P3PPoseComputation",X="http://purl.org/fidmark/PiTag",L="http://purl.org/fidmark/PoseOutput",Q="http://purl.org/fidmark/QRCode",B="http://purl.org/fidmark/RuneTag",Z="http://purl.org/fidmark/SIFT",W="http://purl.org/fidmark/STag",V="http://purl.org/fidmark/TRIP",q="http://purl.org/fidmark/TopoTag",H="http://purl.org/fidmark/VisualCode",K="http://purl.org/fidmark/WhyCode",$="http://purl.org/fidmark/WhyCon",Y="http://purl.org/fidmark/reacTIVision",J="http://purl.org/fidmark/hasDictionary",tt="http://purl.org/fidmark/hasHeight",rt="http://purl.org/fidmark/hasImageDesciptor",et="http://purl.org/fidmark/hasMarker",ot="http://purl.org/fidmark/hasOrigin",it="http://purl.org/fidmark/hasWidth",at="http://purl.org/fidmark/isImageDescriptorOf",st="http://purl.org/fidmark/partOf",dt="http://purl.org/fidmark/asImage",pt="http://purl.org/fidmark/asNFT",nt="http://purl.org/fidmark/asPATT",gt="http://purl.org/fidmark/asZFT",ft="http://purl.org/fidmark/crc",ht="http://purl.org/fidmark/crowns",lt="http://purl.org/fidmark/dictionarySize",mt="http://purl.org/fidmark/maxIdentifiers",ct="http://purl.org/fidmark/hammingDistance",ut="http://purl.org/fidmark/markerBits",_t="http://purl.org/fidmark/markerCode",It="http://purl.org/fidmark/markerData",wt="http://purl.org/fidmark/markerIdentifier",vt="http://purl.org/fidmark/version",kt="http://purl.org/fidmark/color",yt="http://purl.org/fidmark/encoding",bt="http://purl.org/fidmark/opencvName",Tt="http://purl.org/fidmark/shape",St="http://purl.org/fidmark/supportedMarker",Ct="http://purl.org/fidmark/DICT_4X4_100",Dt="http://purl.org/fidmark/DICT_4X4_1000",Rt="http://purl.org/fidmark/DICT_4X4_50",Ot="http://purl.org/fidmark/DICT_5X5_100",Pt="http://purl.org/fidmark/DICT_5X5_1000",xt="http://purl.org/fidmark/DICT_5X5_250",At="http://purl.org/fidmark/DICT_5X5_50",Gt="http://purl.org/fidmark/DICT_6X6_100",jt="http://purl.org/fidmark/DICT_6X6_1000",Et="http://purl.org/fidmark/DICT_6X6_250",Mt="http://purl.org/fidmark/DICT_6X6_50",Nt="http://purl.org/fidmark/DICT_7X7_100",Ut="http://purl.org/fidmark/DICT_7X7_1000",Ft="http://purl.org/fidmark/DICT_7X7_250",zt="http://purl.org/fidmark/DICT_7X7_50",Xt="http://purl.org/fidmark/DICT_APRILTAG_16h5",Lt="http://purl.org/fidmark/DICT_APRILTAG_25h9",Qt="http://purl.org/fidmark/DICT_APRILTAG_36h10",Bt="http://purl.org/fidmark/DICT_APRILTAG_36h11",Zt="http://purl.org/fidmark/DICT_ARUCO_ORIGINAL",Wt="http://purl.org/fidmark/DICT_CHILLITAGS",Vt="http://purl.org/fidmark/DICT_MIP_36h12",qt="http://purl.org/fidmark/DICT_REACTIVISION_AMOEBA",Ht="http://purl.org/fidmark/DICT_REACTIVISION_YAMAARASHI",Kt="http://purl.org/fidmark/DICT_TOPOTAG_3X3",$t="http://purl.org/fidmark/DICT_TOPOTAG_4X4",Yt="http://purl.org/fidmark/DICT_TOPOTAG_5X5",Jt="http://purl.org/fidmark/OriginBottomLeft",tr="http://purl.org/fidmark/OriginBottomRight",rr="http://purl.org/fidmark/OriginCenter",er="http://purl.org/fidmark/OriginTopLeft",or="http://purl.org/fidmark/OriginTopRight",ir="http://purl.org/fidmark/",ar="fidmark",sr="https://w3id.org/omg#CurrentGeometryState",dr="https://w3id.org/omg#GeometryState",pr="https://w3id.org/omg#Geometry",nr="https://w3id.org/omg#GeometryContext",gr="https://w3id.org/omg#complementsGeometry",fr="https://w3id.org/omg#containsGeometryObject",hr="https://w3id.org/omg#containsPropertyState",lr="https://w3id.org/omg#hasComplexGeometryDescription",mr="https://w3id.org/omg#hasGeometry",cr="https://w3id.org/omg#hasGeometryContext",ur="https://w3id.org/omg#hasGeometryState",_r="https://w3id.org/omg#hasInferredPropertyState",Ir="https://w3id.org/omg#isExplicitlyDerivedFrom",wr="https://w3id.org/omg#isDerivedFromGeometry",vr="https://w3id.org/omg#isDerivedFromGeometryState",kr="https://w3id.org/omg#isImplicitlyDerivedFrom",yr="https://w3id.org/omg#isPartOfGeometry",br="https://w3id.org/omg#transformsGeometry",Tr="https://w3id.org/omg#hasReferencedGeometryId",Sr="https://w3id.org/omg#hasSimpleGeometryDescription",Cr="https://w3id.org/omg#",Dr="omg",Rr="https://w3id.org/fog#ReferencedContent",Or="https://w3id.org/fog#as3dmo",Pr="https://w3id.org/fog#asGeojson-ld",xr="https://w3id.org/fog#asGeomOntology",Ar="https://w3id.org/fog#asIfcowl",Gr="https://w3id.org/fog#asIfcowl_v2x3final",jr="https://w3id.org/fog#asIfcowl_v2x3tc1",Er="https://w3id.org/fog#asIfcowl_v2x4add1",Mr="https://w3id.org/fog#asIfcowl_v2x4add2",Nr="https://w3id.org/fog#asIfcowl_v2x4final",Ur="https://w3id.org/fog#asOntobrepOntology",Fr="https://w3id.org/fog#asOntostepOntology",zr="https://w3id.org/fog#hasReferencedContent",Xr="https://w3id.org/fog#asCollada",Lr="https://w3id.org/fog#asDwg",Qr="https://w3id.org/fog#asDwg_v2010",Br="https://w3id.org/fog#asDwg_v2013",Zr="https://w3id.org/fog#asDwg_v2018",Wr="https://w3id.org/fog#asE57",Vr="https://w3id.org/fog#asGeojson",qr="https://w3id.org/fog#asGeojson_v2008",Hr="https://w3id.org/fog#asGeojson_v2016",Kr="https://w3id.org/fog#asGltf",$r="https://w3id.org/fog#asGml",Yr="https://w3id.org/fog#asIfc",Jr="https://w3id.org/fog#asIfc_v2x3",te="https://w3id.org/fog#asIfc_v2x3-ifc",re="https://w3id.org/fog#asIfc_v2x3-ifcxml",ee="https://w3id.org/fog#asIfc_v2x3tc1",oe="https://w3id.org/fog#asIfc_v2x3tc1-ifc",ie="https://w3id.org/fog#asIfc_v2x3tc1-ifcxml",ae="https://w3id.org/fog#asIfc_v2x4",se="https://w3id.org/fog#asIfc_v2x4-ifc",de="https://w3id.org/fog#asIfc_v2x4-ifcxml",pe="https://w3id.org/fog#asIfc_v2x4add1",ne="https://w3id.org/fog#asIfc_v2x4add1-ifc",ge="https://w3id.org/fog#asIfc_v2x4add1-ifcxml",fe="https://w3id.org/fog#asIfc_v2x4add2",he="https://w3id.org/fog#asIfc_v2x4add2-ifc",le="https://w3id.org/fog#asIfc_v2x4add2-ifcxml",me="https://w3id.org/fog#asIges",ce="https://w3id.org/fog#asLas",ue="https://w3id.org/fog#asNexus",_e="https://w3id.org/fog#asObj",Ie="https://w3id.org/fog#asPcd",we="https://w3id.org/fog#asPly",ve="https://w3id.org/fog#asRevit",ke="https://w3id.org/fog#asRevit_v2017",ye="https://w3id.org/fog#asRevit_v2018",be="https://w3id.org/fog#asRevit_v2019",Te="https://w3id.org/fog#asRevit_v2020",Se="https://w3id.org/fog#asRhino",Ce="https://w3id.org/fog#asRhino_v5",De="https://w3id.org/fog#asRhino_v6",Re="https://w3id.org/fog#asSfa",Oe="https://w3id.org/fog#asSfa_v1",Pe="https://w3id.org/fog#asSfa_v1-wkt",xe="https://w3id.org/fog#asSfa_v2",Ae="https://w3id.org/fog#asSfa_v2-wkb",Ge="https://w3id.org/fog#asSfa_v2-wkt",je="https://w3id.org/fog#asShapefile",Ee="https://w3id.org/fog#asShapefile-dbf",Me="https://w3id.org/fog#asShapefile-prj",Ne="https://w3id.org/fog#asShapefile-shp",Ue="https://w3id.org/fog#asShapefile-shx",Fe="https://w3id.org/fog#asSketchUp",ze="https://w3id.org/fog#asSketchUp_v2017",Xe="https://w3id.org/fog#asSketchUp_v2018",Le="https://w3id.org/fog#asSketchUp_v2019",Qe="https://w3id.org/fog#asStep",Be="https://w3id.org/fog#asStep_ap214",Ze="https://w3id.org/fog#asStep_ap242",We="https://w3id.org/fog#asStl",Ve="https://w3id.org/fog#asSvg",qe="https://w3id.org/fog#asX3d",He="https://w3id.org/fog#hasIfcId",Ke="https://w3id.org/fog#hasIfcId-guid",$e="https://w3id.org/fog#hasObjId",Ye="https://w3id.org/fog#hasObjId-group",Je="https://w3id.org/fog#hasObjId-object",to="https://w3id.org/fog#hasRevitId",ro="https://w3id.org/fog#hasRevitId-element",eo="https://w3id.org/fog#hasRevitId-uniqueId",oo="https://w3id.org/fog#hasRhinoId",io="https://w3id.org/fog#hasRhinoId-object",ao="https://w3id.org/fog#",so="fog",po=o,no=i,go=a},8494:(t,r,e)=>{"use strict";e.d(r,{X:()=>f});e(560);var o,i=e(4283),a=e(7582),s=e(336),d=e(6551);let p=o=class{static fromURI(t){const r=new o;return r.rdf={uri:t},r}};p=o=(0,a.gn)([(0,d.SerializableObject)({rdf:{type:s.NQ.MarkerOrigin}})],p);var n=e(543),g=e(6086);const f=(0,g.Q_)("marker",{state:()=>({rdf:void 0,markers:[],objects:[]}),getters:{},actions:{initialize(){return new Promise(((t,r)=>{const e="http://example.org/",o=new i.n3;o.uid="marker-1",o.dictionary=i.Vz.fromURI(s.NQ.DICT_MIP_36h12),o.identifier=10,o.origin=p.fromURI(s.NQ.OriginCenter),o.height=150,o.width=150;const a=new i.n3;a.uid="marker-2",a.dictionary=i.Vz.fromURI(s.NQ.DICT_ARUCO_ORIGINAL),a.identifier=94,a.origin=p.fromURI(s.NQ.OriginCenter),a.height=100,a.width=100;const g=new i.nd("earth");g.addRelativePosition(new d.Relative3DPosition(o.uid,0,0,100,d.LengthUnit.MILLIMETER)),g.geometry=new i.ZX,g.geometry.asGltf="https://raw.githubusercontent.com/microsoft/mixed-reality-extension-sdk-samples/master/samples/solar-system/public/assets/earth.gltf";const f=new i.nd("jupiter");f.addRelativePosition(new d.Relative3DPosition(a.uid,0,0,.5,d.LengthUnit.METER)),f.geometry=new i.ZX,f.geometry.asGltf="https://raw.githubusercontent.com/microsoft/mixed-reality-extension-sdk-samples/master/samples/solar-system/public/assets/jupiter.gltf";const h=new n.Store;h.addQuads(n.RDFSerializer.serializeToQuads(o,e)),h.addQuads(n.RDFSerializer.serializeToQuads(g,e)),h.addQuads(n.RDFSerializer.serializeToQuads(a,e)),h.addQuads(n.RDFSerializer.serializeToQuads(f,e)),n.RDFSerializer.stringify(h,{prettyPrint:!0,baseUri:"http://example.org/",prefixes:{fidmark:"http://purl.org/fidmark/",example:"http://example.org/",[s.Af._PREFIX]:s.Af._BASE,[s.NI._PREFIX]:s.NI._BASE}}).then((t=>(this.rdf=t,this.fromRDF(this.rdf)))).then((()=>{t()})).catch(r)}))},fromRDF(t){return new Promise(((r,e)=>{const o=new n.Parser,a=o.parse(t),s=new n.Store(a),p=new n.SPARQLDataDriver(d.DataObject,{sources:[s],engine:n.DefaultEngine}),g="\n          PREFIX fidmark: <http://purl.org/fidmark/>\n          PREFIX ssn: <http://www.w3.org/ns/ssn/>\n          PREFIX sosa: <http://www.w3.org/ns/sosa/>\n          PREFIX omg: <https://w3id.org/omg#>\n\n          SELECT ?object {\n              { ?object a fidmark:ArUco }\n              UNION\n              { \n                ?object a sosa:FeatureOfInterest .\n                ?object omg:hasGeometry ?geometry .\n              }\n          }";p.queryBindings(g).then((t=>{this.markers=[],this.objects=[],t.forEach((t=>{const r=t.get("object").id,e=n.RDFSerializer.deserializeFromStore(n.DataFactory.namedNode(r),s);e instanceof i.hx?this.markers.push(e):e instanceof i.nd&&(e.geometry.load(),this.objects.push(e))})),console.log("Virtual objects",this.objects),r()})).catch(e)}))}}})},6551:t=>{"use strict";t.exports=OpenHPS.core},543:t=>{"use strict";t.exports=OpenHPS.rdf},6177:t=>{"use strict";t.exports=OpenHPS.video},2904:t=>{"use strict";t.exports=void 0}},r={};function e(o){var i=r[o];if(void 0!==i)return i.exports;var a=r[o]={exports:{}};return t[o].call(a.exports,a,a.exports,e),a.exports}e.m=t,(()=>{var t=[];e.O=(r,o,i,a)=>{if(!o){var s=1/0;for(g=0;g<t.length;g++){for(var[o,i,a]=t[g],d=!0,p=0;p<o.length;p++)(!1&a||s>=a)&&Object.keys(e.O).every((t=>e.O[t](o[p])))?o.splice(p--,1):(d=!1,a<s&&(s=a));if(d){t.splice(g--,1);var n=i();void 0!==n&&(r=n)}}return r}a=a||0;for(var g=t.length;g>0&&t[g-1][2]>a;g--)t[g]=t[g-1];t[g]=[o,i,a]}})(),(()=>{e.d=(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})}})(),(()=>{e.f={},e.e=t=>Promise.all(Object.keys(e.f).reduce(((r,o)=>(e.f[o](t,r),r)),[]))})(),(()=>{e.u=t=>"js/"+t+"."+{74:"fa8ded31",78:"9f25dd45",158:"cc43a049",159:"cd32b6fb",261:"e09b6c25",338:"b625301a",491:"e256a3ac",544:"550cf213",576:"15fd608d",753:"263bd1c6",775:"71ee8e65",786:"9ca65ce6",789:"629dd689",980:"5dc81912"}[t]+".js"})(),(()=>{e.miniCssF=t=>"css/"+t+"."+{159:"00add67b",491:"d8c23228"}[t]+".css"})(),(()=>{e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r)})(),(()=>{var t={},r="eswc2024:";e.l=(o,i,a,s)=>{if(t[o])t[o].push(i);else{var d,p;if(void 0!==a)for(var n=document.getElementsByTagName("script"),g=0;g<n.length;g++){var f=n[g];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==r+a){d=f;break}}d||(p=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,e.nc&&d.setAttribute("nonce",e.nc),d.setAttribute("data-webpack",r+a),d.src=o),t[o]=[i];var h=(r,e)=>{d.onerror=d.onload=null,clearTimeout(l);var i=t[o];if(delete t[o],d.parentNode&&d.parentNode.removeChild(d),i&&i.forEach((t=>t(e))),r)return r(e)},l=setTimeout(h.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=h.bind(null,d.onerror),d.onload=h.bind(null,d.onload),p&&document.head.appendChild(d)}}})(),(()=>{e.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{e.p="/w/FidMark-website/application/"})(),(()=>{if("undefined"!==typeof document){var t=(t,r,e,o,i)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=e=>{if(a.onerror=a.onload=null,"load"===e.type)o();else{var s=e&&("load"===e.type?"missing":e.type),d=e&&e.target&&e.target.href||r,p=new Error("Loading CSS chunk "+t+" failed.\n("+d+")");p.code="CSS_CHUNK_LOAD_FAILED",p.type=s,p.request=d,a.parentNode&&a.parentNode.removeChild(a),i(p)}};return a.onerror=a.onload=s,a.href=r,e?e.parentNode.insertBefore(a,e.nextSibling):document.head.appendChild(a),a},r=(t,r)=>{for(var e=document.getElementsByTagName("link"),o=0;o<e.length;o++){var i=e[o],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===t||a===r))return i}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){i=s[o],a=i.getAttribute("data-href");if(a===t||a===r)return i}},o=o=>new Promise(((i,a)=>{var s=e.miniCssF(o),d=e.p+s;if(r(s,d))return i();t(o,d,null,i,a)})),i={143:0};e.f.miniCss=(t,r)=>{var e={159:1,491:1};i[t]?r.push(i[t]):0!==i[t]&&e[t]&&r.push(i[t]=o(t).then((()=>{i[t]=0}),(r=>{throw delete i[t],r})))}}})(),(()=>{var t={143:0};e.f.j=(r,o)=>{var i=e.o(t,r)?t[r]:void 0;if(0!==i)if(i)o.push(i[2]);else{var a=new Promise(((e,o)=>i=t[r]=[e,o]));o.push(i[2]=a);var s=e.p+e.u(r),d=new Error,p=o=>{if(e.o(t,r)&&(i=t[r],0!==i&&(t[r]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;d.message="Loading chunk "+r+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,i[1](d)}};e.l(s,p,"chunk-"+r,r)}},e.O.j=r=>0===t[r];var r=(r,o)=>{var i,a,[s,d,p]=o,n=0;if(s.some((r=>0!==t[r]))){for(i in d)e.o(d,i)&&(e.m[i]=d[i]);if(p)var g=p(e)}for(r&&r(o);n<s.length;n++)a=s[n],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(g)},o=globalThis["webpackChunkeswc2024"]=globalThis["webpackChunkeswc2024"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=e.O(void 0,[998],(()=>e(7461)));o=e.O(o)})();
//# sourceMappingURL=app.603b6a8f.js.map
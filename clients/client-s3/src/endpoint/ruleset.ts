// @ts-nocheck
// generated code, do not edit
import { RuleSetObject } from "@smithy/types";

/* This file is compressed. Log this object
   or see "smithy.rules#endpointRuleSet"
   in codegen/sdk-codegen/aws-models/s3.json */

const ci="required",
cj="type",
ck="conditions",
cl="fn",
cm="argv",
cn="ref",
co="assign",
cp="url",
cq="properties",
cr="backend",
cs="authSchemes",
ct="disableDoubleEncoding",
cu="signingName",
cv="signingRegion",
cw="headers",
cx="signingRegionSet";
const a=6,
b=false,
c=true,
d="isSet",
e="booleanEquals",
f="error",
g="aws.partition",
h="stringEquals",
i="getAttr",
j="name",
k="substring",
l="bucketSuffix",
m="parseURL",
n="{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}",
o="endpoint",
p="tree",
q="aws.isVirtualHostableS3Bucket",
r="{url#scheme}://{Bucket}.{url#authority}{url#path}",
s="not",
t="{url#scheme}://{url#authority}{url#path}",
u="hardwareType",
v="regionPrefix",
w="bucketAliasSuffix",
x="outpostId",
y="isValidHostLabel",
z="sigv4a",
A="s3-outposts",
B="s3",
C="{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}",
D="https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}",
E="https://{Bucket}.s3.{partitionResult#dnsSuffix}",
F="aws.parseArn",
G="bucketArn",
H="arnType",
I="",
J="s3-object-lambda",
K="accesspoint",
L="accessPointName",
M="{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}",
N="mrapPartition",
O="outpostType",
P="arnPrefix",
Q="{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}",
R="https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
S="https://s3.{partitionResult#dnsSuffix}",
T={[ci]:false,[cj]:"String"},
U={[ci]:true,"default":false,[cj]:"Boolean"},
V={[ci]:false,[cj]:"Boolean"},
W={[cl]:e,[cm]:[{[cn]:"Accelerate"},true]},
X={[cl]:e,[cm]:[{[cn]:"UseFIPS"},true]},
Y={[cl]:e,[cm]:[{[cn]:"UseDualStack"},true]},
Z={[cl]:d,[cm]:[{[cn]:"Endpoint"}]},
aa={[cl]:g,[cm]:[{[cn]:"Region"}],[co]:"partitionResult"},
ab={[cl]:h,[cm]:[{[cl]:i,[cm]:[{[cn]:"partitionResult"},j]},"aws-cn"]},
ac={[cl]:d,[cm]:[{[cn]:"Bucket"}]},
ad={[cn]:"Bucket"},
ae={[cl]:m,[cm]:[{[cn]:"Endpoint"}],[co]:"url"},
af={[cl]:e,[cm]:[{[cl]:i,[cm]:[{[cn]:"url"},"isIp"]},true]},
ag={[cn]:"url"},
ah={[cl]:"uriEncode",[cm]:[ad],[co]:"uri_encoded_bucket"},
ai={[cr]:"S3Express",[cs]:[{[ct]:true,[j]:"sigv4",[cu]:"s3express",[cv]:"{Region}"}]},
aj={},
ak={[cl]:q,[cm]:[ad,false]},
al={[f]:"S3Express bucket name is not a valid virtual hostable name.",[cj]:f},
am={[cr]:"S3Express",[cs]:[{[ct]:true,[j]:"sigv4-s3express",[cu]:"s3express",[cv]:"{Region}"}]},
an={[cl]:d,[cm]:[{[cn]:"UseS3ExpressControlEndpoint"}]},
ao={[cl]:e,[cm]:[{[cn]:"UseS3ExpressControlEndpoint"},true]},
ap={[cl]:s,[cm]:[Z]},
aq={[f]:"Unrecognized S3Express bucket name format.",[cj]:f},
ar={[cl]:s,[cm]:[ac]},
as={[cn]:u},
at={[ck]:[ap],[f]:"Expected a endpoint to be specified but no endpoint was found",[cj]:f},
au={[cs]:[{[ct]:true,[j]:z,[cu]:A,[cx]:["*"]},{[ct]:true,[j]:"sigv4",[cu]:A,[cv]:"{Region}"}]},
av={[cl]:e,[cm]:[{[cn]:"ForcePathStyle"},false]},
aw={[cn]:"ForcePathStyle"},
ax={[cl]:e,[cm]:[{[cn]:"Accelerate"},false]},
ay={[cl]:h,[cm]:[{[cn]:"Region"},"aws-global"]},
az={[cs]:[{[ct]:true,[j]:"sigv4",[cu]:B,[cv]:"us-east-1"}]},
aA={[cl]:s,[cm]:[ay]},
aB={[cl]:e,[cm]:[{[cn]:"UseGlobalEndpoint"},true]},
aC={[cp]:"https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",[cq]:{[cs]:[{[ct]:true,[j]:"sigv4",[cu]:B,[cv]:"{Region}"}]},[cw]:{}},
aD={[cs]:[{[ct]:true,[j]:"sigv4",[cu]:B,[cv]:"{Region}"}]},
aE={[cl]:e,[cm]:[{[cn]:"UseGlobalEndpoint"},false]},
aF={[cl]:e,[cm]:[{[cn]:"UseDualStack"},false]},
aG={[cp]:"https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}",[cq]:aD,[cw]:{}},
aH={[cl]:e,[cm]:[{[cn]:"UseFIPS"},false]},
aI={[cp]:"https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}",[cq]:aD,[cw]:{}},
aJ={[cp]:"https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}",[cq]:aD,[cw]:{}},
aK={[cl]:e,[cm]:[{[cl]:i,[cm]:[ag,"isIp"]},false]},
aL={[cp]:C,[cq]:aD,[cw]:{}},
aM={[cp]:r,[cq]:aD,[cw]:{}},
aN={[o]:aM,[cj]:o},
aO={[cp]:D,[cq]:aD,[cw]:{}},
aP={[cp]:"https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}",[cq]:aD,[cw]:{}},
aQ={[f]:"Invalid region: region was not a valid DNS name.",[cj]:f},
aR={[cn]:G},
aS={[cn]:H},
aT={[cl]:i,[cm]:[aR,"service"]},
aU={[cn]:L},
aV={[ck]:[Y],[f]:"S3 Object Lambda does not support Dual-stack",[cj]:f},
aW={[ck]:[W],[f]:"S3 Object Lambda does not support S3 Accelerate",[cj]:f},
aX={[ck]:[{[cl]:d,[cm]:[{[cn]:"DisableAccessPoints"}]},{[cl]:e,[cm]:[{[cn]:"DisableAccessPoints"},true]}],[f]:"Access points are not supported for this operation",[cj]:f},
aY={[ck]:[{[cl]:d,[cm]:[{[cn]:"UseArnRegion"}]},{[cl]:e,[cm]:[{[cn]:"UseArnRegion"},false]},{[cl]:s,[cm]:[{[cl]:h,[cm]:[{[cl]:i,[cm]:[aR,"region"]},"{Region}"]}]}],[f]:"Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",[cj]:f},
aZ={[cl]:i,[cm]:[{[cn]:"bucketPartition"},j]},
ba={[cl]:i,[cm]:[aR,"accountId"]},
bb={[cs]:[{[ct]:true,[j]:"sigv4",[cu]:J,[cv]:"{bucketArn#region}"}]},
bc={[f]:"Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`",[cj]:f},
bd={[f]:"Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`",[cj]:f},
be={[f]:"Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)",[cj]:f},
bf={[f]:"Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`",[cj]:f},
bg={[f]:"Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.",[cj]:f},
bh={[f]:"Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided",[cj]:f},
bi={[cs]:[{[ct]:true,[j]:"sigv4",[cu]:B,[cv]:"{bucketArn#region}"}]},
bj={[cs]:[{[ct]:true,[j]:z,[cu]:A,[cx]:["*"]},{[ct]:true,[j]:"sigv4",[cu]:A,[cv]:"{bucketArn#region}"}]},
bk={[cl]:F,[cm]:[ad]},
bl={[cp]:"https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[cq]:aD,[cw]:{}},
bm={[cp]:"https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[cq]:aD,[cw]:{}},
bn={[cp]:"https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[cq]:aD,[cw]:{}},
bo={[cp]:Q,[cq]:aD,[cw]:{}},
bp={[cp]:"https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[cq]:aD,[cw]:{}},
bq={[cn]:"UseObjectLambdaEndpoint"},
br={[cs]:[{[ct]:true,[j]:"sigv4",[cu]:J,[cv]:"{Region}"}]},
bs={[cp]:"https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",[cq]:aD,[cw]:{}},
bt={[cp]:"https://s3-fips.{Region}.{partitionResult#dnsSuffix}",[cq]:aD,[cw]:{}},
bu={[cp]:"https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}",[cq]:aD,[cw]:{}},
bv={[cp]:t,[cq]:aD,[cw]:{}},
bw={[cp]:"https://s3.{Region}.{partitionResult#dnsSuffix}",[cq]:aD,[cw]:{}},
bx=[{[cn]:"Region"}],
by=[{[cn]:"Endpoint"}],
bz=[ad],
bA=[Y],
bB=[W],
bC=[Z,ae],
bD=[{[cl]:d,[cm]:[{[cn]:"DisableS3ExpressSessionAuth"}]},{[cl]:e,[cm]:[{[cn]:"DisableS3ExpressSessionAuth"},true]}],
bE=[af],
bF=[ah],
bG=[ak],
bH=[X],
bI=[{[cl]:k,[cm]:[ad,6,14,true],[co]:"s3expressAvailabilityZoneId"},{[cl]:k,[cm]:[ad,14,16,true],[co]:"s3expressAvailabilityZoneDelim"},{[cl]:h,[cm]:[{[cn]:"s3expressAvailabilityZoneDelim"},"--"]}],
bJ=[{[ck]:[X],[o]:{[cp]:"https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",[cq]:ai,[cw]:{}},[cj]:o},{[o]:{[cp]:"https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",[cq]:ai,[cw]:{}},[cj]:o}],
bK=[{[cl]:k,[cm]:[ad,6,15,true],[co]:"s3expressAvailabilityZoneId"},{[cl]:k,[cm]:[ad,15,17,true],[co]:"s3expressAvailabilityZoneDelim"},{[cl]:h,[cm]:[{[cn]:"s3expressAvailabilityZoneDelim"},"--"]}],
bL=[{[cl]:k,[cm]:[ad,6,19,true],[co]:"s3expressAvailabilityZoneId"},{[cl]:k,[cm]:[ad,19,21,true],[co]:"s3expressAvailabilityZoneDelim"},{[cl]:h,[cm]:[{[cn]:"s3expressAvailabilityZoneDelim"},"--"]}],
bM=[{[cl]:k,[cm]:[ad,6,20,true],[co]:"s3expressAvailabilityZoneId"},{[cl]:k,[cm]:[ad,20,22,true],[co]:"s3expressAvailabilityZoneDelim"},{[cl]:h,[cm]:[{[cn]:"s3expressAvailabilityZoneDelim"},"--"]}],
bN=[{[cl]:k,[cm]:[ad,6,26,true],[co]:"s3expressAvailabilityZoneId"},{[cl]:k,[cm]:[ad,26,28,true],[co]:"s3expressAvailabilityZoneDelim"},{[cl]:h,[cm]:[{[cn]:"s3expressAvailabilityZoneDelim"},"--"]}],
bO=[{[ck]:[X],[o]:{[cp]:"https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",[cq]:am,[cw]:{}},[cj]:o},{[o]:{[cp]:"https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.amazonaws.com",[cq]:am,[cw]:{}},[cj]:o}],
bP=[ac],
bQ=[{[cl]:y,[cm]:[{[cn]:x},false]}],
bR=[{[cl]:h,[cm]:[{[cn]:v},"beta"]}],
bS=["*"],
bT=[aa],
bU=[{[cl]:y,[cm]:[{[cn]:"Region"},false]}],
bV=[{[cl]:h,[cm]:[{[cn]:"Region"},"us-east-1"]}],
bW=[{[cl]:h,[cm]:[aS,K]}],
bX=[{[cl]:i,[cm]:[aR,"resourceId[1]"],[co]:L},{[cl]:s,[cm]:[{[cl]:h,[cm]:[aU,I]}]}],
bY=[aR,"resourceId[1]"],
bZ=[{[cl]:s,[cm]:[{[cl]:h,[cm]:[{[cl]:i,[cm]:[aR,"region"]},I]}]}],
ca=[{[cl]:s,[cm]:[{[cl]:d,[cm]:[{[cl]:i,[cm]:[aR,"resourceId[2]"]}]}]}],
cb=[aR,"resourceId[2]"],
cc=[{[cl]:g,[cm]:[{[cl]:i,[cm]:[aR,"region"]}],[co]:"bucketPartition"}],
cd=[{[cl]:h,[cm]:[aZ,{[cl]:i,[cm]:[{[cn]:"partitionResult"},j]}]}],
ce=[{[cl]:y,[cm]:[{[cl]:i,[cm]:[aR,"region"]},true]}],
cf=[{[cl]:y,[cm]:[ba,false]}],
cg=[{[cl]:y,[cm]:[aU,false]}],
ch=[{[cl]:y,[cm]:[{[cn]:"Region"},true]}];
const _data={version:"1.0",parameters:{Bucket:T,Region:T,UseFIPS:U,UseDualStack:U,Endpoint:T,ForcePathStyle:U,Accelerate:U,UseGlobalEndpoint:U,UseObjectLambdaEndpoint:V,Key:T,Prefix:T,CopySource:T,DisableAccessPoints:V,DisableMultiRegionAccessPoints:U,UseArnRegion:V,UseS3ExpressControlEndpoint:V,DisableS3ExpressSessionAuth:V},rules:[{[ck]:[{[cl]:d,[cm]:bx}],rules:[{[ck]:[W,X],error:"Accelerate cannot be used with FIPS",[cj]:f},{[ck]:[Y,Z],error:"Cannot set dual-stack in combination with a custom endpoint.",[cj]:f},{[ck]:[Z,X],error:"A custom endpoint cannot be combined with FIPS",[cj]:f},{[ck]:[Z,W],error:"A custom endpoint cannot be combined with S3 Accelerate",[cj]:f},{[ck]:[X,aa,ab],error:"Partition does not support FIPS",[cj]:f},{[ck]:[ac,{[cl]:k,[cm]:[ad,0,a,c],[co]:l},{[cl]:h,[cm]:[{[cn]:l},"--x-s3"]}],rules:[{[ck]:bA,error:"S3Express does not support Dual-stack.",[cj]:f},{[ck]:bB,error:"S3Express does not support S3 Accelerate.",[cj]:f},{[ck]:bC,rules:[{[ck]:bD,rules:[{[ck]:bE,rules:[{[ck]:bF,rules:[{endpoint:{[cp]:n,[cq]:ai,[cw]:aj},[cj]:o}],[cj]:p}],[cj]:p},{[ck]:bG,rules:[{endpoint:{[cp]:r,[cq]:ai,[cw]:aj},[cj]:o}],[cj]:p},al],[cj]:p},{[ck]:bE,rules:[{[ck]:bF,rules:[{endpoint:{[cp]:n,[cq]:am,[cw]:aj},[cj]:o}],[cj]:p}],[cj]:p},{[ck]:bG,rules:[{endpoint:{[cp]:r,[cq]:am,[cw]:aj},[cj]:o}],[cj]:p},al],[cj]:p},{[ck]:[an,ao],rules:[{[ck]:[ah,ap],rules:[{[ck]:bH,endpoint:{[cp]:"https://s3express-control-fips.{Region}.amazonaws.com/{uri_encoded_bucket}",[cq]:ai,[cw]:aj},[cj]:o},{endpoint:{[cp]:"https://s3express-control.{Region}.amazonaws.com/{uri_encoded_bucket}",[cq]:ai,[cw]:aj},[cj]:o}],[cj]:p}],[cj]:p},{[ck]:bG,rules:[{[ck]:bD,rules:[{[ck]:bI,rules:bJ,[cj]:p},{[ck]:bK,rules:bJ,[cj]:p},{[ck]:bL,rules:bJ,[cj]:p},{[ck]:bM,rules:bJ,[cj]:p},{[ck]:bN,rules:bJ,[cj]:p},aq],[cj]:p},{[ck]:bI,rules:bO,[cj]:p},{[ck]:bK,rules:bO,[cj]:p},{[ck]:bL,rules:bO,[cj]:p},{[ck]:bM,rules:bO,[cj]:p},{[ck]:bN,rules:bO,[cj]:p},aq],[cj]:p},al],[cj]:p},{[ck]:[ar,an,ao],rules:[{[ck]:bC,endpoint:{[cp]:t,[cq]:ai,[cw]:aj},[cj]:o},{[ck]:bH,endpoint:{[cp]:"https://s3express-control-fips.{Region}.amazonaws.com",[cq]:ai,[cw]:aj},[cj]:o},{endpoint:{[cp]:"https://s3express-control.{Region}.amazonaws.com",[cq]:ai,[cw]:aj},[cj]:o}],[cj]:p},{[ck]:[ac,{[cl]:k,[cm]:[ad,49,50,c],[co]:u},{[cl]:k,[cm]:[ad,8,12,c],[co]:v},{[cl]:k,[cm]:[ad,0,7,c],[co]:w},{[cl]:k,[cm]:[ad,32,49,c],[co]:x},{[cl]:g,[cm]:bx,[co]:"regionPartition"},{[cl]:h,[cm]:[{[cn]:w},"--op-s3"]}],rules:[{[ck]:bQ,rules:[{[ck]:[{[cl]:h,[cm]:[as,"e"]}],rules:[{[ck]:bR,rules:[at,{[ck]:bC,endpoint:{[cp]:"https://{Bucket}.ec2.{url#authority}",[cq]:au,[cw]:aj},[cj]:o}],[cj]:p},{endpoint:{[cp]:"https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}",[cq]:au,[cw]:aj},[cj]:o}],[cj]:p},{[ck]:[{[cl]:h,[cm]:[as,"o"]}],rules:[{[ck]:bR,rules:[at,{[ck]:bC,endpoint:{[cp]:"https://{Bucket}.op-{outpostId}.{url#authority}",[cq]:au,[cw]:aj},[cj]:o}],[cj]:p},{endpoint:{[cp]:"https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}",[cq]:au,[cw]:aj},[cj]:o}],[cj]:p},{error:"Unrecognized hardware type: \"Expected hardware type o or e but got {hardwareType}\"",[cj]:f}],[cj]:p},{error:"Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.",[cj]:f}],[cj]:p},{[ck]:bP,rules:[{[ck]:[Z,{[cl]:s,[cm]:[{[cl]:d,[cm]:[{[cl]:m,[cm]:by}]}]}],error:"Custom endpoint `{Endpoint}` was not a valid URI",[cj]:f},{[ck]:[av,ak],rules:[{[ck]:bT,rules:[{[ck]:bU,rules:[{[ck]:[W,ab],error:"S3 Accelerate cannot be used in this region",[cj]:f},{[ck]:[Y,X,ax,ap,ay],endpoint:{[cp]:"https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[Y,X,ax,ap,aA,aB],rules:[{endpoint:aC,[cj]:o}],[cj]:p},{[ck]:[Y,X,ax,ap,aA,aE],endpoint:aC,[cj]:o},{[ck]:[aF,X,ax,ap,ay],endpoint:{[cp]:"https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aF,X,ax,ap,aA,aB],rules:[{endpoint:aG,[cj]:o}],[cj]:p},{[ck]:[aF,X,ax,ap,aA,aE],endpoint:aG,[cj]:o},{[ck]:[Y,aH,W,ap,ay],endpoint:{[cp]:"https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[Y,aH,W,ap,aA,aB],rules:[{endpoint:aI,[cj]:o}],[cj]:p},{[ck]:[Y,aH,W,ap,aA,aE],endpoint:aI,[cj]:o},{[ck]:[Y,aH,ax,ap,ay],endpoint:{[cp]:"https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[Y,aH,ax,ap,aA,aB],rules:[{endpoint:aJ,[cj]:o}],[cj]:p},{[ck]:[Y,aH,ax,ap,aA,aE],endpoint:aJ,[cj]:o},{[ck]:[aF,aH,ax,Z,ae,af,ay],endpoint:{[cp]:C,[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aF,aH,ax,Z,ae,aK,ay],endpoint:{[cp]:r,[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aF,aH,ax,Z,ae,af,aA,aB],rules:[{[ck]:bV,endpoint:aL,[cj]:o},{endpoint:aL,[cj]:o}],[cj]:p},{[ck]:[aF,aH,ax,Z,ae,aK,aA,aB],rules:[{[ck]:bV,endpoint:aM,[cj]:o},aN],[cj]:p},{[ck]:[aF,aH,ax,Z,ae,af,aA,aE],endpoint:aL,[cj]:o},{[ck]:[aF,aH,ax,Z,ae,aK,aA,aE],endpoint:aM,[cj]:o},{[ck]:[aF,aH,W,ap,ay],endpoint:{[cp]:D,[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aF,aH,W,ap,aA,aB],rules:[{[ck]:bV,endpoint:aO,[cj]:o},{endpoint:aO,[cj]:o}],[cj]:p},{[ck]:[aF,aH,W,ap,aA,aE],endpoint:aO,[cj]:o},{[ck]:[aF,aH,ax,ap,ay],endpoint:{[cp]:E,[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aF,aH,ax,ap,aA,aB],rules:[{[ck]:bV,endpoint:{[cp]:E,[cq]:aD,[cw]:aj},[cj]:o},{endpoint:aP,[cj]:o}],[cj]:p},{[ck]:[aF,aH,ax,ap,aA,aE],endpoint:aP,[cj]:o}],[cj]:p},aQ],[cj]:p}],[cj]:p},{[ck]:[Z,ae,{[cl]:h,[cm]:[{[cl]:i,[cm]:[ag,"scheme"]},"http"]},{[cl]:q,[cm]:[ad,c]},av,aH,aF,ax],rules:[{[ck]:bT,rules:[{[ck]:bU,rules:[aN],[cj]:p},aQ],[cj]:p}],[cj]:p},{[ck]:[av,{[cl]:F,[cm]:bz,[co]:G}],rules:[{[ck]:[{[cl]:i,[cm]:[aR,"resourceId[0]"],[co]:H},{[cl]:s,[cm]:[{[cl]:h,[cm]:[aS,I]}]}],rules:[{[ck]:[{[cl]:h,[cm]:[aT,J]}],rules:[{[ck]:bW,rules:[{[ck]:bX,rules:[aV,aW,{[ck]:bZ,rules:[aX,{[ck]:ca,rules:[aY,{[ck]:cc,rules:[{[ck]:bT,rules:[{[ck]:cd,rules:[{[ck]:ce,rules:[{[ck]:[{[cl]:h,[cm]:[ba,I]}],error:"Invalid ARN: Missing account id",[cj]:f},{[ck]:cf,rules:[{[ck]:cg,rules:[{[ck]:bC,endpoint:{[cp]:M,[cq]:bb,[cw]:aj},[cj]:o},{[ck]:bH,endpoint:{[cp]:"https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",[cq]:bb,[cw]:aj},[cj]:o},{endpoint:{[cp]:"https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}",[cq]:bb,[cw]:aj},[cj]:o}],[cj]:p},bc],[cj]:p},bd],[cj]:p},be],[cj]:p},bf],[cj]:p}],[cj]:p}],[cj]:p},bg],[cj]:p},{error:"Invalid ARN: bucket ARN is missing a region",[cj]:f}],[cj]:p},bh],[cj]:p},{error:"Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`",[cj]:f}],[cj]:p},{[ck]:bW,rules:[{[ck]:bX,rules:[{[ck]:bZ,rules:[{[ck]:bW,rules:[{[ck]:bZ,rules:[aX,{[ck]:ca,rules:[aY,{[ck]:cc,rules:[{[ck]:bT,rules:[{[ck]:[{[cl]:h,[cm]:[aZ,"{partitionResult#name}"]}],rules:[{[ck]:ce,rules:[{[ck]:[{[cl]:h,[cm]:[aT,B]}],rules:[{[ck]:cf,rules:[{[ck]:cg,rules:[{[ck]:bB,error:"Access Points do not support S3 Accelerate",[cj]:f},{[ck]:[X,Y],endpoint:{[cp]:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",[cq]:bi,[cw]:aj},[cj]:o},{[ck]:[X,aF],endpoint:{[cp]:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",[cq]:bi,[cw]:aj},[cj]:o},{[ck]:[aH,Y],endpoint:{[cp]:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",[cq]:bi,[cw]:aj},[cj]:o},{[ck]:[aH,aF,Z,ae],endpoint:{[cp]:M,[cq]:bi,[cw]:aj},[cj]:o},{[ck]:[aH,aF],endpoint:{[cp]:"https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}",[cq]:bi,[cw]:aj},[cj]:o}],[cj]:p},bc],[cj]:p},bd],[cj]:p},{error:"Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}",[cj]:f}],[cj]:p},be],[cj]:p},bf],[cj]:p}],[cj]:p}],[cj]:p},bg],[cj]:p}],[cj]:p}],[cj]:p},{[ck]:[{[cl]:y,[cm]:[aU,c]}],rules:[{[ck]:bA,error:"S3 MRAP does not support dual-stack",[cj]:f},{[ck]:bH,error:"S3 MRAP does not support FIPS",[cj]:f},{[ck]:bB,error:"S3 MRAP does not support S3 Accelerate",[cj]:f},{[ck]:[{[cl]:e,[cm]:[{[cn]:"DisableMultiRegionAccessPoints"},c]}],error:"Invalid configuration: Multi-Region Access Point ARNs are disabled.",[cj]:f},{[ck]:[{[cl]:g,[cm]:bx,[co]:N}],rules:[{[ck]:[{[cl]:h,[cm]:[{[cl]:i,[cm]:[{[cn]:N},j]},{[cl]:i,[cm]:[aR,"partition"]}]}],rules:[{endpoint:{[cp]:"https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}",[cq]:{[cs]:[{[ct]:c,name:z,[cu]:B,[cx]:bS}]},[cw]:aj},[cj]:o}],[cj]:p},{error:"Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`",[cj]:f}],[cj]:p}],[cj]:p},{error:"Invalid Access Point Name",[cj]:f}],[cj]:p},bh],[cj]:p},{[ck]:[{[cl]:h,[cm]:[aT,A]}],rules:[{[ck]:bA,error:"S3 Outposts does not support Dual-stack",[cj]:f},{[ck]:bH,error:"S3 Outposts does not support FIPS",[cj]:f},{[ck]:bB,error:"S3 Outposts does not support S3 Accelerate",[cj]:f},{[ck]:[{[cl]:d,[cm]:[{[cl]:i,[cm]:[aR,"resourceId[4]"]}]}],error:"Invalid Arn: Outpost Access Point ARN contains sub resources",[cj]:f},{[ck]:[{[cl]:i,[cm]:bY,[co]:x}],rules:[{[ck]:bQ,rules:[aY,{[ck]:cc,rules:[{[ck]:bT,rules:[{[ck]:cd,rules:[{[ck]:ce,rules:[{[ck]:cf,rules:[{[ck]:[{[cl]:i,[cm]:cb,[co]:O}],rules:[{[ck]:[{[cl]:i,[cm]:[aR,"resourceId[3]"],[co]:L}],rules:[{[ck]:[{[cl]:h,[cm]:[{[cn]:O},K]}],rules:[{[ck]:bC,endpoint:{[cp]:"https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}",[cq]:bj,[cw]:aj},[cj]:o},{endpoint:{[cp]:"https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}",[cq]:bj,[cw]:aj},[cj]:o}],[cj]:p},{error:"Expected an outpost type `accesspoint`, found {outpostType}",[cj]:f}],[cj]:p},{error:"Invalid ARN: expected an access point name",[cj]:f}],[cj]:p},{error:"Invalid ARN: Expected a 4-component resource",[cj]:f}],[cj]:p},bd],[cj]:p},be],[cj]:p},bf],[cj]:p}],[cj]:p}],[cj]:p},{error:"Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`",[cj]:f}],[cj]:p},{error:"Invalid ARN: The Outpost Id was not set",[cj]:f}],[cj]:p},{error:"Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})",[cj]:f}],[cj]:p},{error:"Invalid ARN: No ARN type specified",[cj]:f}],[cj]:p},{[ck]:[{[cl]:k,[cm]:[ad,0,4,b],[co]:P},{[cl]:h,[cm]:[{[cn]:P},"arn:"]},{[cl]:s,[cm]:[{[cl]:d,[cm]:[bk]}]}],error:"Invalid ARN: `{Bucket}` was not a valid ARN",[cj]:f},{[ck]:[{[cl]:e,[cm]:[aw,c]},bk],error:"Path-style addressing cannot be used with ARN buckets",[cj]:f},{[ck]:bF,rules:[{[ck]:bT,rules:[{[ck]:[ax],rules:[{[ck]:[Y,ap,X,ay],endpoint:{[cp]:"https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[Y,ap,X,aA,aB],rules:[{endpoint:bl,[cj]:o}],[cj]:p},{[ck]:[Y,ap,X,aA,aE],endpoint:bl,[cj]:o},{[ck]:[aF,ap,X,ay],endpoint:{[cp]:"https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aF,ap,X,aA,aB],rules:[{endpoint:bm,[cj]:o}],[cj]:p},{[ck]:[aF,ap,X,aA,aE],endpoint:bm,[cj]:o},{[ck]:[Y,ap,aH,ay],endpoint:{[cp]:"https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[Y,ap,aH,aA,aB],rules:[{endpoint:bn,[cj]:o}],[cj]:p},{[ck]:[Y,ap,aH,aA,aE],endpoint:bn,[cj]:o},{[ck]:[aF,Z,ae,aH,ay],endpoint:{[cp]:Q,[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aF,Z,ae,aH,aA,aB],rules:[{[ck]:bV,endpoint:bo,[cj]:o},{endpoint:bo,[cj]:o}],[cj]:p},{[ck]:[aF,Z,ae,aH,aA,aE],endpoint:bo,[cj]:o},{[ck]:[aF,ap,aH,ay],endpoint:{[cp]:R,[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aF,ap,aH,aA,aB],rules:[{[ck]:bV,endpoint:{[cp]:R,[cq]:aD,[cw]:aj},[cj]:o},{endpoint:bp,[cj]:o}],[cj]:p},{[ck]:[aF,ap,aH,aA,aE],endpoint:bp,[cj]:o}],[cj]:p},{error:"Path-style addressing cannot be used with S3 Accelerate",[cj]:f}],[cj]:p}],[cj]:p}],[cj]:p},{[ck]:[{[cl]:d,[cm]:[bq]},{[cl]:e,[cm]:[bq,c]}],rules:[{[ck]:bT,rules:[{[ck]:ch,rules:[aV,aW,{[ck]:bC,endpoint:{[cp]:t,[cq]:br,[cw]:aj},[cj]:o},{[ck]:bH,endpoint:{[cp]:"https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}",[cq]:br,[cw]:aj},[cj]:o},{endpoint:{[cp]:"https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}",[cq]:br,[cw]:aj},[cj]:o}],[cj]:p},aQ],[cj]:p}],[cj]:p},{[ck]:[ar],rules:[{[ck]:bT,rules:[{[ck]:ch,rules:[{[ck]:[X,Y,ap,ay],endpoint:{[cp]:"https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[X,Y,ap,aA,aB],rules:[{endpoint:bs,[cj]:o}],[cj]:p},{[ck]:[X,Y,ap,aA,aE],endpoint:bs,[cj]:o},{[ck]:[X,aF,ap,ay],endpoint:{[cp]:"https://s3-fips.us-east-1.{partitionResult#dnsSuffix}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[X,aF,ap,aA,aB],rules:[{endpoint:bt,[cj]:o}],[cj]:p},{[ck]:[X,aF,ap,aA,aE],endpoint:bt,[cj]:o},{[ck]:[aH,Y,ap,ay],endpoint:{[cp]:"https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aH,Y,ap,aA,aB],rules:[{endpoint:bu,[cj]:o}],[cj]:p},{[ck]:[aH,Y,ap,aA,aE],endpoint:bu,[cj]:o},{[ck]:[aH,aF,Z,ae,ay],endpoint:{[cp]:t,[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aH,aF,Z,ae,aA,aB],rules:[{[ck]:bV,endpoint:bv,[cj]:o},{endpoint:bv,[cj]:o}],[cj]:p},{[ck]:[aH,aF,Z,ae,aA,aE],endpoint:bv,[cj]:o},{[ck]:[aH,aF,ap,ay],endpoint:{[cp]:S,[cq]:az,[cw]:aj},[cj]:o},{[ck]:[aH,aF,ap,aA,aB],rules:[{[ck]:bV,endpoint:{[cp]:S,[cq]:aD,[cw]:aj},[cj]:o},{endpoint:bw,[cj]:o}],[cj]:p},{[ck]:[aH,aF,ap,aA,aE],endpoint:bw,[cj]:o}],[cj]:p},aQ],[cj]:p}],[cj]:p}],[cj]:p},{error:"A region must be set when sending requests to S3.",[cj]:f}]};
export const ruleSet: RuleSetObject = _data;

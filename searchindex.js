Search.setIndex({docnames:["advanced-topics","api-reference/controller/device/base","api-reference/controller/device/channel","api-reference/controller/device/generic","api-reference/controller/device/hub","api-reference/controller/mixins/consumption","api-reference/controller/mixins/dnd","api-reference/controller/mixins/electricity","api-reference/controller/mixins/garage","api-reference/controller/mixins/hub","api-reference/controller/mixins/light","api-reference/controller/mixins/spray","api-reference/controller/mixins/system","api-reference/controller/mixins/toggle","api-reference/controller/subdevice/sensor","api-reference/controller/subdevice/valve","api-reference/creds","api-reference/http","api-reference/index","api-reference/manager","common-gotchas","index","installation","meross-protocol","quick-start"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["advanced-topics.rst","api-reference/controller/device/base.rst","api-reference/controller/device/channel.rst","api-reference/controller/device/generic.rst","api-reference/controller/device/hub.rst","api-reference/controller/mixins/consumption.rst","api-reference/controller/mixins/dnd.rst","api-reference/controller/mixins/electricity.rst","api-reference/controller/mixins/garage.rst","api-reference/controller/mixins/hub.rst","api-reference/controller/mixins/light.rst","api-reference/controller/mixins/spray.rst","api-reference/controller/mixins/system.rst","api-reference/controller/mixins/toggle.rst","api-reference/controller/subdevice/sensor.rst","api-reference/controller/subdevice/valve.rst","api-reference/creds.rst","api-reference/http.rst","api-reference/index.rst","api-reference/manager.rst","common-gotchas.rst","index.rst","installation.rst","meross-protocol.rst","quick-start.rst"],objects:{"meross_iot.controller.device":{BaseDevice:[1,0,1,""],ChannelInfo:[2,0,1,""],GenericSubDevice:[3,0,1,""],HubDevice:[4,0,1,""]},"meross_iot.controller.device.BaseDevice":{async_update:[1,1,1,""],channels:[1,1,1,""],default_command_timeout:[1,1,1,""],firmware_version:[1,1,1,""],hardware_version:[1,1,1,""],internal_id:[1,1,1,""],lookup_channel:[1,1,1,""],name:[1,1,1,""],online_status:[1,1,1,""],register_push_notification_handler_coroutine:[1,1,1,""],type:[1,1,1,""],unregister_push_notification_handler_coroutine:[1,1,1,""],uuid:[1,1,1,""]},"meross_iot.controller.device.GenericSubDevice":{async_get_battery_life:[3,1,1,""],async_update:[3,1,1,""],internal_id:[3,1,1,""],online_status:[3,1,1,""]},"meross_iot.controller.mixins.consumption":{ConsumptionXMixin:[5,0,1,""]},"meross_iot.controller.mixins.consumption.ConsumptionXMixin":{async_get_daily_power_consumption:[5,1,1,""]},"meross_iot.controller.mixins.dnd":{SystemDndMixin:[13,0,1,""]},"meross_iot.controller.mixins.dnd.SystemDndMixin":{async_get_dnd_mode:[13,1,1,""],set_dnd_mode:[13,1,1,""]},"meross_iot.controller.mixins.electricity":{ElectricityMixin:[7,0,1,""]},"meross_iot.controller.mixins.electricity.ElectricityMixin":{async_get_instant_metrics:[7,1,1,""],get_last_sample:[7,1,1,""]},"meross_iot.controller.mixins.garage":{GarageOpenerMixin:[8,0,1,""]},"meross_iot.controller.mixins.garage.GarageOpenerMixin":{async_close:[8,1,1,""],async_open:[8,1,1,""],get_is_open:[8,1,1,""]},"meross_iot.controller.mixins.hub":{HubMixn:[9,0,1,""],HubMts100Mixin:[9,0,1,""]},"meross_iot.controller.mixins.light":{LightMixin:[10,0,1,""]},"meross_iot.controller.mixins.light.LightMixin":{async_set_light_color:[10,1,1,""],get_color_temperature:[10,1,1,""],get_light_is_on:[10,1,1,""],get_luminance:[10,1,1,""],get_rgb_color:[10,1,1,""],get_supports_luminance:[10,1,1,""],get_supports_rgb:[10,1,1,""],get_supports_temperature:[10,1,1,""]},"meross_iot.controller.mixins.spray":{SprayMixin:[11,0,1,""]},"meross_iot.controller.mixins.system":{SystemAllMixin:[12,0,1,""],SystemOnlineMixin:[12,0,1,""]},"meross_iot.controller.mixins.toggle":{ToggleMixin:[6,0,1,""],ToggleXMixin:[6,0,1,""]},"meross_iot.controller.mixins.toggle.ToggleXMixin":{async_toggle:[6,1,1,""],async_turn_off:[6,1,1,""],async_turn_on:[6,1,1,""],is_on:[6,1,1,""]},"meross_iot.http_api":{MerossHttpClient:[17,0,1,""]},"meross_iot.http_api.MerossHttpClient":{async_from_user_password:[17,1,1,""],async_invalidate_credentials:[17,1,1,""],async_list_devices:[17,1,1,""],async_list_hub_subdevices:[17,1,1,""],async_login:[17,1,1,""],async_logout:[17,1,1,""],cloud_credentials:[17,1,1,""]},"meross_iot.manager":{MerossManager:[19,0,1,""],MqttConnectionStatus:[19,0,1,""],TransportMode:[19,0,1,""]},"meross_iot.manager.MerossManager":{async_device_discovery:[19,1,1,""],async_execute_cmd:[19,1,1,""],async_init:[19,1,1,""],find_devices:[24,1,1,""],register_push_notification_handler_coroutine:[19,1,1,""],unregister_push_notification_handler_coroutine:[19,1,1,""]},"meross_iot.model":{credentials:[16,2,0,"-"]},"meross_iot.model.credentials":{MerossCloudCreds:[16,0,1,""]},"meross_iot.model.credentials.MerossCloudCreds":{from_json:[16,1,1,""],to_json:[16,1,1,""]},meross_iot:{http_api:[17,2,0,"-"],manager:[19,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module"},terms:{"3rd":21,"4d6d":17,"853076ae60b9":17,"8bit":10,"case":[0,17,19,20,21,23,24],"catch":0,"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,19,20,24],"default":[1,6,7,8,10,23],"enum":[1,13,19,24],"float":[3,5,6,7,10,13,19],"function":[0,1,19,24],"import":[0,21,23,24],"int":[1,2,8,10,19],"long":0,"new":[0,20,23,24],"return":[1,3,5,6,7,8,10,13,16,17,19,24],"switch":[1,6,21],"true":[6,8,10,19],"try":[1,23],"while":20,AND:[19,24],AWS:23,DNS:23,For:[0,20,21,24],Its:1,NOT:13,Such:24,TLS:23,That:[0,24],The:[0,7,8,19,20,21,23,24],Then:24,There:[20,23],__main__:24,__meross_cr:17,__name__:24,__onoff:10,_md5:23,abl:[23,24],about:[20,21,23,24],abov:[22,23],absolv:24,abstracteventloop:19,abus:20,access:[20,23,24],account:[0,17,20,21,23,24],accur:7,accuraci:23,acquir:20,across:17,actual:[13,20],actuat:24,add:[0,20],added:0,address:[20,23],advanc:21,advis:0,after:[20,24],again:[0,20,24],against:[1,17,20,23],agent:17,aim:23,albertogeniola:22,alert:24,align:20,all:[0,19,23,24],allow:[0,1,23,24],alongsid:24,alreadi:19,also:[0,19,23,24],altern:0,alwai:[0,20],ambient:[13,24],among:23,android:23,ani:[0,1,7,17,19,20,21,23,24],anoth:23,answer:19,anyth:23,api:[17,19,20,21,23,24],api_base_url:17,app:[0,17,19,20,21,24],app_id:23,app_typ:17,app_vers:17,appli:1,applianc:23,applic:23,approach:[20,21],appropri:1,architectur:21,archiv:22,arg:[0,1,3,5,6,7,8,10,13,17,19],argument:[1,19,24],aris:0,around:24,ask:[17,20,23],assign:[1,19,24],associ:17,assum:23,async:[0,1,3,5,6,7,8,10,13,17,19,21,24],async_clos:8,async_device_discoveri:[19,24],async_execute_cmd:19,async_from_user_password:[17,24],async_get_battery_lif:3,async_get_daily_power_consumpt:5,async_get_dnd_mod:13,async_get_instant_metr:[7,24],async_get_temperatur:24,async_init:[19,24],async_invalidate_credenti:17,async_list_devic:17,async_list_hub_subdevic:17,async_login:17,async_logout:[17,24],async_open:8,async_set_light_color:[10,24],async_set_target_temperatur:24,async_toggl:6,async_turn_off:[6,24],async_turn_on:[6,24],async_upd:[1,3,20,24],asynchron:20,asyncio:[0,19,20,21,24],attack:23,attempt:23,attribut:[3,7],author:[23,24],auto_reconnect:19,autom:[20,21],automat:[0,1,20],avail:[13,23,24],avoid:[7,13,20,24],await:[1,19,20,24],awar:20,backend:21,backward:19,ban:[20,21,24],bandwidth:1,base64:23,base64_encoded_password:23,base64_encoded_ssid:23,base:[17,19,24],basedevic:[0,18,19,21],basic:[0,1,3,21,23,24],batteri:3,batteryinfo:3,becom:20,been:[0,1,19,23,24],befor:[0,19,20,23,24],belong:17,between:[21,23,24],bind:23,bit:[0,21,24],block:[20,21],blue:10,bodi:23,bool:[2,6,8,10,19],both:24,bought:21,bright:10,broadcast:23,broker:[13,19,20,21,23],build:[16,17,21,23],built:21,bulb:[6,10,21],button:[23,24],byt:[19,24],ca_cert:19,cach:[7,13,24],cached_http_device_list:19,calcul:[7,23],call:[7,19,20,24],callabl:[1,19],can:[0,1,10,19,20,22,23,24],capabl:[10,19,24],carefulli:24,carri:23,caus:20,cautiou:17,certif:23,chang:[0,1,20,21,24],channel:[1,5,6,7,8,10,24],channel_id_or_nam:1,channel_typ:2,channelinfo:[18,21],character:1,charg:24,che:23,check:[23,24],choos:24,chose:24,chosen:24,classmethod:[16,17],client:[18,19,21,24],clientid:23,clone:22,close:[8,20,24],cloud:[1,16,20,23],cloud_credenti:17,code:[0,22,24],collect:0,color:[10,24],color_temperatur:10,com:[17,22],combin:[7,17],command:[0,1,8,10,19,20,21,22,24],common:[21,23],commun:23,compat:19,complet:[20,24],compli:0,compos:[1,3],concaten:23,config:23,configur:[10,23,24],connect:[20,23,24],consent:23,consid:[19,21,24],constant:23,consumpt:[5,7,24],consumptionxmixin:[18,21,24],contact:20,contain:[10,17,19,24],content:23,continu:0,contrari:24,control:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,19,21],copi:23,core:24,coro:[1,19],coro_nam:0,coroutin:[0,1,19],correctli:23,could:[20,21],counter:17,creat:[0,24],cred:17,credenti:[0,16,17,23],creds_env_var_nam:17,current:[0,1,3,7,8,10,16,20,24],current_color:24,danger:24,data:[1,5,7,17,19,21,24],datetim:16,dc0a:17,deal:[17,19,24],deamon:0,debug:0,decid:0,dedic:0,def:[0,24],default_command_timeout:1,defin:1,definit:0,deliv:[1,20],demo:24,deprec:19,deriv:[19,24],describ:7,design:0,destination_device_uuid:19,detail:24,dev:24,develop:[0,1,20,21,23,24],devic:[1,2,3,4,5,6,7,10,13,17,19,20,21],device_class:[19,24],device_internal_id:[0,1],device_nam:[19,24],device_typ:[19,24],device_uuid:[1,4,5,6,7,8,9,10,11,12,19,23,24],deviceuuid:23,devid:0,dhcp:23,dict:[0,1,5,19],did:21,differ:[20,23,24],digest:23,digit:23,directori:0,dirti:24,disconnect:20,discov:[0,19,20,24],discoveri:19,discrimin:23,disturb:13,dnd:13,dndmixin:[18,21],dndmode:13,document:[20,24],doe:[0,20,21,23,24],doing:24,domest:23,domot:21,done:[0,17],door:[8,21],down:24,download:22,due:1,each:[10,20],easi:0,edg:20,effort:24,either:24,electr:[7,24],electricitymixin:[18,21,24],els:[20,24],email:[17,20,24],embed:1,empti:24,enabl:[10,13],end:20,endpoint:[17,20,24],engin:23,enough:[7,23],ensur:24,enter:0,entir:24,enumer:[19,20],env:17,environ:24,equip:24,error:20,even:[0,21,23,24],event:[0,1,19,20,23],everi:[1,20,23],evt_coro:0,exact:[0,24],exampl:[0,24],exchang:0,execut:[0,1,23],expect:23,experienc:20,expir:17,explicit:23,explicitli:[19,21,23],expos:[0,1,24],f28374400949fd3bf6909517d541b7e9e42ba2:17,fact:[21,24],failur:0,fals:[2,6,8,10,19],fast:24,featur:[0,19,21],fetch:[19,20],field:[19,24],file:0,filter:[19,23,24],find:24,find_devic:[19,24],firmwar:[1,23],firmware_vers:1,first:[20,21,23,24],flaw:23,flood:7,flow:21,fmware:23,folder:0,follow:[0,22,23,24],forbidden:23,forc:[1,24],form:23,forward:24,found:24,framework:21,frequent:24,from:[0,5,7,10,16,19,20,22,23,24],from_devic:23,from_json:16,full:[1,3,17,19],further:21,garag:[8,21],garageopenermixin:[18,21,24],gatewai:23,gather:[0,7],gener:[0,1,10,17,19,23,24],genericpushnotif:19,genericsubdevic:[18,21],get:[1,3,10,19,24],get_color_temperatur:10,get_dnd_mod:13,get_event_loop:24,get_is_open:[8,24],get_last_sampl:7,get_light_is_on:10,get_lumin:10,get_rgb_color:[10,24],get_supports_lumin:10,get_supports_rgb:[10,24],get_supports_temperatur:10,getlogg:0,git:22,github:[0,22],given:[0,8,10,16,17],goe:24,going:21,gotcha:[21,24],green:10,guarante:23,hand:24,handl:[20,21,24],handler:[0,1,19],happen:[20,23],hard:21,hardwar:[1,21,23],hardware_vers:1,has:[0,20,23,24],have:[0,1,10,19,21,22,23,24],header:[17,23],heat:24,here:24,hex:23,him:20,histor:5,hit:20,hoc:0,hold:[16,23],host:23,hostnam:[19,23],hour:[20,23],how:[20,21,24],howev:[0,20,23,24],http:[18,19,20,21,22,23,24],http_api:[0,17,19,24],http_api_cli:24,http_client:[19,24],http_proxi:17,httpdeviceinfo:[17,19],httpstatscount:17,httpsubdeviceinfo:17,hub:[3,9,17,19,24],hub_id:17,hubdevic:[18,19,21,24],hubdevice_uuid:3,hubmixn:[18,21],hubmts100mixin:[18,21],humid:24,identifi:[1,3,17,19,23,24],ids:[19,24],ignor:[10,19],imag:23,immedi:24,immin:20,implement:[0,6,19,20,24],inconsist:20,index:[1,2,6,21],indic:17,info:[0,7,10,24],inform:[0,1,7,23,24],initi:19,input:[0,23],inspect:21,instal:21,instanc:[0,16,17,20],instant:7,instant_consumpt:24,instead:[7,17,24],instruct:23,integ:10,intens:10,intercept:0,interest:[0,6],interfac:24,intern:[1,3],internal_id:[1,3,19,24],internet:20,interv:19,introduc:21,invalid:17,invok:[0,1,17,19,20,24],iot:[17,22],is_heat:24,is_master_channel:2,is_on:[6,24],isoformat:24,issu:[13,17,19,22,24],issued_on:16,iter:[19,24],its:[0,3,13,19,23],itself:23,json:[16,23],json_str:16,keep:[17,20,24],kei:[16,23],keyword:20,kind:23,know:[21,24],known:19,kwarg:[0,1,3,4,5,6,7,8,9,10,11,12,13,17],kword:19,last_sampled_humid:24,last_sampled_temperatur:24,last_sampled_tim:24,latest:[19,22,24],lead:21,least:[10,19,24],led:13,left:19,len:24,let:[21,24],level:0,leverag:21,librari:[0,1,3,20,22,23,24],light:[10,19,24],lightmixin:[18,19,21,24],like:[0,24],limit:[0,1,20,21],line:20,list:[1,5,17,19,21],listen:[0,20],liter:23,local:[19,23],log:[17,20,21,23],log_identifi:17,logic:[19,24],login:[17,23],logout:[17,20,24],longer:0,look:[1,21,24],lookup_channel:1,loop:[19,20,24],loos:20,lost:20,low:0,lower:23,lowercas:23,lumin:[10,24],mac:23,macaddress:23,machin:20,magnet:24,mai:[0,7,20,23],main:24,make:[0,17,20,22,23],malici:23,manag:[0,1,3,4,5,6,7,8,9,10,11,12,19,24],manger:19,mani:[17,20,23],manual:[22,24],mark:24,market:0,master:1,match:[0,19,23,24],matter:0,max:24,max_supported_temperatur:24,maximum:19,md5:23,meant:21,measur:7,meross:[0,1,3,16,17,19,20,21,22,24],meross_:23,meross_devic:24,meross_device_uuid:19,meross_email:24,meross_iot:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,19,24],meross_password:24,meross_root_logg:0,meross_sniff:0,merosscloudcr:[16,17],merosscloudcredenti:[17,18,21],merosshttpcli:[0,17,19,20,24],merossiot:[0,17,19,22,24],merossmanag:[0,18,20,21,24],merosssnif:0,messag:[0,13,20,23],message_id:23,messageid:23,method:[0,1,7,13,17,19,20,23,24],metric:7,might:[1,17,20,21,24],min:24,min_supported_temperatur:24,mind:21,mixin:[5,6,7,8,9,10,11,12,13,19,24],mode:[10,13,19,23,24],model:[1,3,7,13,16,17,19,24],modifi:0,modul:[0,21],moment:20,monitor:24,more:[0,17,19,23,24],most:[0,1,20,21,23,24],motor:24,mount:24,mqtt:[1,13,19,20,21,24],mqtt_host:23,mqtt_hostnam:19,mqtt_override_serv:19,mqtt_port:[19,23],mqtt_skip_cert_valid:19,mqttconnectionstatu:19,ms100:24,ms100sensor:[18,19,21,24],msl120:[10,19,24],mss210:23,mss310:[19,24],mts100v3:24,mts100v3valv:[18,19,21,24],multi:1,multipl:[19,24],must:[0,1,10,19,20,23],name:[0,1,2,19,23,24],namespac:[0,1,19,23],nativ:[17,19,24],need:[0,1,8,13,20,24],neighborhood:23,network:[0,1,21,23],new_temp:24,none:[1,2,3,5,6,7,8,10,13,17,19,24],note:[7,10,19,21,23,24],notic:20,notif:[1,19,20,21],notifi:19,notificaiton:0,now:[21,23],number:[0,20,24],numer:23,object:[1,7,16,17,19,20],obtain:[17,23],occur:[0,20],off:[6,10,13,24],offer:[7,24],offici:21,offlin:19,often:7,omissi:0,omit:23,on_off:24,onc:[0,23,24],one:[0,10,19,23,24],ones:[20,24],onli:[1,10,19,22,23,24],onlin:[0,1,3,19,24],online_statu:[1,3,19,24],onlinestatu:[19,24],onoff:10,open:[8,21,23],open_statu:24,oper:[1,6,8,10,24],operations__:10,option:[2,3,5,6,7,8,10,13,17,19,24],order:[0,19,20,23,24],origin:0,other:[1,20,23,24],otherwis:[8,10],outcom:23,over:[0,1],overrid:[1,19],override_transport_mod:19,own:24,page:21,pair:21,panoram:24,param:[1,8,13,16,17,19],paramet:[1,5,6,7,8,10,17,19,23,24],parti:21,particular:19,pass:[0,19],password:[0,17,23,24],path:23,pattern:[20,21],payload:[19,23],peopl:21,perfom:3,perform:[0,17,19,20,21,23],phase:23,physic:23,piec:21,pip:22,pipi:22,place:21,plai:[0,24],plan:21,pleas:[7,10,21],plu:[1,3],plug:[23,24],plug_ip_address:23,plugin:[3,7,21],point:23,poll:[3,7,13],port:[19,23],portion:23,possibl:[0,17,23],post:23,power:[5,7,24],powerinfo:7,preced:[1,20],prefix:[1,3,23],press:[0,23,24],pretti:0,prevent:[0,20],previous:[1,7,16,19,20],print:24,proactoreventloop:20,probabl:21,product:21,program:[0,1,21],proper:24,properli:20,properti:[1,3,17,24],protocol:21,provid:[17,19,21,23,24],proxi:17,proxim:24,publish:23,pull:23,push:[1,19,20,21],put:23,python:[0,20,21,22],queri:24,quick:21,quickli:24,quit:24,rais:0,randint:24,random:24,randomli:24,rate:[20,21],rather:[7,24],reach:20,react:[0,1],read:[5,7,21],readonli:24,realli:24,reason:[0,20,21,24],reboot:23,receiv:[0,1,19,20,23],recent:[7,24],recipi:24,recogn:23,red:10,refer:[7,21,24],refresh:[7,13],refus:17,regist:[0,1,5,19,24],register_push_notification_handler_coroutin:[0,1,19],registri:19,rel:[19,24],relat:20,releas:[0,20],reli:[0,7,13,21,24],remov:[0,20],report:[0,19,23,24],repres:[1,23],represent:1,republish:23,request:[17,20,23],requir:22,respect:24,respons:[0,17,23,24],restor:20,restrict:19,result:[19,20,24],resum:23,retriev:[13,19,23,24],revers:23,revis:1,rgb:[10,24],right:21,risk:24,rout:23,run:[0,1,20],run_until_complet:24,runtimeerror:20,safe:24,same:17,sampl:24,sample_timestamp:7,satisfi:[19,24],scan:23,script:[0,20,24],search:[21,24],second:[19,23],secret:23,section:[20,23,24],secur:[20,23],see:24,seem:23,select:0,send:[0,8,19,20,23,24],sens:[7,24],sensit:[0,19,24],sensor:[19,21],sent:[19,23],separ:23,sequenc:23,serial:16,seriou:23,serv:23,server:23,session:17,set:[13,17,19,23,24],set_dnd_mod:13,set_event_loop_polici:[20,24],setlevel:0,setup:[20,24],sever:0,should:[0,1,7,13,17,19,20,21,23,24],show:24,shown:0,sign:23,signal:24,signatur:[0,1,19,23,24],similarli:[0,19,24],simpl:23,simpli:23,simplifi:17,simul:24,sinc:23,situat:20,skip:19,sleep:24,smart:[0,6,24],snif:[0,23],sniff:21,sniffer:0,snippet:[0,24],solv:20,some:[1,3,20,21,24],somehow:24,someon:[20,24],someth:0,soon:[21,24],sourc:22,specif:[0,1,17,23,24],specifi:[6,10,17,19,24],spoof:23,sprai:11,spraymixin:[18,21],ssid:23,ssl:23,standard:0,start:[0,20,21,23],stat:[6,17],state:[1,6,10,20,23,24],stats_count:17,statu:[0,1,3,6,8,19,20,24],step:23,stick:0,still:23,stop:0,store:17,str1:23,str2:23,str:[0,1,2,3,4,5,6,7,8,9,10,11,12,16,17,19,24],straight:24,strategi:20,strictli:[1,13],string:[16,19,23,24],strongli:0,structur:19,stuff:21,sub:17,subdevic:[17,19,24],subdevice_id:3,subscrib:23,succe:23,success:23,suffix:[1,3],suitabl:21,support:[0,6,10,19,24],sure:[0,17,20,22],suspend:20,suspens:20,system:12,systemallmixin:[18,21],systemdndmixin:13,systemonlinemixin:[18,21],take:[0,1,21],taken:24,target:24,target_device_uuid:23,target_temperatur:24,task:21,team:20,tell:[10,19,23,24],temp:24,temperatur:[10,24],test:0,than:[7,24],thei:[0,24],them:24,themselv:24,thermostat:21,thi:[0,1,3,5,6,7,10,13,17,19,20,22,23,24],thing:[21,24],those:24,though:0,three:10,time:[17,19,20,21,23,24],timeout:[1,3,5,6,7,10,13,19],timestamp:23,to_json:16,todo:0,toggl:[6,10,19,24],togglemixin:24,togglex:[6,10,19,24],togglexmixin:[19,24],togglexmixn:24,token:[16,17,20],too:[17,20,21,24],tool:0,top:20,topic:[21,23],track:24,traffic:[21,23],transport:19,transportmod:19,treat:23,tri:23,trigger:24,triggersrc:23,tropic:23,tupl:[10,19],ture:24,turn:[6,10,13,24],two:23,txt:22,type:[1,17,19,23,24],ua_head:17,unavail:1,uncom:24,underscor:23,understand:21,unfortun:24,union:[1,16,19,24],uniqu:23,unknown:[1,19,23],unoffici:21,unregist:[0,1,19],unregister_push_notification_handler_coroutin:[0,1,19],unsupport:21,untrust:23,unzip:22,updat:[1,3,19,20,23,24],update_subdevice_statu:19,upgrad:22,upload:0,upon:1,url:17,usag:17,use:[0,17,20,21,23,24],used:[1,3,10,17,19,20,21,23,24],user:[0,1,16,17,19,20,23,24],user_email:16,user_id:[16,23],userid:23,usernam:[17,23],uses:[19,23],using:[0,13,17,20,23],usual:[1,10,20],util:[0,16,17],uuid:[1,17,19,23,24],valid:23,valu:[7,10,23,24],valv:[19,24],vari:10,variabl:17,verbos:0,veri:24,version:[1,17],via:[0,1,10,13,19,23,24],voltag:[7,24],wai:[0,20,21],wait:[0,19,24],want:[0,19,21,22],warn:[0,20],warranti:21,well:[21,24],when:[0,1,6,10,13,17,19,20,24],whenev:[1,19],where:[0,7,10,23],which:[0,8,17,19,20,21,23,24],whole:[19,24],why:24,wifi:23,window:20,windowsselectoreventlooppolici:[20,24],within:24,without:[17,20,23],won:23,word:23,work:[20,21,22,24],would:[19,24],write:[20,23,24],wrong:20,yet:0,you:[0,1,7,13,17,19,20,21,22,24],your:[0,1,20,24],your_meross_cloud_email:24,your_meross_cloud_password:24,zip:0},titles:["Advanced topics","BaseDevice","ChannelInfo","GenericSubDevice","HubDevice","ConsumptionXMixin","ToggleXMixin","ElectricityMixin","GarageOpenerMixin","HubMixn","LightMixin","SprayMixin","SystemAllMixin","DNDMixin","Ms100Sensor","Mts100v3Valve","MerossCloudCredentials","HTTP Client","API Reference","MerossManager","Common gotchas","Welcome to MerossIot Library\u2019s documentation!","Installation","Meross Protocol Inspection","Quick start"],titleterms:{"switch":24,advanc:0,api:18,app:23,architectur:23,basedevic:1,befor:21,bulb:24,channelinfo:2,client:[17,23],command:23,common:20,consumptionxmixin:5,content:21,control:24,data:0,devic:[0,23,24],dndmixin:13,document:21,door:24,electricitymixin:7,flow:23,garag:24,garageopenermixin:8,genericsubdevic:3,gotcha:20,handl:0,http:17,hubdevic:4,hubmixn:9,hubmts100mixin:9,indic:21,inspect:23,instal:22,librari:21,lightmixin:10,list:24,log:0,meross:23,merosscloudcredenti:16,merossiot:21,merossmanag:19,mqtt:23,ms100sensor:14,mts100v3valv:15,notif:[0,23],open:24,pair:23,protocol:23,push:[0,23],quick:24,read:24,refer:18,sensor:24,sniff:0,spraymixin:11,start:24,systemallmixin:12,systemonlinemixin:12,tabl:21,thermostat:24,thi:21,togglemixin:6,togglexmixin:6,topic:0,using:21,welcom:21}})
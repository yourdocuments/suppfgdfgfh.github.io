import {fb} from './firebase/data.js';
const ICE={iceServers:[{urls:'stun:stun.l.google.com:19302'}]};
const done=pc=>new Promise(r=>{if(pc.iceGatheringState=='complete')return r();pc.addEventListener('icegatheringstatechange',()=>pc.iceGatheringState=='complete'&&r());setTimeout(r,4000)});
const dsc=pc=>({type:pc.localDescription.type,sdp:pc.localDescription.sdp});
/* Customer: screen share (browser nijei permission dialog dekhay) */
export async function share(sid,onEnd){
 const st=await navigator.mediaDevices.getDisplayMedia({video:true});
 const{s,db}=await fb(),ref=s.doc(db,'threads',sid,'rtc','call'),pc=new RTCPeerConnection(ICE);let ended=0;
 st.getTracks().forEach(t=>pc.addTrack(t,st));
 await pc.setLocalDescription(await pc.createOffer());await done(pc);
 await s.setDoc(ref,{offer:dsc(pc),t:Date.now()});
 const un=s.onSnapshot(ref,async d=>{const x=d.data();if(x?.answer&&!pc.currentRemoteDescription)await pc.setRemoteDescription(x.answer)});
 const stop=()=>{if(ended)return;ended=1;un();st.getTracks().forEach(t=>t.stop());pc.close();s.deleteDoc(ref).catch(()=>{});onEnd&&onEnd()};
 st.getVideoTracks()[0].onended=stop;
 pc.onconnectionstatechange=()=>['failed','closed','disconnected'].includes(pc.connectionState)&&stop();
 return stop}
/* Staff: customer-er screen dekha */
export async function view(sid,video,onEnd){
 const{s,db}=await fb(),ref=s.doc(db,'threads',sid,'rtc','call'),pc=new RTCPeerConnection(ICE);let started=0,ended=0;
 pc.ontrack=e=>{video.srcObject=e.streams[0];video.play().catch(()=>{})};
 const un=s.onSnapshot(ref,async d=>{const x=d.data();if(!x){if(started)stop();return}if(!x.offer||started)return;started=1;
  try{await pc.setRemoteDescription(x.offer);await pc.setLocalDescription(await pc.createAnswer());await done(pc);await s.updateDoc(ref,{answer:dsc(pc)})}catch(z){stop()}});
 const stop=()=>{if(ended)return;ended=1;un();pc.close();video.srcObject=null;onEnd&&onEnd()};
 pc.onconnectionstatechange=()=>['failed','closed'].includes(pc.connectionState)&&stop();
 return stop}

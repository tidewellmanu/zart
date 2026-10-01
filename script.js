(function(){
var $=function(s){return document.querySelector(s)};
var $$=function(s){return [].slice.call(document.querySelectorAll(s))};
var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var money=function(n){return 'GH₵'+Number(n||0).toLocaleString('en-GH',{minimumFractionDigits:2,maximumFractionDigits:2})};
var fmt=function(d){var x=new Date(d);return isNaN(x)?'':x.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})};
var today=function(){return new Date().toISOString().slice(0,10)};
var PALS=[['#f3efe6','#2438ff','#ff6a3d','#161616'],['#101828','#f5c542','#e8e8e8','#3a5ba0'],['#e9f1f2','#0c7c8c','#e4572e','#222'],['#fafafa','#111','#d9342b','#7a7a7a'],['#f6efe0','#3b6fd8','#f0a04b','#1b2a41'],['#f0f0f0','#7c4dff','#00c2a8','#111']];

/* ---------- data ---------- */
function seed(){
var W=function(id,t,a,m,y,sz,p,k,d,ex){return{id:id,t:t,a:a,m:m,y:y,sz:sz,p:p,k:k,d:d,ex:ex,st:'live',img:'',pal:PALS[id%PALS.length]}};
return{n:100,me:0,artists:[],cart:[],
set:{name:'ZARTZ',tag:'Contemporary art, reviews and exhibitions',foot:'A demonstration store. Artists, museums and works are fictional.',pass:'zartz-admin'},
works:[
W(1,'Idle Hands','Mira Okonkwo','Painting',2025,'90 × 112 cm',4800,'circles','Oil on linen. Overlapping discs mark the shifts of a factory floor that never fully stops.',1),
W(2,'Night Shift, Lisbon','Tomás Vidal','Print',2024,'60 × 75 cm',650,'bars','Edition of 60. Screenprint in four layers, inspired by the ceiling lights of a late tram.',1),
W(3,'Signal and Noise','Aiko Reyes','Painting',2026,'120 × 150 cm',9200,'waves','Acrylic on canvas. Parallel bands bend as if a recording were played back too slowly.',1),
W(4,'Grid Study No. 7','Lena Hartmann','Drawing',2025,'42 × 52 cm',1300,'grid','Ink and gouache on paper. One of ten studies in which a square is allowed to misbehave.',2),
W(5,'Slow Tide','Mira Okonkwo','Print',2023,'50 × 62 cm',480,'waves','Edition of 120. Risograph in three inks, printed on recycled cotton paper.',2),
W(6,'Unpaid Overtime','Tomás Vidal','Drawing',2026,'70 × 90 cm',2100,'bars','Charcoal and pastel. Tall columns lean into one another like workers on a long commute.',2),
W(7,'Soft Circuit','Aiko Reyes','Sculpture',2025,'38 × 38 × 20 cm',6400,'circles','Hand-dyed felt over a steel frame. A circuit board rendered as something you want to touch.',3),
W(8,'Checkpoint','Lena Hartmann','Painting',2024,'80 × 100 cm',3900,'grid','Oil on panel. A grid of lit windows in which one has just gone dark.',3)],
rev:[{w:1,n:'Dana',r:5,t:'Looks flat online and then glows in person. The blue is unreal.'},{w:1,n:'Ibrahim',r:4,t:'Great presence. Arrived well packed and in a lovely frame.'},{w:2,n:'Marta',r:5,t:'Crisp layers, and the yellow really is that bright.'},{w:3,n:'Joel',r:4,t:'Big, calm, a bit unsettling.'},{w:4,n:'Ana',r:5,t:'Quiet and funny, which is rare.'},{w:4,n:'Pete',r:3,t:'Smaller than I imagined, but beautiful.'},{w:5,n:'Zuri',r:5,t:'Warm colours, soft paper. Perfect in our hallway.'},{w:7,n:'Cleo',r:5,t:'Everyone who visits touches it. Hard to resist.'},{w:8,n:'Sam',r:4,t:'Moody and well made.'}],
fb:[{w:1,n:'Curator Noor',a:'Composition',t:'The left third carries the whole piece. Keep that tension.'},{w:3,n:'Visitor',a:'Colour',t:'The orange edge is doing a lot of work, in a good way.'}],
posts:[
{id:1,t:'Why the factory floor keeps showing up in galleries',c:'Noor Haddad',g:'Essay',dt:'2026-09-24',s:'Artists are returning to work, machines and shifts as subjects. Here is what that says about us.',b:'Walk through any fair this year and you will find assembly lines, spreadsheets and circuit boards painted with real tenderness. That is not nostalgia. It is a way of asking who a machine is for.\n\nThe strongest pieces do not condemn or celebrate. They stay with the question, which is why they hold up after the second visit.'},
{id:2,t:'How I hang a small show in a big room',c:'Elias Brandt',g:'Practice',dt:'2026-09-10',s:'Three habits that stop a handful of works from looking lost on a large wall.',b:'First, group by conversation, not by size. Second, leave more empty wall than you think you need. Third, walk the room slowly with a stranger and watch where their eyes stop. Move whatever they ignored.'},
{id:3,t:'Studio visit: Mira Okonkwo on slow painting',c:'Noor Haddad',g:'Studio visit',dt:'2026-08-30',s:'A morning with a painter who lets each layer dry for a week.',b:'Okonkwo works on six canvases at once, rotating them so each gets days of rest. She says the pause is the technique. Colour that is allowed to settle looks deeper.'},
{id:4,t:'A buyer’s guide to editions and prints',c:'Elias Brandt',g:'Guide',dt:'2026-08-12',s:'What edition sizes mean and what to ask before you buy.',b:'Ask for the edition number, the printing method, the paper and the date. Look for a signed certificate and keep it with the work. Frame with archival materials and keep prints out of direct sun.'}],
exs:[
{id:1,m:'Harbor Light Museum',c:'Lisbon, Portugal',t:'Quiet Machines',cu:'Noor Haddad',s:'2026-09-05',e:'2026-10-31',ar:'Mira Okonkwo, Tomás Vidal, Aiko Reyes'},
{id:2,m:'Northgate Contemporary',c:'Manchester, UK',t:'Line, Square, Rule',cu:'Elias Brandt',s:'2026-10-15',e:'2027-01-18',ar:'Lena Hartmann, Tomás Vidal, Mira Okonkwo'},
{id:3,m:'Salt Works Art Center',c:'Accra, Ghana',t:'Lights Still On',cu:'Ama Boateng',s:'2026-11-06',e:'2027-02-14',ar:'Aiko Reyes, Lena Hartmann'},
{id:4,m:'Kestrel Museum of Modern Art',c:'Toronto, Canada',t:'The Long Commute',cu:'Elias Brandt',s:'2026-05-02',e:'2026-08-30',ar:'Tomás Vidal'},
{id:5,m:'Lantern House',c:'Osaka, Japan',t:'Soft Technology',cu:'Noor Haddad',s:'2026-09-20',e:'2026-12-06',ar:'Aiko Reyes, Mira Okonkwo'}],
slides:[
{id:1,t:'Quiet Machines',s:'Seven artists on how we live with automation. On view at Harbor Light Museum in Lisbon.',b:'Find the exhibition',l:'#exhibitions',k:'circles',c1:'#f3efe6',c2:'#2438ff',c3:'#ff6a3d'},
{id:2,t:'Eight new works this week',s:'Paintings, prints, drawings and sculpture from artists we are watching.',b:'Shop artwork',l:'#shop',k:'bars',c1:'#101828',c2:'#f5c542',c3:'#3a5ba0'},
{id:3,t:'Sell your art on ZARTZ',s:'Create a profile, upload your work and reach collectors worldwide.',b:'Start selling',l:'#sell',k:'waves',c1:'#0c7c8c',c2:'#e4572e',c3:'#f6efe0'},
{id:4,t:'Read the Curators’ Journal',s:'Essays, studio visits and buying guides from our curators.',b:'Read the journal',l:'#journal',k:'grid',c1:'#fafafa',c2:'#111111',c3:'#d9342b'},
{id:5,t:'Reviews from real collectors',s:'See how a work looks in a living room before you buy, and tell artists what you think.',b:'Browse reviews',l:'#shop',k:'circles',c1:'#7c4dff',c2:'#00c2a8',c3:'#f0f0f0'},
{id:6,t:'Find a museum near you',s:'Search exhibitions by city or curator and see the works on show.',b:'Find exhibitions',l:'#exhibitions',k:'grid',c1:'#10151f',c2:'#ffd23f',c3:'#ee6c4d'},
{id:7,t:'Collect with confidence',s:'Every work is checked by our curators and ships carefully packed.',b:'Shop artwork',l:'#shop',k:'bars',c1:'#efe9e1',c2:'#c0392b',c3:'#1d1d1d'}]};}
var db=null;try{db=JSON.parse(localStorage.getItem('zartz'))}catch(e){}
if(!db||!db.works)db=seed();
function save(){try{localStorage.setItem('zartz',JSON.stringify(db));return true}catch(e){alert('Browser storage is full. Remove some large images and try again.');return false}}
function nid(){return ++db.n}
function wk(id){return db.works.filter(function(w){return w.id===id})[0]}
function live(){return db.works.filter(function(w){return w.st!=='pending'})}
function revs(id){return db.rev.filter(function(r){return r.w===id})}
function fbs(id){return db.fb.filter(function(r){return r.w===id})}
function avg(id){var v=revs(id);return v.length?v.reduce(function(a,b){return a+b.r},0)/v.length:0}
function stars(n){var k=Math.round(n);return '★★★★★'.slice(0,k)+'☆☆☆☆☆'.slice(0,5-k)}
function ink(c){var h=String(c).replace('#','');if(h.length===3)h=h.replace(/./g,'$&$&');var n=parseInt(h,16),l=(.299*(n>>16)+.587*(n>>8&255)+.114*(n&255))/255;return l>.6?'#111111':'#ffffff'}

/* ---------- generative art ---------- */
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function art(w){
  if(w.img)return '<img src="'+w.img+'" alt="'+esc(w.t+' by '+w.a)+'" style="width:100%;height:100%;object-fit:cover">';
  var r=rng(w.id*977),p=w.pal||PALS[w.id%PALS.length],i,s='<svg viewBox="0 0 100 125" role="img" aria-label="'+esc(w.t+' by '+w.a)+'"><rect width="100" height="125" fill="'+p[0]+'"/>';
  if(w.k==='circles')for(i=0;i<9;i++)s+='<circle cx="'+(r()*100)+'" cy="'+(r()*125)+'" r="'+(8+r()*28)+'" fill="'+p[1+i%3]+'" opacity=".85"/>';
  if(w.k==='bars')for(i=0;i<7;i++){var h=30+r()*80;s+='<rect x="'+(i*14.5+3)+'" y="'+(125-h)+'" width="10" height="'+h+'" fill="'+p[1+i%3]+'"/>'}
  if(w.k==='waves')for(i=0;i<7;i++){var y=12+i*16,a=6+r()*14;s+='<path d="M-5 '+y+' Q 25 '+(y-a)+' 50 '+y+' T 105 '+y+'" stroke="'+p[1+i%3]+'" stroke-width="6" fill="none"/>'}
  if(w.k==='grid')for(i=0;i<30;i++)if(r()>.25)s+='<rect x="'+((i%5)*19+4)+'" y="'+(Math.floor(i/5)*19+5)+'" width="16" height="16" fill="'+p[1+Math.floor(r()*3)]+'"/>';
  return s+'</svg>'}

/* ---------- settings + routing ---------- */
function apply(){var n=db.set.name;$('#brand').textContent=n;$('#fname').textContent=n;$('#ftxt').textContent=db.set.foot;document.title=n+' – '+db.set.tag}
function route(){var v=(location.hash||'#shop').slice(1);var el=$('#'+v);if(!el||!el.classList.contains('view'))v='shop';
  $$('.view').forEach(function(e){e.classList.toggle('on',e.id===v)});
  $$('[data-v]').forEach(function(a){a.classList.toggle('on',a.dataset.v===v)});
  if(v==='sell')sell();if(v==='admin')admin();window.scrollTo(0,0)}
window.addEventListener('hashchange',route);

/* ---------- slider (7 slides, editable in admin) ---------- */
var si=0,timer=null,paused=false,RM=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
function slider(){var S=db.slides;si=Math.min(si,S.length-1);
  $('#sl').innerHTML=S.map(function(s,i){return '<div class="sl'+(i===si?' on':'')+'" role="group" aria-roledescription="slide" aria-label="'+(i+1)+' of '+S.length+'" style="background:'+esc(s.c1)+';color:'+ink(s.c1)+'"><div class="wrap"><div><h1>'+esc(s.t)+'</h1><p>'+esc(s.s)+'</p><a class="btn" href="'+esc(s.l)+'" style="background:'+esc(s.c2)+';color:'+ink(s.c2)+'">'+esc(s.b)+'</a></div><div class="sa im" style="background:none">'+art({id:200+i,k:s.k,t:s.t,a:'ZARTZ',pal:[s.c1,s.c2,s.c3,ink(s.c1)]})+'</div></div></div>'}).join('');
  $('#dots').innerHTML=S.map(function(s,i){return '<button data-d="'+i+'" aria-label="Go to slide '+(i+1)+'" aria-current="'+(i===si)+'"></button>'}).join('');
  $('#slw').style.color=ink(S[si].c1);play()}
function go(n){var S=db.slides;si=(n+S.length)%S.length;$$('#sl .sl').forEach(function(e,i){e.classList.toggle('on',i===si)});$$('#dots button').forEach(function(b,i){b.setAttribute('aria-current',i===si)});$('#slw').style.color=ink(S[si].c1)}
function play(){clearInterval(timer);if(!RM&&!paused)timer=setInterval(function(){go(si+1)},6000)}
$('#prev').onclick=function(){go(si-1);play()};$('#next').onclick=function(){go(si+1);play()};
$('#dots').onclick=function(e){if(e.target.dataset.d){go(+e.target.dataset.d);play()}};
$('#pp').onclick=function(){paused=!paused;this.textContent=paused?'Play':'Pause';this.setAttribute('aria-label',paused?'Play slides':'Pause slides');play()};
$('#slw').onmouseenter=function(){clearInterval(timer)};$('#slw').onmouseleave=play;
$('#slw').addEventListener('focusin',function(){clearInterval(timer)});$('#slw').addEventListener('focusout',play);

/* ---------- shop ---------- */
var med='All',exf=0;
function chips(){var ms=['All'].concat(live().map(function(w){return w.m}).filter(function(m,i,a){return a.indexOf(m)===i}));
  if(ms.indexOf(med)<0)med='All';
  $('#chips').innerHTML=ms.map(function(m){return '<button class="chip" aria-pressed="'+(m===med)+'">'+esc(m)+'</button>'}).join('')}
$('#chips').onclick=function(e){if(!e.target.classList.contains('chip'))return;med=e.target.textContent;chips();grid()};
$('#q').oninput=grid;$('#sort').onchange=grid;
function grid(){var q=$('#q').value.toLowerCase(),s=$('#sort').value;
  var l=live().filter(function(w){return(!exf||w.ex===exf)&&(med==='All'||w.m===med)&&(w.t+' '+w.a).toLowerCase().indexOf(q)>-1});
  l.sort(function(a,b){return s==='lo'?a.p-b.p:s==='hi'?b.p-a.p:s==='new'?b.id-a.id:avg(b.id)-avg(a.id)});
  $('#count').innerHTML=l.length+' artwork'+(l.length===1?'':'s')+(exf?' from this exhibition. <a href="#shop" id="clr">Show all</a>':'');
  $('#grid').innerHTML=l.length?l.map(function(w){var n=revs(w.id).length;
    return '<button class="art" data-id="'+w.id+'"><div class="im">'+art(w)+'</div><h3>'+esc(w.t)+'</h3><p>'+esc(w.a)+', '+esc(w.y)+'</p><p>'+esc(w.m)+'</p><p><span class="st">'+(n?stars(avg(w.id)):'No reviews yet')+'</span> '+(n?'('+n+')':'')+'</p><p class="pr">'+money(w.p)+'</p></button>'}).join(''):'<p class="mut">No artwork matches. Try a different search.</p>'}
$('#grid').onclick=function(e){var b=e.target.closest('.art');if(b)openW(+b.dataset.id,'r')};
$('#count').onclick=function(e){if(e.target.id==='clr'){e.preventDefault();exf=0;grid()}};

/* ---------- artwork dialog: reviews + feedback ---------- */
var dlg=$('#dlg');
function openW(id,tab){var w=wk(id);if(!w)return;var ex=db.exs.filter(function(x){return x.id===w.ex})[0],rv=revs(id),fb=fbs(id),h;
  h='<button class="x" aria-label="Close" data-x>×</button><div class="dg"><div><div class="im">'+art(w)+'</div></div><div>'+
  '<h2>'+esc(w.t)+'</h2><div>'+esc(w.a)+', '+esc(w.y)+'</div><div class="st" style="margin-top:6px">'+(rv.length?stars(avg(id))+' <span class="mut">'+avg(id).toFixed(1)+' from '+rv.length+'</span>':'<span class="mut">No reviews yet</span>')+'</div>'+
  '<p>'+esc(w.d)+'</p><dl><dt>Medium</dt><dd>'+esc(w.m)+'</dd><dt>Size</dt><dd>'+esc(w.sz)+'</dd><dt>Shown at</dt><dd>'+(ex?esc(ex.t)+', '+esc(ex.m):'Not in an exhibition')+'</dd></dl>'+
  '<div style="display:flex;gap:12px;align-items:center"><b style="font-size:24px">'+money(w.p)+'</b><button class="btn dark" data-add="'+id+'">Add to cart</button></div>'+
  '<div class="tabs" role="tablist"><button role="tab" data-t="r" aria-selected="'+(tab==='r')+'">Reviews ('+rv.length+')</button><button role="tab" data-t="f" aria-selected="'+(tab==='f')+'">Feedback ('+fb.length+')</button></div>';
  if(tab==='r'){
    h+=(rv.length?rv.map(function(x){return '<div class="rv"><b>'+esc(x.n)+'</b><span class="st">'+stars(x.r)+'</span><p>'+esc(x.t)+'</p></div>'}).join(''):'<p class="mut">Be the first to review this work.</p>')+
    '<form id="fr"><div class="row"><input name="n" placeholder="Your name" required maxlength="40" aria-label="Your name"><select name="r" aria-label="Rating"><option value="5">5 stars</option><option value="4">4 stars</option><option value="3">3 stars</option><option value="2">2 stars</option><option value="1">1 star</option></select></div><textarea name="t" placeholder="What did you notice? How does it look in person?" required maxlength="500" aria-label="Review"></textarea><button class="btn" type="submit">Post review</button></form>';
  }else{
    h+='<p class="mut">Feedback goes to the artist and curators. Be specific and kind.</p>'+fb.map(function(x){return '<div class="rv"><b>'+esc(x.n)+'</b><span class="tag">'+esc(x.a)+'</span><p>'+esc(x.t)+'</p></div>'}).join('')+
    '<form id="ff"><div class="row"><input name="n" placeholder="Your name" required maxlength="40" aria-label="Your name"><select name="a" aria-label="Aspect"><option>Composition</option><option>Colour</option><option>Concept</option><option>Technique</option><option>Framing</option></select></div><textarea name="t" placeholder="What worked, and what would you change?" required maxlength="500" aria-label="Feedback"></textarea><button class="btn" type="submit">Send feedback</button></form>';
  }
  dlg.innerHTML=h+'</div></div>';dlg.dataset.id=id;if(!dlg.open)dlg.showModal();
  var f=$('#fr'),g=$('#ff');
  if(f)f.onsubmit=function(e){e.preventDefault();var d=new FormData(f);db.rev.push({w:id,n:d.get('n'),r:+d.get('r'),t:d.get('t')});save();openW(id,'r');grid()};
  if(g)g.onsubmit=function(e){e.preventDefault();var d=new FormData(g);db.fb.push({w:id,n:d.get('n'),a:d.get('a'),t:d.get('t')});save();openW(id,'f')};
}
dlg.onclick=function(e){var t=e.target;
  if(t===dlg||t.hasAttribute('data-x'))dlg.close();
  if(t.dataset.t)openW(+dlg.dataset.id,t.dataset.t);
  if(t.dataset.add){add(+t.dataset.add);t.textContent='Added'}};

/* ---------- cart ---------- */
function add(id){if(db.cart.indexOf(id)<0)db.cart.push(id);save();cart()}
function cart(){db.cart=db.cart.filter(wk);var l=db.cart.map(wk);
  $('#cnt').textContent=l.length;
  $('#items').innerHTML=l.length?l.map(function(w){return '<div class="it"><div class="im">'+art(w)+'</div><div><b>'+esc(w.t)+'</b><br><span class="mut">'+esc(w.a)+'</span><br>'+money(w.p)+'</div><button data-rm="'+w.id+'">Remove</button></div>'}).join(''):'<p class="mut">Your cart is empty. Browse the artwork to add a piece.</p>';
  $('#tot').textContent=money(l.reduce(function(a,w){return a+Number(w.p)},0))}
$('#cartBtn').onclick=function(){$('#cart').hidden=false;$('#msg').textContent=''};
$('#cx').onclick=function(){$('#cart').hidden=true};
$('#items').onclick=function(e){var r=e.target.dataset.rm;if(r){db.cart=db.cart.filter(function(i){return i!==+r});save();cart()}};
$('#pay').onclick=function(){
  if(!db.cart.length){$('#msg').textContent='Add an artwork before checking out.';return}
  $('#payemail').value=localStorage.getItem('zartz_checkout_email')||'';
  $('#paystatus').textContent='';
  $('#paydlg').showModal();
};
$('#payx').onclick=function(){$('#paydlg').close()};
$('#payform').onsubmit=async function(e){
  e.preventDefault();
  var email=$('#payemail').value.trim();
  if(!email)return;
  var items=db.cart.map(wk).filter(Boolean);
  var amount=items.reduce(function(a,w){return a+Number(w.p||0)},0);
  var btn=this.querySelector('button[type="submit"]');
  btn.disabled=true;
  $('#paystatus').textContent='Preparing secure Paystack checkout…';
  try{
    localStorage.setItem('zartz_checkout_email',email);
    var res=await fetch('/api/paystack/initialize',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:email,
        amount:Math.round(amount*100),
        currency:'GHS',
        items:items.map(function(w){return {id:w.id,title:w.t,price:Number(w.p||0),quantity:1}})
      })
    });
    var data=await res.json();
    if(!res.ok||!data.success)throw new Error(data.message||'Unable to initialize payment.');
    $('#paydlg').close();
    var popup=new PaystackPop();
    popup.resumeTransaction(data.access_code);
  }catch(err){
    $('#paystatus').textContent=err.message||'Payment could not be started.';
  }finally{
    btn.disabled=false;
  }
};

/* ---------- journal ---------- */
var cur='All';
function jchips(){var cs=['All'].concat(db.posts.map(function(p){return p.c}).filter(function(c,i,a){return a.indexOf(c)===i}));if(cs.indexOf(cur)<0)cur='All';
  $('#jchips').innerHTML=cs.map(function(c){return '<button class="chip" aria-pressed="'+(c===cur)+'">'+esc(c)+'</button>'}).join('')}
$('#jchips').onclick=function(e){if(!e.target.classList.contains('chip'))return;cur=e.target.textContent;jchips();posts()};
function posts(){var l=db.posts.filter(function(p){return cur==='All'||p.c===cur}).sort(function(a,b){return a.dt<b.dt?1:-1});
  $('#posts').innerHTML=l.length?l.map(function(p){return '<details><summary><div class="meta">'+esc(p.g)+' · '+fmt(p.dt)+' · by '+esc(p.c)+'</div><h3>'+esc(p.t)+'</h3><p>'+esc(p.s)+'</p></summary><div class="body">'+esc(p.b)+'</div></details>'}).join(''):'<p class="mut">No posts yet.</p>'}

/* ---------- exhibitions ---------- */
function status(x){var n=new Date();return n<new Date(x.s)?'soon':n>new Date(x.e+'T23:59:59')?'past':'now'}
function exs(){var q=$('#eq').value.toLowerCase(),s=$('#est').value;
  var l=db.exs.filter(function(x){return(x.m+x.c+x.cu+x.t).toLowerCase().indexOf(q)>-1&&(!s||status(x)===s)}).sort(function(a,b){return a.s<b.s?-1:1});
  $('#exs').innerHTML=l.length?l.map(function(x){var st=status(x),n=live().filter(function(w){return w.ex===x.id}).length;
    return '<article class="ex"><span class="badge '+st+'">'+{now:'On now',soon:'Upcoming',past:'Closed'}[st]+'</span><h3>'+esc(x.t)+'</h3><b>'+esc(x.m)+'</b><span class="mut">'+esc(x.c)+'</span><span>'+fmt(x.s)+' to '+fmt(x.e)+'</span><span class="mut">Curated by '+esc(x.cu)+'. Artists: '+esc(x.ar)+'.</span>'+(n?'<a class="btn" href="#shop" data-ex="'+x.id+'">See '+n+' work'+(n>1?'s':'')+'</a>':'')+'</article>'}).join(''):'<p class="mut">No exhibitions match. Try another city or clear the date filter.</p>'}
$('#eq').oninput=exs;$('#est').onchange=exs;
$('#exs').onclick=function(e){var b=e.target.closest('[data-ex]');if(!b)return;exf=+b.dataset.ex;med='All';$('#q').value='';chips();grid()};

/* ---------- forms: generic builder, image resize ---------- */
function fld(f,v){var n='name="'+f.k+'"',r=f.r?' required':'',val=esc(v),h='<label>'+f.l;
  if(f.t==='area')h+='<textarea '+n+r+'>'+val+'</textarea>';
  else if(f.t==='sel'||f.t==='ex'){var o=f.t==='ex'?[['0','None']].concat(db.exs.map(function(x){return[String(x.id),x.t+' ('+x.m+')']})):f.o.map(function(x){return[x,x]});
    h+='<select '+n+'>'+o.map(function(x){return '<option value="'+esc(x[0])+'"'+(String(v)===x[0]?' selected':'')+'>'+esc(x[1])+'</option>'}).join('')+'</select>'}
  else if(f.t==='img')h+='<input type="file" accept="image/*" data-img><input type="hidden" '+n+' value="'+val+'">'+(v?'<img class="pv" src="'+esc(v)+'" alt="Current image">':'<span class="mut" style="font-weight:400">Optional. JPG or PNG. Resized automatically.</span>');
  else h+='<input '+n+' type="'+({num:'number',date:'date',color:'color',email:'email'}[f.t]||'text')+'" value="'+val+'"'+r+(f.t==='num'?' min="0" step="any"':'')+'>';
  return h+'</label>'}
function read(form,sch){var d=new FormData(form),o={};sch.forEach(function(f){var v=d.get(f.k);o[f.k]=(f.t==='num'||f.t==='ex')?+v:v});return o}
document.addEventListener('change',function(e){var t=e.target;if(!t.dataset||!t.dataset.img||!t.files[0])return;
  var fr=new FileReader();fr.onload=function(){var im=new Image();im.onload=function(){var s=Math.min(1,700/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*s;c.height=im.height*s;c.getContext('2d').drawImage(im,0,0,c.width,c.height);
    var url=c.toDataURL('image/jpeg',.72);t.nextElementSibling.value=url;var p=t.parentNode.querySelector('.pv')||t.parentNode.appendChild(document.createElement('img'));p.className='pv';p.alt='Preview';p.src=url;var sp=t.parentNode.querySelector('span');if(sp)sp.remove()};im.src=fr.result};fr.readAsDataURL(t.files[0])});

/* ---------- sell page (artist signup) ---------- */
var sellMsg='';
var ART=[{k:'t',l:'Title',r:1},{k:'m',l:'Medium',t:'sel',o:['Painting','Print','Drawing','Sculpture','Photography','Mixed media']},{k:'y',l:'Year',t:'num',r:1},{k:'sz',l:'Size (for example 60 × 80 cm)',r:1},{k:'p',l:'Your asking price (USD)',t:'num',r:1},{k:'d',l:'Description',t:'area',r:1},{k:'img',l:'Photo of the work',t:'img'}];
function sell(){var me=db.artists.filter(function(a){return a.id===db.me})[0],h='<h2>Sell your art on '+esc(db.set.name)+'</h2><p class="sub">Join as an artist, list your work and reach collectors who read, review and give feedback.</p><div class="two"><div><h3>How it works</h3><ul class="ul"><li>Create your artist profile.</li><li>Submit each artwork with a photo, size and price.</li><li>Our curators review it, usually within three days.</li><li>Approved works go live in the shop and can join exhibitions.</li><li>You set your price. '+esc(db.set.name)+' takes a 30% commission when a work sells (demo terms).</li></ul>';
  if(me){var mine=db.works.filter(function(w){return w.by===me.id});
    h+='<h3>Your submissions</h3>'+(mine.length?mine.map(function(w){return '<div class="row2"><div><b>'+esc(w.t)+'</b><br><span class="mut">'+money(w.p)+'</span></div><span class="pill" style="'+(w.st==='pending'?'':'background:#9be3b4')+'">'+(w.st==='pending'?'In review':'Live')+'</span></div>'}).join(''):'<p class="mut">Nothing submitted yet.</p>')}
  h+='</div><div>';
  if(!me)h+='<h3>1. Create your artist profile</h3><form id="sp" class="pf"><label>Full or artist name<input name="name" required maxlength="60"></label><label>Email<input name="email" type="email" required></label><label>Country<input name="country" required></label><label>Website or Instagram<input name="site"></label><label>About your work<textarea name="bio" required maxlength="600"></textarea></label><button class="btn dark" type="submit">Create profile</button></form>';
  else h+='<div class="note">Signed in as <b>'+esc(me.name)+'</b> ('+esc(me.email)+'). <a href="#sell" id="so">Use a different profile</a></div><h3>2. Submit an artwork</h3>'+(sellMsg?'<div class="note" role="status">'+esc(sellMsg)+'</div>':'')+'<form id="sa" class="af">'+ART.map(function(f){return fld(f,f.k==='y'?2026:f.k==='m'?'Painting':'')}).join('')+'<div><button class="btn dark" type="submit">Submit for review</button></div></form>';
  $('#sell').innerHTML=h+'</div></div>';
  var sp=$('#sp'),sa=$('#sa'),so=$('#so');
  if(sp)sp.onsubmit=function(e){e.preventDefault();var d=new FormData(sp),a={id:nid(),name:d.get('name'),email:d.get('email'),country:d.get('country'),site:d.get('site'),bio:d.get('bio'),dt:today()};db.artists.push(a);db.me=a.id;sellMsg='';save();sell()};
  if(so)so.onclick=function(e){e.preventDefault();db.me=0;save();sell()};
  if(sa)sa.onsubmit=function(e){e.preventDefault();var o=read(sa,ART);o.id=nid();o.a=me.name;o.k=['circles','bars','waves','grid'][o.id%4];o.pal=PALS[o.id%PALS.length];o.ex=0;o.st='pending';o.by=me.id;db.works.push(o);if(save()){sellMsg='Thanks. “'+o.t+'” is in review. We will publish it once a curator has approved it.'}else db.works.pop();sell();refresh(true)};
}

/* ---------- admin panel ---------- */
var SW=[{k:'t',l:'Title',r:1},{k:'a',l:'Artist',r:1},{k:'m',l:'Medium',t:'sel',o:['Painting','Print','Drawing','Sculpture','Photography','Mixed media']},{k:'y',l:'Year',t:'num',d:2026},{k:'sz',l:'Size'},{k:'p',l:'Price (USD)',t:'num',r:1},{k:'d',l:'Description',t:'area'},{k:'img',l:'Image',t:'img'},{k:'k',l:'Generated style (when no image)',t:'sel',o:['circles','bars','waves','grid']},{k:'ex',l:'Exhibition',t:'ex'},{k:'st',l:'Status',t:'sel',o:['live','pending']}];
var SP=[{k:'t',l:'Title',r:1},{k:'c',l:'Curator',r:1},{k:'g',l:'Category',t:'sel',o:['Essay','Practice','Studio visit','Guide','News']},{k:'dt',l:'Date',t:'date'},{k:'s',l:'Summary',t:'area',r:1},{k:'b',l:'Post body',t:'area',r:1}];
var SX=[{k:'t',l:'Exhibition title',r:1},{k:'m',l:'Museum',r:1},{k:'c',l:'City and country',r:1},{k:'cu',l:'Curator',r:1},{k:'s',l:'Opens',t:'date',r:1},{k:'e',l:'Closes',t:'date',r:1},{k:'ar',l:'Artists (comma separated)'}];
var SS=[{k:'t',l:'Headline',r:1},{k:'s',l:'Text',t:'area'},{k:'b',l:'Button label',r:1},{k:'l',l:'Button goes to',t:'sel',o:['#shop','#journal','#exhibitions','#sell']},{k:'k',l:'Art style',t:'sel',o:['circles','bars','waves','grid']},{k:'c1',l:'Background colour',t:'color'},{k:'c2',l:'Button colour',t:'color'},{k:'c3',l:'Art colour',t:'color'}];
var SSET=[{k:'name',l:'Company name',r:1},{k:'tag',l:'Tagline'},{k:'foot',l:'Footer text'},{k:'pass',l:'Admin passcode',r:1}];
var tab='works',edit=null,adminErr='';
function refresh(keepAdmin){apply();slider();chips();grid();jchips();posts();exs();cart();if(!keepAdmin&&location.hash==='#admin')admin()}
function crud(key,title,sch,row,fixed){var L=db[key],it=edit!=null?L.filter(function(x){return x.id===edit})[0]:null;
  var h='<h3>'+title+' ('+L.length+')</h3><div>'+L.map(function(x){var r=row(x);return '<div class="row2"><div><b>'+esc(r[0])+'</b>'+(x.st==='pending'?'<span class="pill">Pending</span>':'')+'<br><span class="mut">'+esc(r[1])+'</span></div><div class="acts">'+(x.st==='pending'?'<button class="btn dark" data-ap="'+x.id+'">Approve</button>':'')+'<button class="btn" data-ed="'+x.id+'">Edit</button>'+(fixed?'':'<button class="btn" data-del="'+x.id+'">Delete</button>')+'</div></div>'}).join('')+'</div>';
  if(fixed&&!it)return h+'<p class="note">Choose Edit on a slide to change its text, button, link and colours.</p>';
  return h+'<h3>'+(it?'Edit':'Add new')+'</h3><form id="af" class="af">'+sch.map(function(f){return fld(f,it?it[f.k]:(f.k==='dt'?today():f.k==='st'?'live':f.k==='y'?2026:f.d))}).join('')+'<div><button class="btn dark" type="submit">'+(it?'Save changes':'Add')+'</button>'+(it?' <button class="btn" type="button" data-cancel>Cancel</button>':'')+'</div></form>'}
function admin(){var el=$('#admin');
  if(!sessionStorage.getItem('zadm')){el.innerHTML='<h2>Admin</h2><p class="sub">Enter the passcode to manage the site.</p><form id="lg" class="pf" style="max-width:340px"><label>Passcode<input type="password" name="p" required autocomplete="off"></label>'+(adminErr?'<div class="note" role="alert">'+adminErr+'</div>':'')+'<button class="btn dark" type="submit">Sign in</button><p class="mut" style="font-size:13px">Demo passcode: <b>zartz-admin</b></p></form>';
    $('#lg').onsubmit=function(e){e.preventDefault();if(new FormData(this).get('p')===db.set.pass){sessionStorage.setItem('zadm','1');adminErr=''}else adminErr='Incorrect passcode. Try again.';admin()};return}
  var pend=db.works.filter(function(w){return w.st==='pending'}).length,T=[['works','Artwork'+(pend?' ('+pend+' pending)':'')],['posts','Journal'],['exs','Exhibitions'],['slides','Slides'],['rev','Reviews'],['set','Site']];
  var h='<h2>Admin</h2><div class="adtabs" role="tablist">'+T.map(function(t){return '<button role="tab" data-tab="'+t[0]+'" aria-selected="'+(tab===t[0])+'">'+t[1]+'</button>'}).join('')+'<button data-out style="margin-left:auto">Sign out</button></div>';
  if(tab==='works')h+=crud('works','All artwork',SW,function(w){return[w.t+' – '+w.a,money(w.p)+' · '+w.m+(w.by?' · artist submission':'')]});
  if(tab==='posts')h+=crud('posts','Curators’ Journal',SP,function(p){return[p.t,fmt(p.dt)+' · '+p.c+' · '+p.g]});
  if(tab==='exs')h+=crud('exs','Exhibitions',SX,function(x){return[x.t+' at '+x.m,x.c+' · '+fmt(x.s)+' to '+fmt(x.e)]});
  if(tab==='slides')h+=crud('slides','Homepage slides (7)',SS,function(s){return[s.t,s.b+' → '+s.l]},true);
  if(tab==='rev')h+='<h3>Reviews ('+db.rev.length+')</h3>'+db.rev.map(function(r,i){var w=wk(r.w);return '<div class="row2"><div><b>'+esc(r.n)+'</b> <span class="st">'+stars(r.r)+'</span> on '+esc(w?w.t:'removed work')+'<br><span class="mut">'+esc(r.t)+'</span></div><button class="btn sm" data-rd="'+i+'">Delete</button></div>'}).join('')+'<h3>Feedback ('+db.fb.length+')</h3>'+db.fb.map(function(r,i){var w=wk(r.w);return '<div class="row2"><div><b>'+esc(r.n)+'</b><span class="tag">'+esc(r.a)+'</span> on '+esc(w?w.t:'removed work')+'<br><span class="mut">'+esc(r.t)+'</span></div><button class="btn sm" data-fd="'+i+'">Delete</button></div>'}).join('')+'<h3>Artist signups ('+db.artists.length+')</h3>'+(db.artists.length?db.artists.map(function(a){return '<div class="row2"><div><b>'+esc(a.name)+'</b> · '+esc(a.country)+'<br><span class="mut">'+esc(a.email)+' · '+esc(a.bio)+'</span></div></div>'}).join(''):'<p class="mut">No artists have signed up yet.</p>');
  if(tab==='set')h+='<h3>Site settings</h3><form id="af" class="af">'+SSET.map(function(f){return fld(f,db.set[f.k])}).join('')+'<div><button class="btn dark" type="submit">Save settings</button></div></form><h3>Reset</h3><p class="mut">Restore the original demo content. This removes all your changes, reviews and artist submissions.</p><button class="btn" data-reset>Reset demo data</button>';
  el.innerHTML=h;
  var f=$('#af');if(f)f.onsubmit=function(e){e.preventDefault();
    if(tab==='set'){Object.assign(db.set,read(f,SSET));save();refresh(true);admin();return}
    var sch={works:SW,posts:SP,exs:SX,slides:SS}[tab],o=read(f,sch),L=db[tab];
    if(edit!=null)Object.assign(L.filter(function(x){return x.id===edit})[0],o);
    else{o.id=nid();if(tab==='works')o.pal=PALS[o.id%PALS.length];L.push(o)}
    edit=null;save();refresh(true);admin()}}
$('#admin').onclick=function(e){var d=e.target.dataset;if(!d)return;
  var L=db[tab]||[],changed=false;
  if(d.tab){tab=d.tab;edit=null;admin();return}
  if(d.out!==undefined){sessionStorage.removeItem('zadm');admin();return}
  if(d.ed){edit=+d.ed;admin();$('#af').scrollIntoView({block:'center'});return}
  if(d.cancel!==undefined){edit=null;admin();return}
  if(d.ap){wk(+d.ap).st='live';changed=true}
  if(d.del&&confirm('Delete this item? This cannot be undone.')){db[tab]=L.filter(function(x){return x.id!==+d.del});changed=true}
  if(d.rd){db.rev.splice(+d.rd,1);changed=true}
  if(d.fd){db.fb.splice(+d.fd,1);changed=true}
  if(d.reset!==undefined&&confirm('Reset everything to the original demo content?')){var p=db.set.pass;db=seed();db.set.pass=p;changed=true}
  if(changed){save();refresh(true);admin()}};

/* ---------- payment return ---------- */
async function verifyReturnedPayment(){
  var p=new URLSearchParams(location.search),ref=p.get('reference')||p.get('trxref');
  if(!ref)return;
  var msg=$('#msg');
  if(msg)msg.textContent='Verifying Paystack payment…';
  try{
    var res=await fetch('/api/paystack/verify?reference='+encodeURIComponent(ref));
    var data=await res.json();
    if(data.success&&data.status==='success'){
      db.cart=[];save();cart();
      if(msg)msg.textContent='Payment successful. Reference: '+ref;
      history.replaceState({},document.title,location.pathname+location.hash);
    }else if(msg){
      msg.textContent='Payment was not completed. Reference: '+ref;
    }
  }catch(e){
    if(msg)msg.textContent='Payment verification could not be completed yet. Reference: '+ref;
  }
}

/* ---------- start ---------- */
$('#grid').addEventListener('keydown',function(){});
refresh(true);route();verifyReturnedPayment();
})();
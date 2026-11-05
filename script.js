/* داده‌های سایت را از این قسمت ویرایش کن. هیچ سابقه یا مدرکی به‌صورت پیش‌فرض تأییدشده فرض نشده است. */
const portfolioData = {
  roles: ["مهندسی شبکه", "فناوری اطلاعات", "زیرساخت و تکنولوژی"],
  skills: [
    {name:"Network+",icon:"N+",category:"مفاهیم پایه شبکه",level:55,label:"در حال یادگیری"},
    {name:"CCNA",icon:"CC",category:"Cisco Networking",level:50,label:"در حال یادگیری"},
    {name:"CCNP Enterprise",icon:"EN",category:"Enterprise Networking",level:25,label:"در حال یادگیری"},
    {name:"Linux",icon:"⌘",category:"سیستم‌عامل و خط فرمان",level:35,label:"در حال یادگیری"},
    {name:"Python",icon:"Py",category:"برنامه‌نویسی و اتوماسیون",level:25,label:"در حال یادگیری"},
    {name:"Troubleshooting",icon:"⌕",category:"عیب‌یابی شبکه",level:45,label:"در حال یادگیری"},
    {name:"Routing & Switching",icon:"⇄",category:"مسیریابی و سوئیچینگ",level:50,label:"در حال یادگیری"},
    {name:"Cisco Networking",icon:"C",category:"تجهیزات و فناوری‌های سیسکو",level:45,label:"در حال یادگیری"}
  ],
  labs: [
    {title:"طراحی شبکه LAN",desc:"سناریوی طراحی شبکه محلی و تقسیم‌بندی منطقی شبکه.",status:"قابل تکمیل"},
    {title:"VLAN & Inter-VLAN Routing",desc:"تمرین مفاهیم VLAN و ارتباط بین شبکه‌های مجازی.",status:"قابل تکمیل"},
    {title:"Static & Dynamic Routing",desc:"تمرین مسیریابی و بررسی مسیرهای شبکه.",status:"قابل تکمیل"},
    {title:"Network Troubleshooting",desc:"مستندسازی روند عیب‌یابی و تحلیل مشکلات رایج.",status:"قابل تکمیل"}
  ],
  projects: [
    {title:"پروژه شبکه نمونه",desc:"توضیح کوتاه درباره توپولوژی، هدف پروژه، ابزارها و نتیجه‌ای که به دست آمده است.",tags:["Cisco","Networking"],symbol:"⌘",url:""},
    {title:"اسکریپت اتوماسیون شبکه",desc:"شرح اسکریپت پایتون، مسئله‌ای که حل می‌کند و نحوه اجرا یا مشاهده کد.",tags:["Python","Automation"],symbol:"{ }",url:""},
    {title:"لابراتوار لینوکس",desc:"مستندات تمرین‌های لینوکس، سرویس‌ها و دستورات مهم استفاده‌شده.",tags:["Linux","CLI"],symbol:"$_",url:""}
  ],
  certifications: [
    {name:"CompTIA Network+",code:"N+",status:"وضعیت مدرک را وارد کنید",detail:"نام مرکز صادرکننده / تاریخ دریافت را اضافه کنید."},
    {name:"Cisco CCNA",code:"CCNA",status:"وضعیت مدرک را وارد کنید",detail:"شماره اعتبارسنجی یا تاریخ دریافت (در صورت وجود)."},
    {name:"Cisco CCNP Enterprise",code:"CCNP",status:"وضعیت مدرک را وارد کنید",detail:"وضعیت واقعی مدرک یا مسیر مطالعه را مشخص کنید."}
  ],
  timeline: [
    {date:"مرحله ۰۱",title:"شروع مسیر شبکه",desc:"تاریخ و جزئیات شروع یادگیری خود را اینجا وارد کن."},
    {date:"مرحله ۰۲",title:"مطالعه مفاهیم Cisco و CCNA",desc:"موضوعات مطالعه‌شده، دوره‌ها و تمرین‌های واقعی را اضافه کن."},
    {date:"مرحله ۰۳",title:"تمرین عملی و لابراتوار",desc:"سناریوها، پروژه‌ها و دستاوردهای قابل ارائه را ثبت کن."}
  ],
  contact: {
    email:"your.email@example.com",
    github:"https://github.com/your-username",
    linkedin:"https://www.linkedin.com/in/your-profile",
    telegram:"https://t.me/your-username"
  }
};

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

function renderSkills(){
  $("#skillsGrid").innerHTML = portfolioData.skills.map((s,i)=>`
    <article class="skill-card reveal">
      <div class="skill-top"><span class="skill-icon">${s.icon}</span><span class="skill-level">${s.level}%</span></div>
      <h3>${s.name}</h3><p>${s.category} · ${s.label}</p>
      <div class="skill-track"><span data-width="${Math.max(0,Math.min(100,s.level))}%"></span></div>
    </article>`).join("");
}
function renderLabs(){
  $("#labList").innerHTML = portfolioData.labs.map((l,i)=>`
    <article class="lab-item reveal"><span class="lab-number">0${i+1}</span><div><h4>${l.title}</h4><p>${l.desc}</p></div><span class="lab-status">${l.status}</span></article>`).join("");
}
function renderProjects(){
  $("#projectsGrid").innerHTML = portfolioData.projects.map(p=>`
    <article class="project-card reveal"><div class="project-art"><span>${p.symbol}</span></div><div class="project-content"><h3>${p.title}</h3><p>${p.desc}</p><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    ${p.url ? `<a class="project-link" href="${p.url}" target="_blank" rel="noopener noreferrer">مشاهده در GitHub ↗</a>` : `<span class="project-link disabled">لینک پروژه هنوز ثبت نشده</span>`}</div></article>`).join("");
}
function renderCerts(){
  $("#certGrid").innerHTML = portfolioData.certifications.map(c=>`
    <article class="cert-card reveal"><div class="cert-badge">${c.code}</div><div><h3>${c.name}</h3><p>${c.detail}</p><span class="cert-status">${c.status}</span></div></article>`).join("");
}
function renderTimeline(){
  $("#timelineList").innerHTML = portfolioData.timeline.map(t=>`
    <article class="timeline-item reveal"><span class="timeline-date">${t.date}</span><h3>${t.title}</h3><p>${t.desc}</p></article>`).join("");
}
function renderContact(){
  const items=[
    ["@", "Email", portfolioData.contact.email, `mailto:${portfolioData.contact.email}`],
    ["GH", "GitHub", "مشاهده پروفایل", portfolioData.contact.github],
    ["in", "LinkedIn", "مشاهده پروفایل", portfolioData.contact.linkedin],
    ["TG", "Telegram", "ارسال پیام", portfolioData.contact.telegram]
  ];
  $("#contactLinks").innerHTML=items.map(([icon,label,value,href])=>
    `<a class="contact-link" href="${href}" ${href.startsWith("http")?'target="_blank" rel="noopener noreferrer"':''}><b>${icon}</b><span><strong>${label}</strong> · ${value}</span></a>`).join("");
}
function setupReveal(){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        entry.target.querySelectorAll(".skill-track span").forEach(bar=>bar.style.width=bar.dataset.width);
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  $$(".reveal").forEach(el=>observer.observe(el));
}
function setupNavigation(){
  const toggle=$("#menuToggle"),nav=$("#mainNav");
  toggle.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"بستن منو":"باز کردن منو");
  });
  $$("a",nav).forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
  const sections=$$("main section[id]");
  const navObserver=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){$$(".main-nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${e.target.id}`))}
  }),{rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(s=>navObserver.observe(s));
}
function setupTheme(){
  const saved=localStorage.getItem("arman-theme");
  if(saved==="light")document.documentElement.dataset.theme="light";
  const button=$("#themeToggle");
  const update=()=>{const light=document.documentElement.dataset.theme==="light";$(".theme-icon",button).textContent=light?"☾":"☼";$(".theme-label",button).textContent=light?"تاریک":"روشنایی";};
  update();
  button.addEventListener("click",()=>{
    const light=document.documentElement.dataset.theme!=="light";
    if(light)document.documentElement.dataset.theme="light";else delete document.documentElement.dataset.theme;
    localStorage.setItem("arman-theme",light?"light":"dark");update();
  });
}
function setupTypedText(){
  const target=$("#typedText");let role=0,pos=0,deleting=false;
  function tick(){
    const word=portfolioData.roles[role];
    target.textContent=word.slice(0,pos);
    if(!deleting&&pos<word.length)pos++;
    else if(deleting&&pos>0)pos--;
    else if(!deleting){deleting=true;setTimeout(tick,1200);return;}
    else{deleting=false;role=(role+1)%portfolioData.roles.length;}
    setTimeout(tick,deleting?55:100);
  } tick();
}
function terminalWrite(text,cls="terminal-response"){
  const p=document.createElement("p");p.className=cls;p.textContent=text;$("#terminalOutput").append(p);$("#terminalOutput").scrollTop=$("#terminalOutput").scrollHeight;
}
function setupTerminal(){
  $("#terminalForm").addEventListener("submit",e=>{
    e.preventDefault();const input=$("#terminalInput"),cmd=input.value.trim().toLowerCase();if(!cmd)return;
    terminalWrite(`visitor@arman:~$ ${cmd}`,"terminal-command");input.value="";
    const commands={
      help:()=>["دستورهای در دسترس: help, about, skills, projects, contact, clear"],
      about:()=>["من آرمان هستم؛ علاقه‌مند به مهندسی شبکه، IT و تکنولوژی.","این پورتفولیو برای نمایش مسیر یادگیری و پروژه‌های واقعی ساخته شده است."],
      skills:()=>portfolioData.skills.map(s=>`${s.name} — ${s.label}`),
      projects:()=>portfolioData.projects.map(p=>p.title),
      contact:()=>[`Email: ${portfolioData.contact.email}`,`GitHub: ${portfolioData.contact.github}`],
      clear:()=>{ $("#terminalOutput").innerHTML="";return []; }
    };
    if(commands[cmd])commands[cmd]().forEach(line=>terminalWrite(line));
    else terminalWrite(`دستور «${cmd}» شناخته نشد. برای راهنما help را وارد کن.`);
  });
  $("#clearTerminal").addEventListener("click",()=>$("#terminalOutput").innerHTML="");
}
function setupContactForm(){
  $("#contactForm").addEventListener("submit",e=>{
    e.preventDefault();const form=e.currentTarget;
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const subject=encodeURIComponent(`پیام از پورتفولیوی آرمان: ${data.get("name")}`);
    const body=encodeURIComponent(`نام: ${data.get("name")}\nایمیل: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href=`mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
  });
}
function setupBackToTop(){
  const button=$("#toTop");
  window.addEventListener("scroll",()=>button.classList.toggle("show",window.scrollY>500),{passive:true});
  button.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  $("#year").textContent=new Date().getFullYear();
}
document.addEventListener("DOMContentLoaded",()=>{
  renderSkills();renderLabs();renderProjects();renderCerts();renderTimeline();renderContact();
  setupNavigation();setupTheme();setupTypedText();setupTerminal();setupContactForm();setupBackToTop();setupReveal();
});

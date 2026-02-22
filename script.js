:root{
  --bg:#0b1220;
  --panel:#121a2b;
  --border:#22304f;
  --text:#e9eefc;
  --muted:#b6c2e2;
  --accent:#4ea5ff;
  --danger:#ff5a6a;
  --ok:#49d17d;
}

*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:Arial, sans-serif;background:var(--bg);color:var(--text);line-height:1.6;}
.container{max-width:1000px;margin:0 auto;padding:24px 18px;}
a{color:var(--accent);text-decoration:none;}
a:hover{text-decoration:underline;}

.header{position:sticky;top:0;background:rgba(11,18,32,.85);border-bottom:1px solid var(--border);backdrop-filter:blur(10px);}
.nav{display:flex;justify-content:space-between;align-items:center;}
.logo{font-size:20px;font-weight:700;color:var(--text);}
.logo span{color:var(--accent);}

.btn{display:inline-block;background:var(--accent);color:#081224;padding:10px 14px;border-radius:10px;font-weight:700;border:1px solid transparent;cursor:pointer;}
.btn:hover{opacity:.92;}
.btn-outline{background:transparent;color:var(--text);border:1px solid var(--border);}
.btn-danger{background:transparent;color:var(--danger);border:1px solid rgba(255,90,106,.35);}
.btn-danger:hover{background:rgba(255,90,106,.08);}

.hero{display:grid;grid-template-columns:1.3fr .7fr;gap:18px;padding:22px 0 8px;}
.hero h1{font-size:34px;line-height:1.15;margin-bottom:8px;}
.hero-card{background:var(--panel);border:1px solid var(--border);border-radius:14px;padding:18px;height:fit-content;}
.muted{color:var(--muted);}
.small{font-size:13px;margin-top:10px;}

.section{padding:18px 0;}
.section h2{font-size:22px;margin-bottom:10px;}

.form{display:flex;gap:10px;flex-wrap:wrap;margin:12px 0 12px;}
.form input{
  flex:1;
  min-width:220px;
  padding:12px 12px;
  border-radius:12px;
  border:1px solid var(--border);
  background:rgba(255,255,255,.02);
  color:var(--text);
  outline:none;
}
.form input:focus{border-color:rgba(78,165,255,.5);}

.toolbar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:10px 0 6px;}
.filters{display:flex;gap:8px;flex-wrap:wrap;}
.chip{
  padding:8px 12px;
  border-radius:999px;
  border:1px solid var(--border);
  background:transparent;
  color:var(--text);
  cursor:pointer;
  font-size:13px;
}
.chip.active{border-color:rgba(78,165,255,.5);background:rgba(78,165,255,.10);}

.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:12px;}
.card{
  background:var(--panel);
  border:1px solid var(--border);
  border-radius:14px;
  padding:14px;
  display:flex;
  justify-content:space-between;
  gap:12px;
}
.task{
  display:flex;
  flex-direction:column;
  gap:4px;
  cursor:pointer;
}
.task-title{font-weight:700;}
.task-meta{font-size:12px;color:var(--muted);}

.done .task-title{text-decoration:line-through;opacity:.7;}
.badge{
  display:inline-block;
  font-size:12px;
  padding:4px 10px;
  border-radius:999px;
  border:1px solid var(--border);
  color:var(--muted);
}
.badge.ok{border-color:rgba(73,209,125,.35);color:var(--ok);background:rgba(73,209,125,.08);}

.actions{display:flex;gap:8px;align-items:flex-start;}
.actions button{padding:8px 10px;border-radius:10px;font-weight:700;}

.list{margin-left:18px;color:var(--muted);}
.footer{border-top:1px solid var(--border);margin-top:12px;}
.footer p{color:var(--muted);}

@media (max-width: 860px){
  .hero{grid-template-columns:1fr;}
  .grid{grid-template-columns:1fr;}
  .hero h1{font-size:28px;}
}

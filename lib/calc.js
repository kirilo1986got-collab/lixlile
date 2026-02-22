// Library v2.0 - Calculator Logic
const d = document.getElementById('display');
const a = (v) => { if(d.value=='0') d.value=v; else d.value+=v; };
const c = () => { d.value='0'; };
const e = () => { try { d.value = eval(d.value); } catch { d.value = 'Error'; setTimeout(c, 1000); } };

const {test}=require('node:test');const assert=require('node:assert/strict');const C=require('../core.js');
test('flags invisible characters',()=>assert.equal(C.inspect(['report\u200b.pdf']).findings[0].kind,'invisible-character'));
test('flags normalized duplicates',()=>assert.ok(C.inspect(['A.pdf','a.pdf']).findings.some(x=>x.kind==='normalized-duplicate')));
test('normalizes every invisible character in duplicate keys',()=>assert.ok(C.inspect(['a\u200b\u200c.pdf','A.pdf']).findings.some(x=>x.kind==='normalized-duplicate')));
test('flags double and executable extensions',()=>{const f=C.inspect(['invoice.pdf.exe']).findings.map(x=>x.kind);assert.ok(f.includes('double-extension')&&f.includes('executable-extension'));});
test('flags path characters and trailing dots',()=>{const f=C.inspect(['a/b.']).findings.map(x=>x.kind);assert.ok(f.includes('path-character')&&f.includes('trailing-space-or-dot'));});
test('flags missing extensions',()=>assert.equal(C.inspect(['readme']).findings[0].kind,'no-extension'));
test('ordinary names pass',()=>assert.equal(C.inspect(['invoice-2026.pdf','photo.jpg']).ready,true));
test('report declares content boundary',()=>assert.match(C.report(C.inspect(['a.pdf'])),/does not inspect file contents/));

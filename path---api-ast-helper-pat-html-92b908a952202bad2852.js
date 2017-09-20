webpackJsonp([354],{"./node_modules/json-loader/index.js!./.cache/json/api-ast-helper-pat-html.json":function(t,e){t.exports={data:{file:{relativePath:"api/Ast_helper.Pat.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Ast_helper.Typ.html" title="Ast_helper.Typ">Previous</a>\n&#xA0;<a class="up" href="Ast_helper.html" title="Ast_helper">Up</a>\n&#xA0;<a class="post" href="Ast_helper.Exp.html" title="Ast_helper.Exp">Next</a>\n</div>\n<h1>Module <a href="type_Ast_helper.Pat.html">Ast_helper.Pat</a></h1>\n\n<pre><span class="keyword">module</span> Pat: sig .. end</pre><div class="info module top">\nPatterns<br>\n</div>\n<hr width="100%">\n\n<pre id="VALmk"><span class="keyword">let</span> mk:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Parsetree.pattern_desc =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALattr"><span class="keyword">let</span> attr: Parsetree.pattern =&gt; Parsetree.attribute =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALany"><span class="keyword">let</span> any: loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; unit =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALvar"><span class="keyword">let</span> var: loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Ast_helper.str =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALalias"><span class="keyword">let</span> alias:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.pattern =&gt;\n  Ast_helper.str =&gt;\n  Parsetree.pattern;\n</pre>\n<pre id="VALconstant"><span class="keyword">let</span> constant:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Asttypes.constant =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALinterval"><span class="keyword">let</span> interval:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Asttypes.constant =&gt;\n  Asttypes.constant =&gt;\n  Parsetree.pattern;\n</pre>\n<pre id="VALtuple"><span class="keyword">let</span> tuple:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; list Parsetree.pattern =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALconstruct"><span class="keyword">let</span> construct:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Ast_helper.lid =&gt;\n  option Parsetree.pattern =&gt;\n  Parsetree.pattern;\n</pre>\n<pre id="VALvariant"><span class="keyword">let</span> variant:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Asttypes.label =&gt;\n  option Parsetree.pattern =&gt;\n  Parsetree.pattern;\n</pre>\n<pre id="VALrecord"><span class="keyword">let</span> record:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  list (Ast_helper.lid, Parsetree.pattern) =&gt;\n  Asttypes.closed_flag =&gt;\n  Parsetree.pattern;\n</pre>\n<pre id="VALarray"><span class="keyword">let</span> array:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; list Parsetree.pattern =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALor_"><span class="keyword">let</span> or_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.pattern =&gt;\n  Parsetree.pattern =&gt;\n  Parsetree.pattern;\n</pre>\n<pre id="VALconstraint_"><span class="keyword">let</span> constraint_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.pattern =&gt;\n  Parsetree.core_type =&gt;\n  Parsetree.pattern;\n</pre>\n<pre id="VALtype_"><span class="keyword">let</span> type_: loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Ast_helper.lid =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALlazy_"><span class="keyword">let</span> lazy_:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Parsetree.pattern =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALunpack"><span class="keyword">let</span> unpack:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Ast_helper.str =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALexception_"><span class="keyword">let</span> exception_:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Parsetree.pattern =&gt; Parsetree.pattern;\n</pre>\n<pre id="VALextension"><span class="keyword">let</span> extension:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Parsetree.extension =&gt; Parsetree.pattern;\n</pre></div>'}}},pathContext:{relativePath:"api/Ast_helper.Pat.html"}}}});
//# sourceMappingURL=path---api-ast-helper-pat-html-92b908a952202bad2852.js.map
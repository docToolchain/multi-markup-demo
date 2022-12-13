var documents = [

{
    "id": 0,
    "uri": "demo/html.html",
    "menu": "null",
    "title": "null",
    "text": " HTML Demo rendering HTML is useful to include other markup renderer like restructuredText. cell1 cell2 "
},

{
    "id": 1,
    "uri": "demo/markdown.html",
    "menu": "null",
    "title": "null",
    "text": " Markdown Demo Markdown: Syntax Note: This document is itself written using Markdown; you can see the source for it by adding '.text' to the URL . shell ls a b c d e f g h i Overview Philosophy Markdown is intended to be as easy-to-read and easy-to-write as is feasible. Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions. While Markdown's syntax has been influenced by several existing text-to-HTML filters -- including Setext , atx , Textile , reStructuredText , Grutatext , and EtText -- the single biggest source of inspiration for Markdown's syntax is the format of plain text email. Block Elements Paragraphs and Line Breaks A paragraph is simply one or more consecutive lines of text, separated by one or more blank lines. (A blank line is any line that looks like a blank line -- a line containing nothing but spaces or tabs is considered blank.) Normal paragraphs should not be indented with spaces or tabs. The implication of the &quot;one or more consecutive lines of text&quot; rule is that Markdown supports &quot;hard-wrapped&quot; text paragraphs. This differs significantly from most other text-to-HTML formatters (including Movable Type's &quot;Convert Line Breaks&quot; option) which translate every line break character in a paragraph into a &lt;br /&gt; tag. When you do want to insert a &lt;br /&gt; break tag using Markdown, you end a line with two or more spaces, then type return. Headers Markdown supports two styles of headers, [Setext] [1] and [atx] [2]. Optionally, you may &quot;close&quot; atx-style headers. This is purely cosmetic -- you can use this if you think it looks better. The closing hashes don't even need to match the number of hashes used to open the header. (The number of opening hashes determines the header level.) Blockquotes Markdown uses email-style &gt; characters for blockquoting. If you're familiar with quoting passages of text in an email message, then you know how to create a blockquote in Markdown. It looks best if you hard wrap the text and put a &gt; before every line: This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. Markdown allows you to be lazy and only put the &gt; before the first line of a hard-wrapped paragraph: This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding additional levels of &gt; : This is the first level of quoting. This is nested blockquote. Back to the first level. Blockquotes can contain other Markdown elements, including headers, lists, and code blocks: This is a header. This is the first list item. This is the second list item. Here's some example code: return shell_exec(&quot;echo $input | $markdown_script&quot;); Any decent text editor should make email-style quoting easy. For example, with BBEdit, you can make a selection and choose Increase Quote Level from the Text menu. Lists Markdown supports ordered (numbered) and unordered (bulleted) lists. Unordered lists use asterisks, pluses, and hyphens -- interchangably -- as list markers: Red Green Blue is equivalent to: Red Green Blue and: Red Green Blue Ordered lists use numbers followed by periods: Bird McHale Parish It's important to note that the actual numbers you use to mark the list have no effect on the HTML output Markdown produces. The HTML Markdown produces from the above list is: If you instead wrote the list in Markdown like this: Bird McHale Parish or even: Bird McHale Parish you'd get the exact same HTML output. The point is, if you want to, you can use ordinal numbers in your ordered Markdown lists, so that the numbers in your source match the numbers in your published HTML. But if you want to be lazy, you don't have to. To make lists look nice, you can wrap items with hanging indents: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. But if you want to be lazy, you don't have to: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. List items may consist of multiple paragraphs. Each subsequent paragraph in a list item must be indented by either 4 spaces or one tab: This is a list item with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. It looks nice if you indent every line of the subsequent paragraphs, but here again, Markdown will allow you to be lazy: This is a list item with two paragraphs. This is the second paragraph in the list item. You're only required to indent the first line. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Another item in the same list. To put a blockquote within a list item, the blockquote's &gt; delimiters need to be indented: A list item with a blockquote: This is a blockquote inside a list item. To put a code block within a list item, the code block needs to be indented twice -- 8 spaces or two tabs: A list item with a code block: &lt;code goes here&gt; Code Blocks Pre-formatted code blocks are used for writing about programming or markup source code. Rather than forming normal paragraphs, the lines of a code block are interpreted literally. Markdown wraps a code block in both &lt;pre&gt; and &lt;code&gt; tags. To produce a code block in Markdown, simply indent every line of the block by at least 4 spaces or 1 tab. This is a normal paragraph: This is a code block. Here is an example of AppleScript: tell application &quot;Foo&quot; beep end tell A code block continues until it reaches a line that is not indented (or the end of the article). Within a code block, ampersands ( &amp; ) and angle brackets ( &lt; and &gt; ) are automatically converted into HTML entities. This makes it very easy to include example HTML source code using Markdown -- just paste it and indent it, and Markdown will handle the hassle of encoding the ampersands and angle brackets. For example, this: &lt;div class=&quot;footer&quot;&gt; &amp;copy; 2004 Foo Corporation &lt;/div&gt; Regular Markdown syntax is not processed within code blocks. E.g., asterisks are just literal asterisks within a code block. This means it's also easy to use Markdown to write about Markdown's own syntax. tell application &quot;Foo&quot; beep end tell Span Elements Links Markdown supports two style of links: inline and reference . In both styles, the link text is delimited by [square brackets]. To create an inline link, use a set of regular parentheses immediately after the link text's closing square bracket. Inside the parentheses, put the URL where you want the link to point, along with an optional title for the link, surrounded in quotes. For example: This is an example inline link. This link has no title attribute. Emphasis Markdown treats asterisks ( * ) and underscores ( _ ) as indicators of emphasis. Text wrapped with one * or _ will be wrapped with an HTML &lt;em&gt; tag; double * 's or _ 's will be wrapped with an HTML &lt;strong&gt; tag. E.g., this input: single asterisks single underscores double asterisks double underscores Code To indicate a span of code, wrap it with backtick quotes ( ` ). Unlike a pre-formatted code block, a code span indicates code within a normal paragraph. For example: Use the printf() function. "
},

{
    "id": 2,
    "uri": "demo/standard.rst.html",
    "menu": "null",
    "title": "null",
    "text": " div.system-messages { display: none; } System Message: WARNING/2 ( &lt;string&gt; , line 3) Explicit markup ends without a blank line; unexpected unindent. transforms to after the document title, subtitle, and docinfo. 1&nbsp;&nbsp;&nbsp;reStructuredText Test Document System Message: WARNING/2 ( &lt;string&gt; , line 12) Explicit markup ends without a blank line; unexpected unindent. They are transformed from section titles after parsing. 1.1&nbsp;&nbsp;&nbsp;Examples of Syntax Constructs Author: David Goodger Address: 123 Example Street Example, EX Canada A1B 2C3 Contact: goodger&#64;python.org Authors: Me; Myself; I organization: humankind date: Now, or yesterday. Or maybe even before yesterday. status: This is a &quot;work in progress&quot; revision: is managed by a version control system. version: 1 copyright: This document has been placed in the public domain. You may do with it as you wish. You may copy, modify, redistribute, reattribute, sell, buy, rent, lease, destroy, or improve it, quote it at length, excerpt, incorporate, collate, fold, staple, or mutilate it, or do anything else to it that your or anyone else's heart desires. field name: This is a &quot;generic bibliographic field&quot;. field name &quot;2&quot;: Generic bibliographic fields may contain multiple body elements. Like this. Dedication: For Docutils users &amp; co-developers. abstract: This is a test document, containing at least one example of each reStructuredText construct. Table of Contents 1&nbsp;&nbsp;&nbsp;reStructuredText Test Document 1.1&nbsp;&nbsp;&nbsp;Examples of Syntax Constructs 1.1.1&nbsp;&nbsp;&nbsp;Structural Elements 1.1.1.1&nbsp;&nbsp;&nbsp;Section Title 1.1.1.1.1&nbsp;&nbsp;&nbsp;Section Subtitle 1.1.1.2&nbsp;&nbsp;&nbsp;Empty Section 1.1.1.3&nbsp;&nbsp;&nbsp;Transitions 1.1.2&nbsp;&nbsp;&nbsp;Body Elements 1.1.2.1&nbsp;&nbsp;&nbsp;Paragraphs 1.1.2.1.1&nbsp;&nbsp;&nbsp;Inline Markup 1.1.2.2&nbsp;&nbsp;&nbsp;Bullet Lists 1.1.2.3&nbsp;&nbsp;&nbsp;Enumerated Lists 1.1.2.4&nbsp;&nbsp;&nbsp;Definition Lists 1.1.2.5&nbsp;&nbsp;&nbsp;Field Lists 1.1.2.6&nbsp;&nbsp;&nbsp;Option Lists 1.1.2.7&nbsp;&nbsp;&nbsp;Literal Blocks 1.1.2.8&nbsp;&nbsp;&nbsp;Line Blocks 1.1.2.9&nbsp;&nbsp;&nbsp;Block Quotes 1.1.2.10&nbsp;&nbsp;&nbsp;Doctest Blocks 1.1.2.11&nbsp;&nbsp;&nbsp;Footnotes 1.1.2.12&nbsp;&nbsp;&nbsp;Citations 1.1.2.13&nbsp;&nbsp;&nbsp;Targets 1.1.2.13.1&nbsp;&nbsp;&nbsp;Duplicate Target Names 1.1.2.13.2&nbsp;&nbsp;&nbsp;Duplicate Target Names 1.1.2.14&nbsp;&nbsp;&nbsp;Directives 1.1.2.14.1&nbsp;&nbsp;&nbsp;Document Parts 1.1.2.14.2&nbsp;&nbsp;&nbsp;Images and Figures 1.1.2.14.3&nbsp;&nbsp;&nbsp;Tables 1.1.2.14.4&nbsp;&nbsp;&nbsp;Admonitions 1.1.2.14.5&nbsp;&nbsp;&nbsp;Topics, Sidebars, and Rubrics 1.1.2.14.6&nbsp;&nbsp;&nbsp;Target Footnotes 1.1.2.14.7&nbsp;&nbsp;&nbsp;Replacement Text 1.1.2.14.8&nbsp;&nbsp;&nbsp;Compound Paragraph 1.1.2.14.9&nbsp;&nbsp;&nbsp;Parsed Literal Blocks 1.1.2.14.10&nbsp;&nbsp;&nbsp;Code 1.1.2.14.11&nbsp;&nbsp;&nbsp;Meta 1.1.2.15&nbsp;&nbsp;&nbsp;Substitution Definitions 1.1.2.16&nbsp;&nbsp;&nbsp;Comments 1.1.2.17&nbsp;&nbsp;&nbsp;Raw text 1.1.2.18&nbsp;&nbsp;&nbsp;Container 1.1.1&nbsp;&nbsp;&nbsp;Structural Elements 1.1.1.1&nbsp;&nbsp;&nbsp;Section Title 1.1.1.1.1&nbsp;&nbsp;&nbsp;Section Subtitle Lone subsections are converted to a section subtitle by a transform activated with the --section-subtitles command line option or the sectsubtitle-xform configuration value. 1.1.1.2&nbsp;&nbsp;&nbsp;Empty Section 1.1.1.3&nbsp;&nbsp;&nbsp;Transitions Here's a transition: It divides the section. Transitions may also occur between sections: 1.1.2&nbsp;&nbsp;&nbsp;Body Elements 1.1.2.1&nbsp;&nbsp;&nbsp;Paragraphs A paragraph. 1.1.2.1.1&nbsp;&nbsp;&nbsp;Inline Markup Paragraphs contain text and may contain inline markup: emphasis , strong emphasis , inline literals , standalone hyperlinks ( http://www.python.org ), external hyperlinks ( Python [5] ), internal cross-references ( example ), external hyperlinks with embedded URIs ( Python web site ), anonymous hyperlink references [5] ( a second reference [6] ), footnote references (manually numbered [1] , anonymous auto-numbered [3] , labeled auto-numbered [2] , or symbolic [*] ), citation references (see [CIT2002] ), substitution references ( &amp; a trimmed heart (U+2665): ♥), and inline hyperlink targets (see Targets below for a reference back to here). Character-level inline markup is also possible (although exceedingly ugly!) in re Structured Text . Problems are indicated by |problematic| text (generated by processing errors; this one is intentional). Here is a reference to the doctitle and the subtitle . The default role for interpreted text is Title Reference . Here are some explicit interpreted text roles: a PEP reference ( PEP 287 ); an RFC reference ( RFC 2822 ); an abbreviation ( abb. ), an acronym ( reST ), code ( print &quot;hello world&quot; ); a subscript ; a superscript and explicit roles for Docutils ' standard inline markup . Let's test wrapping and whitespace significance in inline literals: This is an example of --inline-literal --text, --including some-- strangely--hyphenated-words. &nbsp; Adjust-the-width-of-your-browser-window to see how the text is wrapped.&nbsp; -- ---- -------- &nbsp; Now note&nbsp;&nbsp;&nbsp; the spacing&nbsp;&nbsp;&nbsp; between the&nbsp;&nbsp;&nbsp; words of&nbsp;&nbsp;&nbsp; this sentence&nbsp;&nbsp;&nbsp; (words should&nbsp;&nbsp;&nbsp; be grouped&nbsp;&nbsp;&nbsp; in pairs). If the --pep-references option was supplied, there should be a live link to PEP 258 here. 1.1.2.2&nbsp;&nbsp;&nbsp;Bullet Lists A bullet list Nested bullet list. Nested item 2. Item 2. Paragraph 2 of item 2. Nested bullet list. Nested item 2. Third level. Item 2. Nested item 3. This nested list should be compacted by the HTML writer. 1.1.2.3&nbsp;&nbsp;&nbsp;Enumerated Lists Arabic numerals. lower alpha) (lower roman) upper alpha. upper roman) Lists that don't start at 1: Three Four C D iii iv 1.1.2.4&nbsp;&nbsp;&nbsp;Definition Lists Term Definition Term : classifier Definition paragraph 1. Definition paragraph 2. Term Definition Term : classifier one : classifier two Definition 1.1.2.5&nbsp;&nbsp;&nbsp;Field Lists what: Field lists map field names to field bodies, like database records. They are often part of an extension syntax. They are an unambiguous variant of RFC 2822 fields. how arg1 arg2: The field marker is a colon, the field name, and a colon. The field body may contain one or more body elements, indented relative to the field marker. credits: This paragraph has the credits class set. (This is actually not about credits but just for ensuring that the class attribute doesn't get stripped away.) 1.1.2.6&nbsp;&nbsp;&nbsp;Option Lists For listing command-line options: -a command-line option &quot;a&quot; -b file options can have arguments and long descriptions --long options can be long also --input= file long options can also have arguments --very-long-option &nbsp; The description can also start on the next line. The description may contain multiple body elements, regardless of where it starts. -x , -y , -z Multiple options are an &quot;option group&quot;. -v , --verbose Commonly-seen: short &amp; long options. -1 file , --one= file , --two file &nbsp; Multiple options with arguments. /V DOS/VMS-style options too There must be at least two spaces between the option and the description. 1.1.2.7&nbsp;&nbsp;&nbsp;Literal Blocks Literal blocks are indicated with a double-colon (&quot;::&quot;) at the end of the preceding paragraph (over there --&gt; ). They can be indented: if literal_block: text = 'is left as-is' spaces_and_linebreaks = 'are preserved' markup_processing = None Or they can be quoted without indentation: &gt;&gt; Great idea! &gt; &gt; Why didn't I think of that? 1.1.2.8&nbsp;&nbsp;&nbsp;Line Blocks This section tests line blocks. Line blocks are body elements which consist of lines and other line blocks. Nested line blocks cause indentation. This is a line block. It ends with a blank line. New lines begin with a vertical bar (&quot;|&quot;). Line breaks and initial indent are significant, and preserved. Continuation lines are also possible. A long line that is intended to wrap should begin with a space in place of the vertical bar. The left edge of a continuation line need not be aligned with the left edge of the text above it. This is a second line block. Blank lines are permitted internally, but they must begin with a &quot;|&quot;. Another line block, surrounded by paragraphs: And it's no good waiting by the window It's no good waiting for the sun Please believe me, the things you dream of They don't fall in the lap of no-one Take it away, Eric the Orchestra Leader! A one, two, a one two three four Half a bee, philosophically, must, ipso facto , half not be. But half the bee has got to be, vis a vis its entity. D'you see? But can a bee be said to be or not to be an entire bee, when half the bee is not a bee, due to some ancient injury? Singing... A line block, like the following poem by Christian Morgenstern, can also be centre-aligned: Die Trichter Zwei Trichter wandeln durch die Nacht. Durch ihres Rumpfs verengten Schacht flieÃŸt weiÃŸes Mondlicht still und heiter auf Â ihren Waldweg u. s. w. 1.1.2.9&nbsp;&nbsp;&nbsp;Block Quotes Block quotes consist of indented body elements: My theory by A. Elk. Brackets Miss, brackets. This theory goes as follows and begins now. All brontosauruses are thin at one end, much much thicker in the middle and then thin again at the far end. That is my theory, it is mine, and belongs to me and I own it, and what it is too. &mdash;Anne Elk (Miss) The language of a quote (like any other object) can be specified by a class attribute: ReStructuredText est un langage de balisage lÃ©ger utilisÃ© notamment dans la documentation du langage Python. 1.1.2.10&nbsp;&nbsp;&nbsp;Doctest Blocks &gt;&gt;&gt; print 'Python-specific usage examples; begun with &quot;&gt;&gt;&gt;&quot;' Python-specific usage examples; begun with &quot;&gt;&gt;&gt;&quot; &gt;&gt;&gt; print '(cut and pasted from interactive Python sessions)' (cut and pasted from interactive Python sessions) 1.1.2.11&nbsp;&nbsp;&nbsp;Footnotes [1] ( 1 , 2 , 3 ) A footnote contains body elements, consistently indented by at least 3 spaces. This is the footnote's second paragraph. [2] ( 1 , 2 ) Footnotes may be numbered, either manually (as in [1] ) or automatically using a &quot;#&quot;-prefixed label. This footnote has a label so it can be referred to from multiple places, both as a footnote reference ( [2] ) and as a hyperlink reference . [3] This footnote is numbered automatically and anonymously using a label of &quot;#&quot; only. This is the second paragraph. And this is the third paragraph. [*] Footnotes may also use symbols, specified with a &quot;*&quot; label. Here's a reference to the next footnote: [†] . [†] This footnote shows the next symbol in the sequence. [4] Here's an unreferenced footnote, with a reference to a nonexistent footnote: [5]_ . 1.1.2.12&nbsp;&nbsp;&nbsp;Citations [CIT2002] ( 1 , 2 ) Citations are text-labeled footnotes. They may be rendered separately and differently from footnotes. Here's a reference to the above, [CIT2002] , and a [nonexistent]_ citation. 1.1.2.13&nbsp;&nbsp;&nbsp;Targets This paragraph is pointed to by the explicit &quot;example&quot; target. A reference can be found under Inline Markup , above. Inline hyperlink targets are also possible. Section headers are implicit targets, referred to by name. See Targets , which is a subsection of Body Elements . Explicit external targets are interpolated into references such as &quot; Python [5] &quot;. Targets may be indirect and anonymous. Thus this phrase may also refer to the Targets section. Here's a `hyperlink reference without a target`_ , which generates an error. 1.1.2.13.1&nbsp;&nbsp;&nbsp;Duplicate Target Names Duplicate names in section headers or other implicit targets will generate &quot;info&quot; (level-1) system messages. Duplicate names in explicit targets will generate &quot;warning&quot; (level-2) system messages. 1.1.2.13.2&nbsp;&nbsp;&nbsp;Duplicate Target Names Since there are two &quot;Duplicate Target Names&quot; section headers, we cannot uniquely refer to either of them by name. If we try to (like this: `Duplicate Target Names`_ ), an error is generated. 1.1.2.14&nbsp;&nbsp;&nbsp;Directives 1.1.2.14.1&nbsp;&nbsp;&nbsp;Document Parts 1.1.2.14.2&nbsp;&nbsp;&nbsp;Images and Figures 1.1.2.14.3&nbsp;&nbsp;&nbsp;Tables 1.1.2.14.4&nbsp;&nbsp;&nbsp;Admonitions 1.1.2.14.5&nbsp;&nbsp;&nbsp;Topics, Sidebars, and Rubrics 1.1.2.14.6&nbsp;&nbsp;&nbsp;Target Footnotes 1.1.2.14.7&nbsp;&nbsp;&nbsp;Replacement Text 1.1.2.14.8&nbsp;&nbsp;&nbsp;Compound Paragraph 1.1.2.14.9&nbsp;&nbsp;&nbsp;Parsed Literal Blocks 1.1.2.14.10&nbsp;&nbsp;&nbsp;Code 1.1.2.14.11&nbsp;&nbsp;&nbsp;Meta These are just a sample of the many reStructuredText Directives. For others, please see reStructuredText Directives [7] . 1.1.2.14.1&nbsp;&nbsp;&nbsp;Document Parts An example of the &quot;contents&quot; directive can be seen above this section (a local, untitled table of contents ) and at the beginning of the document (a document-wide table of contents ). 1.1.2.14.2&nbsp;&nbsp;&nbsp;Images and Figures An image directive (also clickable -- a hyperlink reference): Image with multiple IDs: A centered image: A left-aligned image: This paragraph might flow around the image. The specific behavior depends upon the style sheet and the browser or rendering software used. A right-aligned image: This paragraph might flow around the image. The specific behavior depends upon the style sheet and the browser or rendering software used. For inline images see Substitution Definitions . Image size: An image 2 em wide: An image 2 cm wide and 15 pixel high: Relative units allow adaption of the image to the screen or paper size. An image occupying 50% of the line width: A figure is an image with a caption and/or a legend. With page-based output media, figures might float to a different position if this helps the page layout. Plaintext markup syntax and parser system. re Revised, revisited, based on 're' module. Structured Structure-enhanced text, structuredtext. Text Well it is, isn't it? This paragraph is also part of the legend. A left-aligned figure, 70% wide: This is the caption. This is the legend. The legend may consist of several paragraphs. This paragraph might flow around the figure. The specific behavior depends upon the style sheet and the browser or rendering software used. A centered figure: This is the caption. This is the legend. The legend may consist of several paragraphs. This paragraph might flow around the figure. The specific behavior depends upon the style sheet and the browser or rendering software used. A right-aligned figure: This is the caption. This is the legend. The legend may consist of several paragraphs. This paragraph might flow around the figure. The specific behavior depends upon the style sheet and the browser or rendering software used. 1.1.2.14.3&nbsp;&nbsp;&nbsp;Tables Tables may be given titles and additional arguments with the table directive: left-aligned table A not A False True True False center-aligned table A not A False True True False right-aligned table A not A False True True False With the &quot;widths&quot; argument &quot;auto&quot; (or &quot;class&quot; value &quot;colwidths-auto&quot;), column widths are determined by the backend (if supported by the writer/backend). A B A or B False False False True False True False True True True True True 1.1.2.14.4&nbsp;&nbsp;&nbsp;Admonitions Attention! Directives at large. Caution! Don't take any wooden nickels. !DANGER! Mad scientist at work! Error Does not compute. Hint It's bigger than a bread box. Important Wash behind your ears. Clean up your room. Call your mother. Back up your data. Note This is a note. Tip 15% if the service is good. Warning Strong prose may provoke extreme mental exertion. Reader discretion is strongly advised. And, by the way... You can make up your own admonition too. 1.1.2.14.5&nbsp;&nbsp;&nbsp;Topics, Sidebars, and Rubrics Sidebars are like miniature, parallel documents. Optional Sidebar Title Optional Subtitle This is a sidebar. It is for text outside the flow of the main text. This is a rubric inside a sidebar Sidebars often appear beside the main text with a border and a different background or font color. A topic is like a block quote with a title, or a self-contained section with no subsections. Topic Title This is a topic. A rubric is like an informal heading that doesn't correspond to the document's structure. It is typically highlighted in red (hence the name). This is a rubric Topics and rubrics can be used at places where a section title is not allowed (e.g. inside a directive). 1.1.2.14.6&nbsp;&nbsp;&nbsp;Target Footnotes [5] ( 1 , 2 , 3 , 4 ) http://www.python.org/ [6] https://docutils.sourceforge.io/ [7] https://docutils.sourceforge.io/docs/ref/rst/directives.html [8] https://docutils.sourceforge.io/docs/ref/rst/directives.html#metadata 1.1.2.14.7&nbsp;&nbsp;&nbsp;Replacement Text I recommend you try Python, the best language around [5] . 1.1.2.14.8&nbsp;&nbsp;&nbsp;Compound Paragraph The compound directive is used to create a &quot;compound paragraph&quot;, which is a single logical paragraph containing multiple physical body elements. For example: The 'rm' command is very dangerous. If you are logged in as root and enter cd / rm -rf * you will erase the entire contents of your file system. Test the handling and display of compound paragraphs: Compound 2, paragraph 1, compound 2, paragraph 2, list item 1, list item 2, compound 2, paragraph 3. Compound 3, only consisting of one paragraph. Compound 4. This one starts with a literal block. Compound 4, paragraph following the literal block. Now something really perverted -- a nested compound block. This is just to test that it works at all; the results don't have to be meaningful. Compound 5, block 1 (a paragraph). Compound 6 is block 2 in compound 5. Compound 6, another paragraph. Compound 5, block 3 (a paragraph). Compound 7, tests the inclusion of various block-level elements in one logical paragraph. First a table, Left cell, first paragraph. Left cell, second paragraph. Middle cell, consisting of exactly one paragraph. Right cell. Paragraph 2. Paragraph 3. followed by a paragraph. This physical paragraph is actually a continuation of the paragraph before the table. It is followed by a quote and an enumerated list, a paragraph, --an option list, a paragraph, a field: list, a paragraph, a definition list, a paragraph, an image: a paragraph, a line block, a paragraph followed by a comment, a paragraph, a Note with content and the final paragraph of the compound 7. 1.1.2.14.9&nbsp;&nbsp;&nbsp;Parsed Literal Blocks This is a parsed literal block. This line is indented. The next line is blank. Inline markup is supported, e.g. emphasis , strong , literal text , sub- and super scripts, inline formulas: A  = 2 π r 2 , footnotes [1] , hyperlink targets , and references . 1.1.2.14.10&nbsp;&nbsp;&nbsp;Code Blocks of source code can be set with the code directive. If the code language is specified, the content is parsed and tagged by the Pygments_ syntax highlighter and can be formatted with a style sheet. (Code parsing is turned off using the syntax-highlight config setting in the test conversions in order to get identical results with/without installed Pygments highlighter.) print 'This is Python code.' The :number-lines: option (with optional start value) generates line numbers: 8 # print integers from 0 to 9: 9 for i in range ( 10 ): 10 print i For inline code snippets, there is the code role, which can be used directly (the code will not be parsed/tagged, as the language is not known) or as base for special code roles, e.g. the LaTeX code in the next paragraph. Docutils uses LaTeX syntax for math directives and roles: \alpha = f(x) prints α  =  f ( x ) . 1.1.2.14.11&nbsp;&nbsp;&nbsp;Meta The â€œmetaâ€ directive [8] is used to specify metadata to be stored in, e.g., HTML META tags or ODT file properties. 1.1.2.15&nbsp;&nbsp;&nbsp;Substitution Definitions An inline image ( ) example: A Unicode example: (Substitution definitions are not visible in the HTML source.) 1.1.2.16&nbsp;&nbsp;&nbsp;Comments Here's one: System Message: WARNING/2 ( &lt;string&gt; , line 927) Explicit markup ends without a blank line; unexpected unindent. follow, except for the syntax of footnotes, hyperlink targets, directives, or substitution definitions. Double-dashes -- &quot;--&quot; -- must be escaped somehow in HTML output. Comments may contain non-ASCII characters: Ã¤ Ã¶ Ã¼ Ã¦ Ã¸ Ã¥ (View the HTML source to see the comment.) 1.1.2.17&nbsp;&nbsp;&nbsp;Raw text This does not necessarily look nice, because there may be missing white space. It's just there to freeze the behavior. A test.Second test. Another test with myclass set. This is the fourth test with myrawroleclass set. Fifth test in HTML. Line two. 1.1.2.18&nbsp;&nbsp;&nbsp;Container paragraph 1 paragraph 2 Docutils System Messages System Message: ERROR/3 ( &lt;string&gt; , line 100); backlink Undefined substitution referenced: &quot;problematic&quot;. System Message: ERROR/3 ( &lt;string&gt; , line 388); backlink Unknown target name: &quot;5&quot;. System Message: ERROR/3 ( &lt;string&gt; , line 397); backlink Unknown target name: &quot;nonexistent&quot;. System Message: ERROR/3 ( &lt;string&gt; , line 424); backlink Unknown target name: &quot;hyperlink reference without a target&quot;. System Message: ERROR/3 ( &lt;string&gt; , line 437); backlink Duplicate target name, cannot be used as a unique reference: &quot;duplicate target names&quot;. System Message: ERROR/3 ( &lt;string&gt; , line 859); backlink Unknown target name: &quot;pygments&quot;. "
},

{
    "id": 3,
    "uri": "demo/asciidoc.html",
    "menu": "demo",
    "title": "AsciiDoc Demo",
    "text": " Table of Contents AsciiDoc Demo First Steps with AsciiDoc We&#8217;re back! Included Section ``Quotes'' Getting Literal Wrap-up AsciiDoc Demo Dan Allen &lt; thedoc@asciidoctor.org &gt; This is a demonstration of Asciidoctor. And this is the preamble of this document. Purpose This document exercises many of the features of AsciiDoc to test the Asciidoctor implementation. Tip If you want the output to look familiar, copy (or link) the AsciiDoc stylesheet, asciidoc.css, to the output directory. Note Items marked with TODO are either not yet supported or a work in progress. First Steps with AsciiDoc Inline markup single quotes around a phrase place 'emphasis' astericks around a phrase make the text bold double astericks around one or more l etters in a word make those letters bold double underscore around a sub string in a word emphasize that substring use carrots around characters to make them super script use tildes around characters to make them sub script to pass through HTML directly, surround the text with triple plus characters can be escaped using a \ for instance, you can escape a quote inside emphasized text like 'Here's Johnny!' you can safely use reserved XML characters like &lt;, &gt; and &amp;, which are escaped when rendering force a space between inline elements using the {sp} attribute hold text together with an intrinsic non-breaking&#160;space attribute, {nbsp} handle words with unicode characters like in the name Gregory Romé claim your copyright &#169;, registered trademark &#174; or trademark &#8482; You can write text with inline links , optionally using an explicit link prefix . In either case, the link can have a query string . If you want to break a line just end it in a &#43; sign and continue typing on the next line. Lists Upon Lists Adjacent lists this list should join to have four items Numbered lists These items will be auto-numbered and can be nested A numbered list can nest unordered list items Statement I swear I left it in 'Guy's' car. Let's go look for it. term definition line two another term another definition, which can be literal (indented) or regular paragraph This should be a standalone paragraph, not grabbed by the definition list. first level written on two lines first level with this literal text second level third level fourth level back to first level Let&#8217;s make a horizontal rule&#8230;&#8203; then take a break. We&#8217;re back! Want to see a ? Do you feel safer with the tiger in a box? Figure 1. Tiger in a box Included Section Look, I came from out of the blue ! I&#8217;m keepin' it open. An 'open block', like this one, can contain other blocks. It can also act as any other block. (TODO) Asciidoctor usage example, should contain 3 lines doc = Asciidoctor::Document.new(*This* is it!, :header_footer =&gt; false) puts doc.render Here&#8217;s what it outputs (using the built-in templates): &lt;div class=paragraph&gt; &lt;p&gt;&lt;strong&gt;This&lt;/strong&gt; is it!&lt;/p&gt; &lt;/div&gt; ``Quotes'' AsciiDoc is 'so' powerful ! This verse comes to mind. La la la Here&#8217;s another quote: When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth. &#8212; Sir Arthur Conan Doyle The Adventures of Sherlock Holmes Getting Literal Want to get literal? Just prefix a line with a space (just one will do). I'll join that party, too. We forgot to mention in Numbered lists that you can change the numbering style. first item (yeah!) second item, looking so mono third item, mono it is! Wrap-up Note AsciiDoc is quite cool, you should try it! Tip Info Go to this URL to learn more about it: http://asciidoc.org Or you could return to the First Steps or Purpose . Here&#8217;s a reference to the definition of another term , in case you forgot it. Note One more thing. Happy documenting! When all else fails, head over to http://google.com . "
},

{
    "id": 4,
    "uri": "search.html",
    "menu": "-",
    "title": "search",
    "text": " Search Results "
},

{
    "id": 5,
    "uri": "lunrjsindex.html",
    "menu": "-",
    "title": "null",
    "text": " will be replaced by the index "
},

];

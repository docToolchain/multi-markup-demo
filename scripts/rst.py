from docutils.core import publish_parts
import sys

source = sys.argv[1]
with open(source, 'r', encoding='utf-8') as input, open(source+'.html', 'w', encoding='utf-8') as output:
    content = input.read()
    html = publish_parts(content, writer_name='html')['html_body']
    output.write(html)
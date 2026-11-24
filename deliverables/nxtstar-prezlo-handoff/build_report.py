from pathlib import Path
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

root = Path(__file__).parent
doc = Document()
s = doc.sections[0]
s.top_margin = s.bottom_margin = Inches(.72)
s.left_margin = s.right_margin = Inches(.8)
s.page_width, s.page_height = Inches(8.27), Inches(11.69)
for name in ['Normal', 'Title', 'Subtitle', 'Heading 1', 'Heading 2', 'Heading 3', 'List Bullet']:
    st = doc.styles[name]
    st.font.name = 'Calibri'
    st.font.color.rgb = RGBColor(0,0,0)
doc.styles['Normal'].font.size = Pt(11)
doc.styles['Normal'].paragraph_format.space_after = Pt(7)
doc.styles['Normal'].paragraph_format.line_spacing = 1.08
doc.styles['Title'].font.size = Pt(26)
doc.styles['Heading 1'].font.size = Pt(17)
doc.styles['Heading 2'].font.size = Pt(13)
for name in ['Heading 1','Heading 2']:
    doc.styles[name].paragraph_format.space_before = Pt(15)
    doc.styles[name].paragraph_format.space_after = Pt(7)
    doc.styles[name].paragraph_format.keep_with_next = True
for line in (root/'report.md').read_text(encoding='utf-8').splitlines():
    if not line.strip(): continue
    if line.startswith('# '): doc.add_paragraph(line[2:], 'Title')
    elif line.startswith('## '): doc.add_heading(line[3:],1)
    elif line.startswith('### '): doc.add_heading(line[4:],2)
    elif line.startswith('- '): doc.add_paragraph(line[2:],'List Bullet')
    else: doc.add_paragraph(line)
doc.add_page_break()
doc.add_heading('Conversation appendix',1)
doc.add_paragraph('Available user and assistant messages from this chat in chronological order. Tool logs and image binaries are omitted. Earlier messages may describe work that was later corrected; the report explains the final scope. The current document-writing turn is captured only up to retrieval.')
text=(root/'conversation.txt').read_text(encoding='utf-8')
for block in text.split('\n\n'):
    if not block.strip(): continue
    if block.startswith('USER\n') or block.startswith('ASSISTANT\n'):
        role, body=block.split('\n',1)
        doc.add_heading('User' if role=='USER' else 'Assistant',2)
        doc.add_paragraph(body)
    else: doc.add_paragraph(block)
footer=s.footer.paragraphs[0]
footer.alignment=2
run=footer.add_run('Page ')
field=OxmlElement('w:fldSimple');field.set(qn('w:instr'),'PAGE');footer._p.append(field)
doc.core_properties.title='NXTSTAR website implementation and Prezlo product handoff'
doc.core_properties.author='Prepared for Lopty Pascal'
doc.core_properties.subject='Implementation record and product architecture recommendations for Claude'
for element in list(doc.styles.element.iter(qn('w:pBdr'))) + list(doc.element.iter(qn('w:pBdr'))):
    element.getparent().remove(element)
doc.save(root/'NXTSTAR and Prezlo handoff.docx')
print('Created Word document')

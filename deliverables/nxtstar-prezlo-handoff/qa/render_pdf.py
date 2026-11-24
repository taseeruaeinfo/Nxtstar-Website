from pathlib import Path
import fitz
from PIL import Image, ImageOps, ImageDraw
root=Path(__file__).parent
doc=fitz.open(root/'report.pdf')
for i,p in enumerate(doc):
    p.get_pixmap(matrix=fitz.Matrix(1.15,1.15)).save(root/f'page-{i+1}.png')
for start in range(0,len(doc),6):
    sheet=Image.new('RGB',(1242,1800),'#bbbbbb')
    for j in range(start,min(start+6,len(doc))):
        im=Image.open(root/f'page-{j+1}.png'); im.thumbnail((404,570))
        x=(j-start)%3*414;y=(j-start)//3*900
        sheet.paste(im,(x,y+25));ImageDraw.Draw(sheet).text((x+10,y+5),str(j+1),fill='black')
    sheet.save(root/f'overview-{start//6+1}.png')
print('Pages',len(doc))
print('Words',sum(len(p.get_text().split()) for p in doc))
for i,p in enumerate(doc):
    blocks=p.get_text('blocks')
    bad=[b[:4] for b in blocks if b[0]<30 or b[2]>p.rect.width-25 or b[3]>p.rect.height-20]
    if bad: print('Bounds',i+1,bad)

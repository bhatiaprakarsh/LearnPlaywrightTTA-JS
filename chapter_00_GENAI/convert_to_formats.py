import csv
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
import os

# Create Excel file from CSV
csv_file = r'E:\CODING\LearnPlaywrightTTA\chapter_00_GENAI\Test Case.csv'
excel_file = r'E:\CODING\LearnPlaywrightTTA\chapter_00_GENAI\Test Cases.xlsx'

wb = Workbook()
ws = wb.active
ws.title = "Test Cases"

# Read CSV and write to Excel
with open(csv_file, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row_idx, row in enumerate(reader, 1):
        for col_idx, value in enumerate(row, 1):
            cell = ws.cell(row=row_idx, column=col_idx, value=value)
            
            # Format header row
            if row_idx == 1:
                cell.font = Font(bold=True, color="FFFFFF")
                cell.fill = PatternFill(start_color="366092", end_color="366092", fill_type="solid")
                cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
            else:
                cell.alignment = Alignment(horizontal="left", vertical="top", wrap_text=True)

# Set column widths
ws.column_dimensions['A'].width = 12
ws.column_dimensions['B'].width = 15
ws.column_dimensions['C'].width = 35
ws.column_dimensions['D'].width = 50
ws.column_dimensions['E'].width = 12
ws.column_dimensions['F'].width = 20

# Set row height for header
ws.row_dimensions[1].height = 30

# Auto-adjust row heights for content
for row in ws.iter_rows(min_row=2):
    ws.row_dimensions[row[0].row].height = 60

wb.save(excel_file)
print(f"Excel file created: {excel_file}")

# Create Word document from text file
text_file = r'E:\CODING\LearnPlaywrightTTA\chapter_00_GENAI\Test Plan.txt'
doc_file = r'E:\CODING\LearnPlaywrightTTA\chapter_00_GENAI\Test Plan.docx'

doc = Document()
doc.add_heading('TEST PLAN - VWO.COM', 0)

with open(text_file, 'r', encoding='utf-8') as f:
    content = f.read()
    lines = content.split('\n')
    
    for line in lines:
        line = line.strip()
        
        if not line or '=' in line:
            continue
        elif line.isupper() and len(line) > 3:
            # Section headers
            doc.add_heading(line, level=1)
        elif line and not line.startswith('-'):
            # Regular paragraphs
            p = doc.add_paragraph(line)
            p.paragraph_format.space_after = Pt(6)
        elif line.startswith('-'):
            # Bullet points
            doc.add_paragraph(line[1:].strip(), style='List Bullet')

doc.save(doc_file)
print(f"Word document created: {doc_file}")
print("Files created successfully!")

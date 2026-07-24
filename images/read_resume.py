import docx

def read_docx(file_path):
    doc = docx.Document(file_path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    return '\n'.join(full_text)

print(read_docx("c:/Users/Sathvika/Desktop/portfolio/Sathvika_Boina_Resume_AI_Engineer (1).docx"))

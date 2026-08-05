from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title='Grievance AI Engine')

class AnalyzeRequest(BaseModel):
    text: str

@app.get('/health')
def health():
    return {'status': 'ok'}

@app.post('/analyze')
def analyze(request: AnalyzeRequest):
    return {
        'category': 'Sanitation',
        'priority': 'Medium',
        'department': 'Municipal Services'
    }

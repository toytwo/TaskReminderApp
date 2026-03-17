from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter()

class TestRequest(BaseModel):
    message: str

@router.post("/test")
def test(data: TestRequest):
    print(data.message)
    return {"message": "Backend Response"}

app.include_router(router)
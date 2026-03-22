from fastapi import APIRouter
from pydantic import BaseModel
from services.auth_handler import register_user

router = APIRouter()

class RegisterGroup(BaseModel):
    group_name: str

@router.post("/register")
def test(request: RegisterGroup):
    print(request.group_name)
    result = register_user(request.group_name)
    return {"success": result}
from database.repositories.auth_repo import update_groups
from services.hash import generate_group_key
from datetime import datetime, timezone

def register_user(group_name: str) -> dict:
    if not group_name:
        return {"success":False,"error":"Null Group Name"}
    
    timestamp = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S')

    group_key = generate_group_key(group_name,timestamp)

    try:
        update_groups(group_name, group_key)
    except Exception as e:
        return {"success":False,"error":f"Database Error: {e}"}
    
    return {"success": True}


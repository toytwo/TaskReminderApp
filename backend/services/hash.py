import bcrypt

def hash_password(password: str) -> str:
    if not password:
        return None
    
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(10)).decode('utf-8')

def verify_hash(original: str, hash: str) -> bool:
    if not original or not hash:
        return False
    
    return bcrypt.checkpw(original.encode('utf-8'), hash.encode('utf-8'))

def generate_group_key(group_name: str, unique_info: str) -> str:
    if not group_name or not unique_info:
        return None

    return bcrypt.hashpw((group_name+unique_info).encode('utf-8'), bcrypt.gensalt(10)).decode('utf-8')

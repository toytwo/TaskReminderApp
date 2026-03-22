from database.connection import get_db_connection

def update_groups(group_name: str, group_key: str):
    with get_db_connection() as conn:
        with conn.cursor(dictionary=True) as cursor:
            try:
                cursor.callproc("UpdateGroups", [group_name, group_key])
                conn.commit()
            except Exception as e:
                conn.rollback()
                print(f"Transaction failed: {e}")
                raise e
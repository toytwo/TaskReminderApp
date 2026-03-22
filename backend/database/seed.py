import os

from connection import get_db_connection

def run_sql_file(filename: str):
    with get_db_connection() as conn:
        with conn.cursor(dictionary=True, buffered=True) as cursor:
            filepath = os.path.join(os.path.dirname(__file__), "mysql/seed", filename)                
            with open(filepath, "r") as f:
                sql = f.read()

            cursor.execute(sql)
            
            conn.commit()

if __name__ == "__main__":
    print("Seeding")
    run_sql_file("seedDDL.sql")
    
    run_sql_file("seedDummyData.sql")

    run_sql_file("seedStoredProcedures.sql")
    print("Seeded Successfully")
import asyncpg

async def get_pool():
    return await asyncpg.create_pool(
        user='postgres',
        password='tu_password',
        database='tu_db',
        host='localhost',
        port=5432
    )
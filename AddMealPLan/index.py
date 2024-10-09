import sqlite3

connection = sqlite3.connect('formulario.db')
cursor = connection.cursor()

# Create a table
cursor.execute('''CREATE TABLE IF NOT EXISTS formulario2
 (id INTEGER PRIMARY KEY, param1 TEXT, param2 TEXT)''')

connection.commit()
connection.close()
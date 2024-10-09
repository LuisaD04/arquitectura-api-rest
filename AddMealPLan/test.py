from flask import Flask, render_template, request, jsonify
import requests
import sqlite3

def get_db_connection():
    conn = sqlite3.connect('formulario.db')
    conn.row_factory = sqlite3.Row
    return conn

app = Flask(__name__)

# Ruta para mostrar el formulario
@app.route('/')
def index():
    return render_template('form.html')  # Cargar el archivo form.html

# Ruta para manejar la solicitud del formulario y consumir la API
@app.route('/submit', methods=['POST'])
def submit():
    param1 = request.form.get('param1')
    param2 = request.form.get('param2')

    conn = get_db_connection()
    conn.execute('INSERT INTO formulario2 (param1, param2) VALUES (?, ?)', (param1, param2))
    conn.commit()
    conn.close()
    
    resultado = f"parametros recibidos, parametro1 = {param1}, parametro2 = {param2}"
    return jsonify({"mensaje":resultado})
if __name__ == '__main__':
    app.run(debug=True)

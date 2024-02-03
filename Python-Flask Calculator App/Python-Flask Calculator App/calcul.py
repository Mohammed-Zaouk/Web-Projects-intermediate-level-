from flask import Flask, render_template, request
from math import sqrt

class Calculator:
    def __init__(self, num1, num2):
        self.data = []
        self.num1 = num1
        self.num2 = num2

    def addition(self):
        result = self.num1 + self.num2
        self.data.append(result)
        return result
    
    def subtraction(self):
        result = self.num1 - self.num2
        self.data.append(result)
        return result
    
    def multiplication(self):
        result = self.num1 * self.num2
        self.data.append(result)
        return result

    def division(self):
        result = self.num1 / self.num2
        self.data.append(result)
        return result

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    result = None
    if request.method == 'POST':
        num1 = float(request.form['first'])
        num2 = float(request.form['second'])
        operator = request.form['operator']

        calculator = Calculator(num1, num2)

        if operator == '+':
            result = calculator.addition()
        elif operator == '-':
            result = calculator.subtraction()
        elif operator == '*':
            result = calculator.multiplication()
        elif operator == '/':
            result = calculator.division()

    return render_template('calculatric.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)

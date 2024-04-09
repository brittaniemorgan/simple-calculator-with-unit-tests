/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function () {
    beforeEach(function () {
        var fixture = '<div id="fixture">' +
            '<input type="text" class="display" disabled>' +
            '<div class="keys">' +
            '<div class="row">' +
            '<button value="+/-" class="operator">+/-</button>' +
            '<button value="√" class="operator">√</button>' +
            '<button value="%" class="operator">%</button>' +
            '<button value="/" class="operator">/</button>' +
            '</div>' +
            '<div class="row">' +
            '<button value="MRC" class="operator">MRC</button>' +
            '<button value="M-" class="operator">M-</button>' +
            '<button value="M+" class="operator">M+</button>' +
            '<button value="*" class="operator">*</button>' +
            '</div>' +
            '<div class="row">' +
            '<button value="7">7</button>' +
            '<button value="8">8</button>' +
            '<button value="9">9</button>' +
            '<button value="-" class="operator">-</button>' +
            '</div>' +
            '<div class="row">' +
            '<button value="4">4</button>' +
            '<button value="5">5</button>' +
            '<button value="6">6</button>' +
            '<button value="+" class="operator">+</button>' +
            '</div>' +
            '<div class="row">' +
            '<button value="1">1</button>' +
            '<button value="2">2</button>' +
            '<button value="3">3</button>' +
            '<button value="=" class="operator">=</button>' +
            '</div>' +
            '<div class="row">' +
            '<button value="C" class="operator">C</button>' +
            '<button value="0">0</button>' +
            '<button value="." class="operator">.</button>' +
            '<div class="placeholder"></div>' +
            '</div>' +
            '</div>' +
            '</div>';

        document.body.insertAdjacentHTML(
            'afterbegin', fixture);
    });

    afterEach(function () {
        document.body.removeChild(document.getElementById('fixture'));
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function() {
        window.calculator.init();
      });

    it('should return 7 for 7', () => {
        document.querySelector('button[value="7"]').click();
        expect(document.querySelector('.display').value).toEqual('7');
    });

    it("should return '' for 7 then C", () => {
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="C"]').click();
        expect(document.querySelector('.display').value).toEqual('');
    });

    it('should return 286 for 2 then 8 then 6', () => {
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="6"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('286');
    });

    it('should return 10 for 2 + 8', () => {
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="+"]').click();
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('10');
    });

    it('should return -573 for 401 - 974', () => {
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="0"]').click();
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="9"]').click();
        document.querySelector('button[value="7"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('-573');
    });

    it('should return 4 for 8 - 4', () => {
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('4');
    });

    it('should return -2 for -6 + 4', () => {
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="6"]').click();
        document.querySelector('button[value="+"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('-2');
    });

    it('should return -10 for -6 -4', () => {
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="6"]').click();
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('-10');
    });

    it('should return 17 for 85/5', () => {
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="5"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="5"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('17');
    });

    it('should return -13 for -65/5', () => {
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="6"]').click();
        document.querySelector('button[value="5"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="5"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('-13');
    });

    it('should return -9 for 36/-4', () => {
        document.querySelector('button[value="3"]').click();
        document.querySelector('button[value="6"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('-9');
    });

    it('should return 0.1 for 1/10', () => {
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="0"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('0.1');
    });

    it('should return -0.75 for -9/12', () => {
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="9"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('-0.75');
    });

    it('should return 16.5 for -33/-2', () => {
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="3"]').click();
        document.querySelector('button[value="3"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('16.5');
    });

    it('should return 48 for 12 * 4', () => {
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="*"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('48');
    });

    it('should return 14 for 3 * 4 + 2', () => {
        document.querySelector('button[value="3"]').click();
        document.querySelector('button[value="*"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="+"]').click();
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('14');
    });

    it('should return 8 for 12 - 4 = 8 then C then 2 then MRC', () => {
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="C"]').click();
        document.querySelector('button[value="MRC"]').click();
        expect(document.querySelector('.display').value).toEqual('8');
    });

    it('should clear memory and return nothing for 12 - 4 = 8 then MRC then MRC then C', () => {
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        document.querySelector('button[value="MRC"]').click();
        document.querySelector('button[value="MRC"]').click();
        document.querySelector('button[value="C"]').click();
        expect(document.querySelector('.display').value).toEqual('');
    });

    it('should return 20 for 8 + 8 = 16 then C then 4 then M+', () => {
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="+"]').click();
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="="]').click();
        document.querySelector('button[value="C"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="M+"]').click();
        expect(document.querySelector('.display').value).toEqual('20');
    });

    it('should return 39 for 9 * 5 = 45 then C then 6 then M-', () => {
        document.querySelector('button[value="9"]').click();
        document.querySelector('button[value="*"]').click();
        document.querySelector('button[value="5"]').click();
        document.querySelector('button[value="="]').click();
        document.querySelector('button[value="C"]').click();
        document.querySelector('button[value="6"]').click();
        document.querySelector('button[value="M-"]').click();
        expect(document.querySelector('.display').value).toEqual('39');
    });

    it('should return 7 for √49', () => {
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="9"]').click();
        document.querySelector('button[value="√"]').click();
        expect(document.querySelector('.display').value).toEqual('7');
    });

    it('should return 0.005 for 25/50 = .5 then %', () => {
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="5"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="5"]').click();
        document.querySelector('button[value="0"]').click();
        document.querySelector('button[value="="]').click();
        document.querySelector('button[value="%"]').click();
        expect(document.querySelector('.display').value).toEqual('0.005');
    });

    it('should return -7 for 7 then +/-', () => {
        document.querySelector('button[value="7"]').click();
        document.querySelector('button[value="+/-"]').click();
        expect(document.querySelector('.display').value).toEqual('-7');
    });

    it('should return 2 for √144 - 14 = -2 then +/-', () => {
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="√"]').click();
        document.querySelector('button[value="-"]').click();
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        document.querySelector('button[value="+/-"]').click();
        expect(document.querySelector('.display').value).toEqual('2');
    });

    it('should return Error for √-1', () => {
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="+/-"]').click();
        document.querySelector('button[value="√"]').click();
        expect(document.querySelector('.display').value).toEqual('Error');
    });

    it('should return 0 for square root on empty display', () => {
        document.querySelector('button[value="√"]').click();
        expect(document.querySelector('.display').value).toEqual('0');
    });

    it('should return error for 80/0', () => {
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="0"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('Error');
    });

    it('should return error for 1+2+', () => {
        document.querySelector('button[value="1"]').click();
        document.querySelector('button[value="+"]').click();
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="+"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('Error');
    });

    it('should return error for 3*/4', () => {
        document.querySelector('button[value="3"]').click();
        document.querySelector('button[value="*"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('Error');
    });

    it('should return nothing M+ on an empty screen', () => {
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="="]').click();
        document.querySelector('button[value="C"]').click();
        document.querySelector('button[value="M+"]').click();
        expect(document.querySelector('.display').value).toEqual('');
    });

    it('should return nothing M- on an empty screen', () => {
        document.querySelector('button[value="2"]').click();
        document.querySelector('button[value="="]').click();
        document.querySelector('button[value="C"]').click();
        document.querySelector('button[value="M-"]').click();
        expect(document.querySelector('.display').value).toEqual('');
    });

    it('should return 20  for 80/0 then 80/4', () => {
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="0"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="="]').click();
        //Error message should be removed when working a button is clicked
        document.querySelector('button[value="8"]').click();
        document.querySelector('button[value="0"]').click();
        document.querySelector('button[value="/"]').click();
        document.querySelector('button[value="4"]').click();
        document.querySelector('button[value="="]').click();
        expect(document.querySelector('.display').value).toEqual('20');
    });
});

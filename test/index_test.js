describe('Calc Handson', function() {
    beforeEach(function() {
	document.body.innerHTML='<TABLE BORDER=2 id="app"><TR><TD align="center"><INPUT TYPE="text" ID="screen" NAME="screen" style="width:99%"><br>   </TD> </TR> <TR><TD> <INPUT TYPE="button" NAME="7" VALUE="  7  " onclick="update(7)">  <INPUT TYPE="button" NAME="8" VALUE="  8  " onclick="update(8)"><INPUT TYPE="button" NAME="9"VALUE="  9  " onclick="update(9)"><INPUT TYPE="button" NAME="+" VALUE="  +  " onclick="update("+")"><br><INPUT TYPE="button" NAME="4" VALUE="  4  " onclick="update(4)">  <INPUTTYPE="button" NAME="5" VALUE="  5  " onclick="update(5)"><INPUT TYPE="button" NAME="6" VALUE="  6  " onclick="updat(6)"> <INPUT TYPE="button" NAME="-" VALUE="  -  " onclick="update("-")"><br><INPUTTYPE="button" NAME="1" VALUE="  1  " onclick="update(1)"> <INPUT TYPE="button" NAME="2" VALUE="  2  " onclick="update(2)"><INPUT TYPE="button" NAME="3" VALUE="  3  " onclick="update(3)"> <INPUT TYPE="button" NAME="*"VALUE="  x  " onclick="update("*")"><br> <INPUT TYPE="button" NAME="c" VALUE="  c  "onclick="form_reset();">   <INPUT TYPE="button" NAME="0" VALUE="  0  " onclick="update(0)">  <INPUT TYPE="button" NAME="=" VALUE="  =  " onclick="result();"><INPUT TYPE="button" NAME="/" VALUE="  /  " onclick="update("/")">             </TD></TR> </TABLE>';
      
    });

    afterEach(function() {
        document.body.removeChild(document.getElementById('app'));
    });

    describe('Calc ', function() {
         it('update function should exist', function() {
            update(1);
	    expect(document.getElementById("screen").value).toBe('1');

        });
it('update function should exist', function() {
            update(2);
	    expect(document.getElementById("screen").value).toBe('2');

        });
it('update function should exist', function() {
            update(3);
	    expect(document.getElementById("screen").value).toBe('3');

        });
it('update function should exist', function() {
            update(4);
	    expect(document.getElementById("screen").value).toBe('4');

        });
it('update function should exist', function() {
            update(5);
	    expect(document.getElementById("screen").value).toBe('5');

        });
it('update function should exist', function() {
            update(6);
	    expect(document.getElementById("screen").value).toBe('6');

        });
it('update function should exist', function() {
            update(7);
	    expect(document.getElementById("screen").value).toBe('7');

        });
it('update function should exist', function() {
            update(8);
	    expect(document.getElementById("screen").value).toBe('8');

        });
it('update function should exist', function() {
            update(9);
	    expect(document.getElementById("screen").value).toBe('9');

        });
it('update function should exist', function() {
            update(0);
	    expect(document.getElementById("screen").value).toBe('0');

        });

it('update function should exist', function() {
            update('*');
	    expect(document.getElementById("screen").value).toBe('*');

        });
it('update function should exist', function() {
            update('+');
	    expect(document.getElementById("screen").value).toBe('+');

        });
        
it('update function should exist', function() {
            update('-');
	    expect(document.getElementById("screen").value).toBe('-');

        });
it('update function should exist', function() {
            update('/');
	    expect(document.getElementById("screen").value).toBe('/');

        });
it('result function should exist', function() {
            update(7);
	    update('+');
	    update(8);
	    result();
	    expect(document.getElementById("screen").value).toBe('15');

        });
it('form_reset function should exist', function() {
            update(7);
	    form_reset();
	    expect(document.getElementById("screen").value).toBe('');
	});


    });
});
